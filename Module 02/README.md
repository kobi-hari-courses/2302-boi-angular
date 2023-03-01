## Module 02 - Typescript
### Projects:
|     |     |
| --- | --- |
| [Fun With TS](./fun-with-ts/) | Introduction to the Typescript in NodeJs environment | 
| [Fun with Angular](./fun-with-angular/) | Bare bones angular application |

### Typescript introduction
* How to declare a type for a variable
* Declaring function return type
* Defining arrays
* Defining Tuples
* Defining Narrowed Object types
* Defining function signature types
* Using the `let` keyword
* Defining Classes
* Declaring constructors and initializing fields in the constructor signature
* private, public and protected fields
* Using interfaces
* Typescript definition for **Type Safety** as "signature compatible"
* Union Types
* Cross Types
* the `type` alias
* We saw how to build **Modular** typescript projects by defining typescript modules
  * defining exportable identifiers using the `export` keyword
  * defining imported identifiers using the `import` keyword

### How to Tsc
* We have created ts file and compiled it with TSC and run it with Node
* We saw how to use the file `tsconfig` to configure the typescript compiler

### Angular from way above
* We talked again about SPA and the role of client application, UI Server and Data Server
* We explained that angular development is done in a nodeJS environment but the code is compiled to a javascript that runs in the browser
* We talked about how an angular application is served:
    - You write your code in many files
    - The files go through compilation
    - The compiled files are then packed into single `main.js` file
    - The UI Server serves an empty `index.html`
    - The html file links to the main.js which then runs in the browser

### The angular CLI
* Helps us to create new angular projects with many many files
* Helps us to generate angular "items" with initial template
* Helps us to automagically compile and pack our code - **ALL THE TIME**
* Helps us by bringing up a development web server that serves the application to the browser in 'localhost:4200'
* Can also help us to automatically test the code and build it for production
* Is installed using npm

### An angular app structure
* We have created an app using the cli
* We run it using `ng serve` and the browsing the `localhost:4200`
* We went through the configuration files
* We saw how index.html is an empty html file that links to the compiled script
* We inspected `main.ts` and saw that it "bootstraps" a main module called `AppModule`
* We understood that an angular module is a `package of angular items`
* We saw the `AppModule` is just a class with `ngModule` decorator, which turns it into a module
* We saw that `AppComponent` is a class with `Component` decorator, which turns it into an angular component
* We saw that an angular component is a new "Html Tag" with its own looks and behavior
    - The behavior is written in typescript 
    - The looks are defined in html and CSS
