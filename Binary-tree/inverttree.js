//Given the root of a binary tree, invert the tree, and return its root.

var invertTree = function(root) {
    if(!root) return root;
   
    
    return traverse(root);
    
};

 function traverse(node) {
        if(!node) return null;
        const newNode = { val: node.val };
        newNode.left = traverse(node.left);
        newNode.right = traverse(node.right);
        //swap
        let temp = newNode.left;
        newNode.left = newNode.right;
        newNode.right = temp;
        return newNode;
    }

 