function nodeToRootPath(node: TreeNode | null, targetNode : TreeNode) : TreeNode[]{
    if(node  == null) return [];
    if(node == targetNode) return [node];

    let left : TreeNode[] = nodeToRootPath(node.left,targetNode);
    if(left.length > 0){
        left.push(node);
        return left;
    }

    let right : TreeNode[] = nodeToRootPath(node.right,targetNode);
    if(right.length > 0){
        right.push(node);
        return right;
    }
    return [];
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	
    let ntrpP : TreeNode[] = nodeToRootPath(root,p);
    let ntrpQ : TreeNode[] = nodeToRootPath(root,q);

    let i = ntrpP.length-1;
    let j = ntrpQ.length-1;

    while(ntrpP[i] == ntrpQ[j]){
         i--;
         j--;
    }
    return ntrpP[i+1];
};


