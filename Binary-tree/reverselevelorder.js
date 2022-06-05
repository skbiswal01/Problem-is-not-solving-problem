//revrerse level order traversal of binary tree

function reverseLevelOrder(root){
    
    let S = [];
        let Q = [];
        Q.push(root);
   
        // Do something like normal
        // level order traversal order.Following
        // are the differences with normal
        // level order traversal
        // 1) Instead of printing a node,
        // we push the node to stack
        // 2) Right subtree is visited before left subtree
        while (Q.length != 0)
        {
            /* Dequeue node and make it root */
            node = Q[0];
            Q.shift();
            S.push(node);
   
            /* Enqueue right child */
            if (node.right != null)
                // NOTE: RIGHT CHILD IS ENQUEUED BEFORE LEFT
                Q.push(node.right);
                  
            /* Enqueue left child */
            if (node.left != null)
                Q.push(node.left);
        }
   
        // Now pop all items from stack
        // one by one and print them
        while (S.length != 0)
        {
            node = S.pop();
            console.log(node.data + " ");
             
        }
}
reverseLevelOrder(root);