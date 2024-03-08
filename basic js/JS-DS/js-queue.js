//write queue implementation in js?

class queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    this.queue.push(item);
  }
  dequeue() {
    return this.queue.shift();
  }
  size() {
    return this.queue.length;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  print() {
    return this.queue.toString();
  }
}

let q = new queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

console.log(q.size());
q.dequeue();
q.dequeue();
console.log(q.print());
