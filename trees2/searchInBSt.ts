
function searchBST(root: TreeNode | null, target: number): TreeNode | null {
    if(root == null) return null;
    if(root.val == target) return root;
    if(target < root.val) return searchBST(root.left,target);
    return searchBST(root.right,target);
};