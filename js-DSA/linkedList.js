class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addtoFirst(data) {
    let newNode = new Node(data);
    if (this.head) {
      newNode.next = this.head;
    }
    this.head = newNode;
  }

  addtoLast(data) {
    let newNode = new Node(data);
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
  }

  deleteFromLast(){

  }

  deleteFromFirst(){
    
  }

  print() {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }

  count(){
    let count=0;
    let current = this.head;
    while(current!=null){
      count++;
      current = current.next;
    }
    return count;
  }
}

let linkedList = new LinkedList();
linkedList.addtoFirst(5);
linkedList.addtoFirst(10);
linkedList.addtoFirst(15);
linkedList.addtoLast(20)
linkedList.addtoFirst(25);
console.log("size - ",linkedList.count());

linkedList.print();
