//find the depth of the binary tree

var maxDepth = function(root) {
    if(root == null){
        return 0;
    }  
    else{
        var lh = maxDepth(root.left);
        var rh = maxDepth(root.right);
        return (lh > rh) ? lh + 1 : rh + 1;
    } 
 };