class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.count = 0;
  }
  size() {
    return this.count;
  }
  add(val) {
    if (this.root == null) {
      this.root = new TreeNode(val);
      this.root.left = null;
      this.root.right = null;
      this.count++;
    } else {
      const findNode = (root) => {
        if (root == null) {
          this.root = new TreeNode(val);
          this.root.left = null;
          this.root.right = null;
          this.count++;
        }
        if (this.root.value < val) {
          findNode(this.root.right);
        } else if (this.root.value > val) {
          findNode(this.root.left);
        } else {
        }
      };
      findNode(this.root);
    }
  }
  print(){
    let node = this.root;
    
  }
}

let tree = new BST();
tree.add(5); //O(log n)
tree.add(3); //O(log n)
console.log(tree.size());
