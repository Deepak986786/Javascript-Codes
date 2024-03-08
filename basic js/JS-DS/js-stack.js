//write stack function in js?

class stack {
  constructor() {
    this.data = [];
  }
  push(data) {
    this.data.push(data);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length === 0;
  }
  size() {
    return this.data.length;
  }
  print() {
    console.log(this.data);
  }
}

let mystack = new stack();

mystack.push(5);
mystack.push(6);
mystack.push(7);
mystack.push(8);
mystack.push(9);
mystack.push(10);
mystack.push(11);
mystack.pop();
mystack.pop();
mystack.push(12);
console.log(mystack.size());

console.log(mystack);
mystack.print();
