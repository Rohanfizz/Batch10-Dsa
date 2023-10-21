class TreeNode{
    val : number;
    left : TreeNode | null;
    right : TreeNode | null;
    constructor(val:number){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
let treeArr = [8,3,1,-1,-1,6,4,-1,-1,7,-1,-1,10,-1,14,13,-1,-1,-1];
let idx = 0;
function constructTree(arr) : TreeNode | null{
    if(arr[idx] == -1){
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

function displayTree(node: TreeNode | null) : void{
    if(node == null) return;
    
    let leftNodeVal = node.left == null?"null":node.left.val;
    let rightNodeVal = node.right == null?"null":node.right.val;
    console.log(node.val +": "+leftNodeVal+", "+rightNodeVal);

    displayTree(node.left);
    displayTree(node.right);
}

function countNodes(root:TreeNode) : number{

}

let root =  constructTree(treeArr);
displayTree(root);







