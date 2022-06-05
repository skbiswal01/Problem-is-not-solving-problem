//level  order traversal of binary tree

function LevelOrder(root){
    
    var queue = [];
  queue.push(root);
  while (queue.length != 0) {
    
      var tempNode = queue.shift();
      return tempNode.data;

      
      if (tempNode.left != null) {
          queue.push(tempNode.left);
      }

      
      if (tempNode.right != null) {
          queue.push(tempNode.right);
      }
  }
}
var x = LevelOrder(root);


//to accept it on leetcode
var levelOrder = function(root) {
    let result = [];
   currentLevelNodes = [];
   if(root) 
       currentLevelNodes.push(root);
   while(currentLevelNodes.length > 0) {
       current = [];
       let len = currentLevelNodes.length;
       for (let i = 0; i< len; i++) {
           let node = currentLevelNodes.shift();
           current.push(node.val);
           if(node.left) {
               currentLevelNodes.push(node.left);
           }
           if(node.right) {
               currentLevelNodes.push(node.right);
           }
       }
       result.push(current);
   }
   return result;
};