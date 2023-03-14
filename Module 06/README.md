## Module 06 - RxJS Operators
### Projects

|     |     |
| --- | --- |
| [fun-with-rx-operators](./fun-with-rx-operators/) | RxJS Operators |
| [colors-rx](./colors-rx/) | A practical example using Operators |

### Introduction to `RxJS` operators
* We talked about the concept of operators in math, strings and arrays
* We understood that RxJS operators create observables. 
* We saw 4 documentation web sites that serve as reference guide for reactive operators
    * [ReactiveX docs](http://reactivex.io/)
    * [RxJS docs](https://rxjs-dev.firebaseapp.com/)
    * [Rx Marbles](https://rxmarbles.com/)
    * [Rx Marble Visualizer](https://rxviz.com/)
* We covered some simple operators
    * [map](https://rxjs-dev.firebaseapp.com/api/operators/map)
    * [from](https://rxjs-dev.firebaseapp.com/api/index/function/from)
    * [filter](https://rxjs-dev.firebaseapp.com/api/operators/filter)
    * [take](https://rxjs-dev.firebaseapp.com/api/operators/take)
    * [takeLast](https://rxjs-dev.firebaseapp.com/api/operators/takeLast)
* We created an example that uses observable to convert color search keyword into a list of matching results (colors)
* We used the `map` operator to convert user input to results

### Using `async` mapping operators
* We have converted our service into an asyncronous one by returning a `Promise` instead of the results
* We saw that now our `map` operators returns an `Observable<Promise<Results>>`
* We learned about the term `Higher Order Observables`
* We saw that there are several `flatenning` operators that reduce the order of the observable
* We used `mergeAll` and `switchAll` after the `map`
* We understood that `switchMap` is short for `map` and then `switchAll`
