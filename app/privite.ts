class Test {
    public name:string;
    protected age:number;
    constructor(name:string, age:number) {
        this.name = name
        this.age =age
    }
}

var t = new Test("sz",2)
console.log('123',t)