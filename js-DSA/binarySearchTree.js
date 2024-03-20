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
  addItems(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
      this.count++;
    } else {
      insertNode(this.root, value);
      this.count++;
    }

    function insertNode(root, value) {
      if (root.value > value) {
        if (root.left === null) {
          root.left = new TreeNode(value);
        } else {
          insertNode(root.left, value);
        }
      } else {
        if (root.right === null) {
          root.right = new TreeNode(value);
        } else {
          insertNode(root.right, value);
        }
      }
    }
  }

  preOrder(root) {
    if (root === null) {
      return;
    }
    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  postOrder(root) {
    if (root === null) {
      return;
    }
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.value);
  }
  inOrder(root) {
    if (root === null) {
      return;
    }
    this.inOrder(root.left);
    console.log(root.value);
    this.inOrder(root.right);
  }

  leverOrderBFS() {
    let queue = [];
    queue.push(this.root);
    while (queue.length !== 0) {
      let node = queue.shift();
      console.log(node.value);
      if (node.left != null) {
        queue.push(node.left);
      }
      if (node.right != null) {
        queue.push(node.right);
      }
    }
  }

  minValue(root) {
    // console.log(root.value);
    if (root.left == null) {
      // console.log(root.value)
      return root.value;
    } else {
      this.minValue(root.left);
    }
  }

  maxValue(root) {
    // console.log(root.value);
    if (root.right == null) {
      console.log(root.value);
    } else {
      this.maxValue(root.right);
    }
  }
}

let tree = new BST();
tree.addItems(5);
tree.addItems(10);
tree.addItems(5);
tree.addItems(25);
tree.addItems(11);
tree.addItems(2);
tree.addItems(90);
tree.addItems(8);
tree.addItems(7);

// tree.preOrder(tree.root);
// console.log('------------------------')
// tree.postOrder(tree.root);
// console.log('------------------------')

//tree.inOrder(tree.root);
console.log("------------------------");
let min = tree.minValue(tree.root);
let max = tree.maxValue(tree.root);
console.log(min);
