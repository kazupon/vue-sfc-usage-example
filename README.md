# Single File Components (SFC) Usage example

This is an example of using SFC from other Vue App projects.

## Structure

- lib: Component implemtend with SFC (.vue)
- app: Vue Application Project (genrated with `vue init webpack-simple`)


## How to setup

```
$ npm i -g vue-cli
$ cd lib
$ vue build ./hello.vue --lib --prod
$ cd ../app/
$ npm i
$ npm run dev
```
