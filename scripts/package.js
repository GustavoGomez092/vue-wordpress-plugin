import AdmZip from 'adm-zip'
import path, {resolve} from 'path'
import fs from 'fs'
import mv from 'mv'

var zip = new AdmZip();

function fromDir(startPath, filter) {

  if (!fs.existsSync(startPath)) {
      console.log("no dir ", startPath)
      return
  }
  const iterate = (startPath, filter) => {
    const foundFiles = []
    var files = fs.readdirSync(startPath)
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i])
        var stat = fs.lstatSync(filename)
        if (stat.isDirectory()) {
            fromDir(filename, filter)
        } else if (filename.endsWith(filter)) {
            foundFiles.push(resolve(`${startPath}${filename}`))
        }
    }
    return foundFiles
  }
  return iterate(startPath, filter)
}

  // find PHP files
  const files = fromDir('./', '.php')

  //Add PHP files to the package
  files.forEach(x => {
    zip.addLocalFile(x)
  })

  // create dist folder inside dist folder and move files there
  mv('./dist', './plugin-dist/dist', {mkdirp: true}, function(err) {
    // add dist folder
    zip.addLocalFolder(resolve('./plugin-dist'))

    // create Zip
    if(process.argv[2]) {
      zip.writeZip(`./${process.argv[2]}.zip`)
    } else {
      zip.writeZip("./plugin.zip")
    }


    // delete dist folder
    fs.rmSync('./plugin-dist', { recursive: true, force: true })
    fs.rmSync('./dist', { recursive: true, force: true })
  })

