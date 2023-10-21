var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var treeArr = [8, 3, 1, -1, -1, 6, 4, -1, -1, 7, -1, -1, 10, -1, 14, 13, -1, -1, -1];
var idx = 0;
function constructTree(arr) {
    if (arr[idx] == -1) {
        idx++;
        return null;
    }
    var me = new TreeNode(arr[idx]);
    idx++;
    var leftChild = constructTree(arr);
    var rightChild = constructTree(arr);
    me.left = leftChild;
    me.right = rightChild;
    return me;
}
function displayTree(node) {
    if (node == null)
        return;
    var leftNodeVal = node.left == null ? "null" : node.left.val;
    var rightNodeVal = node.right == null ? "null" : node.right.val;
    console.log(node.val + ": " + leftNodeVal + ", " + rightNodeVal);
    displayTree(node.left);
    displayTree(node.right);
}
var root = constructTree(treeArr);
displayTree(root);
