
class Solve{
    
    long maxArea(int A[], int len){
        // Code Here
        int l = 0;
        int r = A.length-1;
        int  maxi = 0;
        while(l<r){
            int height = Math.min(A[l],A[r]);
            int width = r-l;
            int total = height*width;
            maxi = Math.max(maxi,total);
            
            if(A[l] < A[r]) l++;
            else r--;
        }
        return maxi;
    }
    
}