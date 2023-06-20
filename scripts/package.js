import AdmZip from 'adm-zip'
import path, {resolve} from 'path'
import fs from 'fs'

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

  // add dist folder
  zip.addLocalFolder(resolve('./dist'))

  // create Zip
  zip.writeZip("./plugin.zip")

  // delete dist folder
  fs.rmSync('./dist', { recursive: true, force: true })

