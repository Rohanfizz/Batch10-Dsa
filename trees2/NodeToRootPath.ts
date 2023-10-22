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

function nodeToRootPath(node:TreeNode | null,target : number) : number[]{
    if(node == null) return [];
    if(node.val == target) return [node.val];

    let left = nodeToRootPath(node.left,target);
    if(left.length != 0){
        left.push(node.val);
        return left;
    }

    let right = nodeToRootPath(node.right,target);
    if(right.length != 0){
        right.push(node.val);
        return right;
    }
    return [];
}

console.log(nodeToRootPath(root,1));
