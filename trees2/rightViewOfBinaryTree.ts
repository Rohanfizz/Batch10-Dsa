
function rightSideView(root: TreeNode | null): number[] {
    if(root == null) return [];
    let queue: any= [];
    queue.push(root);
    let ans: any = [];

    while(queue.length > 0){
        let sz = queue.length;
        let level : any=[];
        while(sz > 0){
            //Remove
            let curr = queue.shift();
            //Work
            level.push(curr.val);
            //left
            if(curr.left != null) queue.push(curr.left);
            //right
            if(curr.right != null) queue.push(curr.right);
            sz--;
        }
        ans.push(level[level.length-1]);//choose last element of every level
    }
    return ans;
};



