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

function findInBinaryTree(node: TreeNode | null, target: number) : boolean {
    if(node == null) return false;
    if(node.val == target)  return true;
    
    let left = findInBinaryTree(node.left,target);
    if(left == true) return true;

    let right = findInBinaryTree(node.right,target);
    if(right == true) return true;

    return false;
}

console.log(findInBinaryTree(root,130));
