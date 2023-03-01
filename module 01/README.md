## Module 01 - Javascript and NodeJS
### Projects:
|     |     |
| --- | --- |
| [Fun With JS](./fun-with-js/) | Introduction to the crazy ways of Javascript | 
| [Fun with NodeJS](./fun-with-nodejs/) | Node js, npm, and Webpack |

### Javascript types and gotchas
* We have Convered the 6 types of javascript: boolean, number, string, object, function, and undefined
* We have seen how to use JSON to describe complex object values
* We have seen the true meaning of the `new` and `this` keywords, and most specifically - that they do not have the same meaning as in Java.
* We have experienced the problem of the missing `this` context
* We learned about the `prototype` object and property

### Introduction Node
* We learned the difference between serverside javascript (**NodeJS**) and clientside web javascript
  * We talked about modularity and the `require` keyword
  * We talked about `webpack`  - a utility to pack "serverside" javascript files into one "web-ready" file
* We have installed NodeJS from the website and run javascript files using node
* Npm was also installed
    * We have seen how the file `pakcage.json` helps to manage our project
    * We used npm to incorporate external JS packages into our project
    * We saw how to use npm to globally install javacript tools so we can execute them from anywhere

### About the various Javascript engines
* We reiterated that javascript can be executed either by NodeJS and by the browser
* We understood that there are differences in the features that the javascripts support
* We understood that "web" javascript allows us to use the `window` object and the `DOM` while NodeJS does not
* We understood that "nodeJS" javascript allows a javascript file to "require" another one thus allowing us to build a more modular project
* We understood that we therefore can enjoy the benefits of npm to manage our projects
* We talked about the fact the in angular, we develop for nodeJS and then "compile" it to work on the web
* We said that one of the features required to allow that is the use of **Webpack** a utility that packs several dependent files into one javascript file.
