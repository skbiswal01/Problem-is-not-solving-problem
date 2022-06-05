//left view of the binary tree

function printLeftView(root){
 
    if (root == null)
        return
 
    let q = []
    q.push(root)
 
    while (q.length){
 
        let n = q.length
 
        for(let i=1;i< n + 1;i++){
            let temp = q.shift()
 
            if (i == 1)
                console.log(temp.data)

            if (temp.left != null)
                q.push(temp.left)
 
            if (temp.right != null)
                q.push(temp.right)
        }
    }
}