axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
netlify      = require 'roots-netlify'

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    js_pipeline(files: 'assets/js/*.coffee'),
    css_pipeline(files: 'assets/css/*.styl'),
    netlify
      redirects: [
        '/news /blog 200'
        '/news/:year/:month:/:date/:slug /blog/:year/:month/:date/:story_id 200'
        '/news/* /blog/:splat 200'
        '/redirect / 301'
        '/temp_redirect / 302'
        '/ecommerce /closed 404'
      ]
      headers:
        '/protected/path':
          'Cache-Control': 'max-age: 3000'
          'Basic-Auth': 'username:password'
        '/*':
          'X-Frame-Options': 'DENY'
          'X-XSS-Protection': '1; mode=block'
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  jade:
    pretty: true
