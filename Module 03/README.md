## Module 03 - Angular Components
### Projects:
|     |     |
| --- | --- |
| [Hello Angular](./hello-angular/) | Introduction Angular and MVVM | 
| [Notepad](./notepad/) | Deep Dive into Angular styling, directives and Component authoring |

### The Evolution of the web into SPA
* We talked about how the web used to be a huge collection of HTML documents
* We talked about the `HTTP` protocol that is used to create short connections to server and receive response to a single request
* We talked about the `AJAX` paradigm where the client sends http requests to the server while the application continues to run, and integrates the received data into the `DOM`
* We have seen how `SPA` (Single Page Application) is the extreme case of the AJAX paradigm, where a full application is delivered as a single, empty page and a JS file with all the code to generate the UI.
* We covered how `Angular` fits into the SPA world by providing a work environment and development patterns for **clientside** single page apps

### Introduction to angular
* We used npm to intall the angular CLI
* We used the cli to generate a new angular project using `ng new`
* we have run the application using `ng serve` and viewed the application in the browser
* We went over the project structure and files, including `main.ts`, `index.html` and `styles.css`
* We have inspected the App Module and App Component and understood that
    * Angular applications are divided into Modules
    * A plain class turns into an Angular module using the `@NgModule` Decorator
    * Angular Modules contain components (amongst other things)
    * A plain class turns into an Angular Component using the `@Component` Decorator
* The anuglar engine inspects the DOM, and applies it's magic on elements it recognizes as components
    * Inject the template into the DOM node
    * Instantiate the component class
    * Bind the html to the component instance members

### MVVM
* We understood the evolution that lead to the `Model View View-Model` paradigm
* We learned the role of each part of the pattern
* We understood that a component is a pair of view and view model
* We saw how to create an angular application while thinking "mvvm"
* We wrote a simple search application
* We learned about the concept of **Directive** and understood that there are 2 types of them
    - Element directive - is put on an element and changes its behavior
    - Structural directive - is put on an element and can modify the structure of the HTML DOM
* We were introduced to the directives:
    - `*ngIf`
    - `*ngFor`
    - disabled
* We learned how to wire interactivity using angular events
    - for example `(click) = "doSomething()"`
* We learned about the concept of data binding and saw that there are 4 types of bindings
    - `{{value}}` - Text interpolation. For element content only
    - `[directive]="value"` - input binding - for directives and inputs
    - `(event)="action"` - event binding - for events
    - `*directive="whatever"` - for structural directive, each with its own syntax

### Introduction to angular binding
* We created the angular search
* We have seen how to "think MVVM" - describing the logic of our application in the view model and then writing the view and binding it to the view model.
* We have created a search application view model the performs search of a keyword
* We have seen `*ngIf` and `*ngFor` and understood what are structural directives and how they work
* We have used the `[disabled]` directive to disable the search box and button when the search is in progress

### Introduction to Grid Layout
* We have seen the Grid layout, and how to use it to create modren responsive UI layout
* We have seen how to declare grid lines using `grid-template-rows` and `grid-template-columns` on the container
* We have seen how to place grid children on a specific row or columns using `grid-row` and `grid-column` properties
* for more information, see the [complete guide to grid on CSS TRICKS](https://css-tricks.com/snippets/css/complete-guide-grid/): 
* Learn Grid by playing a game: [Grid Garden](https://cssgridgarden.com/)

### The notepad app
* We have created a responsive layout using css grid
* We have created a view model holding the lists of colors, fonts and sizes and the selected item in each array
* We have added actions that modify the selected color, font and size
* We have created a list of items in the HTML, and allowed to select color, size and font
* We have used fancy CSS to decorate it and make the app look nice
* We have learned about [class.XXX] and [style.XXX] directives

### Componantization of the notepad component
* We agreed that writing full scale applications in one component is difficult to maintain, which is why angular was built to support multi-component applications
* We created a `title` component that presents a title
* We have used the `@Input` Decorator to add input properties that may be passed through the HTML
* We saw how to feed `@Input` properties with "live" data through Binding and understood the flow of data through the `Input` properties
* We used the `@Output` Directive and the `EventMitter<T>` class to create our own events and raise them in our components
* We used the `(event)="action()"` Syntax to respond to an event in the container component
* We used the `$event` keyword to access event data
* We learned about the various lifecycle hooks of angular components:
  * The constructor itself
  * The `OnInit` interface (after the inputs have been initialized)
  * The `OnChanges` interface (after each time an input is updated)
  * The `OnDestroy` interface (right before the component is to be removed from the DOM and destroyed)
  * The `AfterViewInit` interface (right after the template has been created)

