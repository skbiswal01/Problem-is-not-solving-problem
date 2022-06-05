//check if a subtree exists in the main binary tree

var isSubtree = function(root, subRoot) {
    if(isMatch(root, subRoot)) return true;
  
    if (root == null) {
      return false
    };
  
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isMatch(r1, r2){
  if(r1 != null && r2 == null){
      return false;
  }
   if(r1 == null && r2 != null){
      return false;
  }
  
   if(r1 == null && r2 == null){
      return true;
  }
  
  return (r1.val == r2.val) &&(isMatch(r1.left, r2.left) && isMatch(r1.right, r2.right))
}