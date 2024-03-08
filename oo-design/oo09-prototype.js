const Counter=function(count=0){
    this.count=count
    this.increment=function(){
        return ++(this.count)
    }
}

Counter.prototype.getCount=function(){return this.count}
Counter.prototype.toString=function(){return `Counter[${this.count}]`}

// anything attached to prototype is shared to all the objects created using the aame constructor
// any method attached to constructor's prototype will also woirk for all objects using that constructor
// this way we can share the same behaviour

var c1=new Counter();
var c2=new Counter(10);

console.log(c2.getCount());



