## Module 01 - Javascript and NodeJS
### Projects:
|     |     |
| --- | --- |
| [Fun With JS](./fun-with-js/) | Introduction to the crazy ways of Javascript | 


### Javascript types and gotchas
* We have Convered the 6 types of javascript: boolean, number, string, object, function and undefined
* We have seen how to use JSON to describe complex object values
* We have seen the true meaning of the `new` and `this` keywords, and most specifically - that they do not have the same meaning as in Java.
* We learned how to use the `prototype` to expose common functionality to all objects created by the same constructor
* We have experienced the problem of the missing `this` context

### About the various Javascript engines
* We reiterated that javascript can be executed either by NodeJS and by the browser
* We understood that there are differences in the features that the javascripts support
* We understood that "web" javascript allows us to use the `window` object and the `DOM` while NodeJS does not
* We understood that "nodeJS" javascript allows a javascript file to "require" another one thus allowing us to build a more modular project
* We understood that we therefore can enjor the benefits of npm to manage our projects
* We talked about the fact the in angular, we develop for nodeJS and then "compile" to to work on the web
* We said that one of the features required to allow that is the use of **Webpack** a utility that packs several dependent files into one javascript file.

### Typescript introduction
* How to declare a type for a variable
* Declaring function return type
* Defining arrays
* Defining Tuples
* Using the `let` keyword
* Defining Classes
* Declaring constructors and initializing fields in the constructor signature
* private, public and protected fields
* Using interfaces
* Typescript definition for **Type Safety** as "signature compatible"
* Union Types
* Cross Types
* the `type` alias

### How to use Node, Npm, and Tsc
* We have installed NodeJS from the website and run javascript files using node
* Npm was also installed
    * We have seen how the file `pakcage.json` helps to manage our project
    * We used npm to incorporate external JS packages into our project
    * We saw how to use npm to globally install javacript tools so we can execute them from anywhere
* We have created ts file and compiled it with TSC and run it with Node
* We saw how to use the file `tsconfig` to configure the typescript compiler
* We saw how to use the file `launch.json` to configure the vscode debugger and allow us to debug in vs code.




