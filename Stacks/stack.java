import java.util.*;

class stack{
    public static void main(String[] args){
        Scanner scn = new Scanner(System.in);

        Stack<Integer> st = new Stack<>();
        st.push(10);
        st.push(20);
        System.out.println(st.pop());
        scn.close();
    }
}