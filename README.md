# Vue 3 WordPress plugin boilerplate

This template should help get you started developing Wordpress plugins using Vue 3 + Tailwind.

## Scripts

To start your project:<br/>
```git clone https://github.com/GustavoGomez092/vue-wordpress-plugin.git```

Change directory into the project folder:<br/>
```cd vue-wordpress-plugin```

Install dependencies:<br/>
```npm install```

Before starting development:<br/>
```npm run init```

Development server:<br/>
```npm run dev```

Package to zip:<br/>
```npm run package {{zipName}}```

## Considerations

To avoid style conflicts with any WordPress theme that you are using for your site, the plugin by default comes with a: "tw-" prefix on all classes (this can be disabled through the <code>tailwind.config.js</code>). We also added <code>scopedPreflightStyles</code> to limit Tailwind's CSS style resets to only happen at plugin container level.