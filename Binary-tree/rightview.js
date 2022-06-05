//right view of a binary tree;

function printRightView(root)
    {
        if (root == null)
            return;
 
        let q = [];
        q.push(root);
 
        while (q.length > 0) {
            
            let n = q.length;
 
            while (n-- > 0) {
 
                let x = q[0];
                q.shift();
 
                if (n == 0) {
                    document.write(x.data + " ");
                }
              
                if (x.left != null)
                    q.push(x.left);
               
                if (x.right != null)
                    q.push(x.right);
            }
        }
    }
     