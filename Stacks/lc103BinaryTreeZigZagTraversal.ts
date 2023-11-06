function zigzagLevelOrder(root: TreeNode | null): number[][] {
    let ans : number[][] = [];
    if(root == null) return ans;
    let curr: TreeNode[] = [];
    let next: TreeNode[] = [];

    curr.push(root);

    let level = "even";

    while(curr.length > 0){
        let currLevel:number[] = [];

        while(curr.length > 0){
            let currNode = curr.pop();
            currLevel.push(currNode.val);
            
            if(level == "even"){
                //left
                if(currNode.left != null) next.push(currNode.left);
                //right
                if(currNode.right != null) next.push(currNode.right);
            }else{
                //right
                if(currNode.right != null) next.push(currNode.right);
                //left
                if(currNode.left != null) next.push(currNode.left);
            }
        }

        ans.push(currLevel);

        curr = next;
        next = [];

        if(level== "even") level = "odd";
        else level = "even";
    }
    return ans;
};

