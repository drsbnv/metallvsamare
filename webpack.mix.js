let mix = require('laravel-mix');
require('mix-tailwindcss');

mix
  .js('src/js/app.js', 'assets/js')
  .sass('src/scss/app.scss', 'assets/css')
  .tailwind()

if (mix.inProduction()) {
  mix.version();
} else {
  mix.sourceMaps().webpackConfig({ devtool: 'inline-source-map' });
  mix.browserSync({
    proxy: '127.0.0.1:4000',
    notify: false,
    open: true,
    port: 3000 ?? 80,
    files: ['_site/**/*.*'],
  });
}

mix.disableSuccessNotifications();