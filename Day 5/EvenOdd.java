package Array;

public class EvenOdd {
    public static void main(String[] args) {
        int a[] = {1,2,3,4,5,6};
        int EvenCount = 0;
        int OddCount = 0;

        for(int x:a){
            if(x%2==0){
                System.out.println(x + " Even");
                EvenCount++;
            }
            else{
                System.out.println(x + " Odd");
                OddCount++;
            }
        }

        System.out.println("EvenCount: " + EvenCount);
        System.out.println("OddCount: " + OddCount);

    }
}
