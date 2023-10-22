class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
let treeArr: number[] = [
    8, 3, 1, -1, -1, 6, 4, -1, -1, 7, -1, -1, 10, -1, 14, 13, -1, -1, -1,
];
let idx: number = 0;
function constructTree(arr: number[]): TreeNode | null {
    if (arr[idx] == -1) {
        idx++;
        return null;
    }

    let me = new TreeNode(arr[idx]);
    idx++;
    let leftChild = constructTree(arr);
    let rightChild = constructTree(arr);

    me.left = leftChild;
    me.right = rightChild;

    return me;
}

let root = constructTree(treeArr);


function bfs(root : TreeNode | null){
    let queue:any[] = [];
    queue.push(root);
    let ans:any = [];
    while(queue.length > 0){
        //Remove
        let curr = queue.shift();
        //Work
        ans.push(curr.val);
        //Add left
        if(curr.left != null) queue.push(curr.left);
        //Add right
        if(curr.right != null) queue.push(curr.right);
    }
    console.log(ans);  
}

function bfsLevelByLevel(root : TreeNode | null){
    let queue:any[] = [];
    queue.push(root);
    let ans:any = [];
    while(queue.length > 0){
        let sz = queue.length;
        let level : any = [];
        while(sz > 0){
            //Remove
            let curr = queue.shift();
            //Work
            level.push(curr.val);
            //Add left
            if(curr.left != null) queue.push(curr.left);
            //Add right
            if(curr.right != null) queue.push(curr.right);
            sz--;
        }
        ans.push(level);
    }
    console.log(ans);  
}
bfsLevelByLevel(root);