# About this project

This is a version of [Sigma Vue Project](https://github.com/primefaces/sigma-vue) running inside a [Laravel](https://github.com/laravel/laravel) app with [Inertia Js](https://github.com/inertiajs/inertia) as a connection instead of [Vue Router](https://github.com/vuejs/vue-router).

Sigma Vue is an admin template builded with Vue Prime Ui Kit

Working with Inertia instead of Vue Router allows you to use all Laravel features like routes, controllers, models, policies, gates, middlewares, validations... keeping the [SPA](https://en.wikipedia.org/wiki/Single-page_application) aspect of the application without any loading between page requests and no worries with client side state management

## Docs

- [Vue](https://v3.vuejs.org/)
- [Laravel](https://laravel.com/docs/8.x)
- [Inertia Js](https://inertiajs.com/)
- [Ziggy Routes](https://github.com/tighten/ziggy)
- [Sigma Vue](https://www.primefaces.org/sigma-vue/#/documentation)
- [Prime Vue Ui Kit](https://primefaces.org/primevue/showcase/#/)

## Project setup 

\
After clone this repository, run:

```
composer install
```
```
npm install
```
```
npm run hot
```

\
And finally to start the server, run

```
php artisan serve
```

To view the application with the best performance, I recommend disabling xdebug on your server. Obviously this is a full version, with all the features of the Vue Sigma template enabled. After developing your own application, I recommend removing all unused components from the *resources/js/plugins/primevue.js* file.
