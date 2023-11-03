function ngel(arr:number[]) :number[]{
    let n  = arr.length;
    let ans = new  Array(n);

    let st :number[]= [];

    for(let i = 0;i<n;i++){
        //Remove all small 
        while(st.length > 0 && arr[i] >= st[st.length-1]) st.pop();

        if(st.length == 0) ans[i] = -1;
        else ans[i] =  st[st.length-1];

        st.push(arr[i]);
    }
    return ans;
}
console.log(ngel([5,2,3,6,7,5,1,6,3,9]));
