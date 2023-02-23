export class Calculator {
    private _res: number = 0;

    get result(): number {
        return this._res;
    }

    add(x: number): Calculator {
        this._res += x;
        return this;
    }

    mult(x: number): Calculator {
        this._res *= x;
        return this;
    }
}

class Point {
    
}