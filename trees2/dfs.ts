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

let preorder = "";
let inorder = "";
let postorder = "";

function dfs(node:TreeNode | null){
    if(node == null) return;
    
    preorder+=node.val+" ";

    dfs(node.left);

    inorder+=node.val+" ";
    
    dfs(node.right);

    postorder+=node.val+" ";
}
dfs(root);
console.log(preorder);
console.log(inorder);
console.log(postorder);


