const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  rootNode = null;
  
    root() {
        return this.rootNode; 
    }

    add(data) {
        const newNode = new Node(data);

        if (!this.rootNode) {
            this.rootNode = newNode;
            return;
        }

        let currentNode = this.rootNode;

        while(currentNode) {
            if (newNode.data < currentNode.data) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }

                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }

                currentNode = currentNode.right;
            }
        }
    }

    has(data) {
        const node = this.find(data);

        if (node === null) {
            return false;
        };

        return true;
    }

    find(data) {
        let currentNode = this.rootNode;

        while (currentNode !== null && currentNode.data !== data) {
            if (currentNode.data < data) {
                currentNode = currentNode.right
            } else { 
                currentNode = currentNode.left
            }
        }

        return currentNode;
    }

    remove(data) {
        this.rootNode = this.removeNode(this.rootNode, data);
    }

    removeNode(node, data) {
        if (node === null) {
            return null;
        }

        if (node.data === data) {
            if (node.left === null && node.right === null) {
                return null;
            }
            if (node.left  === null) {
                return node.right;
            }

            if (node.right === null) {
                return node.left;
            }

            let minRightNode = node.right;

            while (minRightNode.left !== null) {
                minRightNode = minRightNode.left;
            }

            node.data = minRightNode.data;
            node.right = this.removeNode(node.right, minRightNode.data);

            return node;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }

    min() {
        let currentNode = this.rootNode;

        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }

        return currentNode.data;
    }

    max() {
        let currentNode = this.rootNode;

        while (currentNode.right !== null) {
            currentNode = currentNode.right;
        }

        return currentNode.data;
    }
}

class Node {
    left  = null;
    right = null;

    constructor(data) {
        this.data = data;
    }
}