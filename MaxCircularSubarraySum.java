import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class Main {
    private static long maxSubarraySum(long arr[], int n) {
        long maxSoFar = arr[0], maxEndingHere = arr[0];
        for (int i = 1; i < n; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }

    private static long maxCircularSubarraySum(long arr[], int n) {
        long maxWithoutWrap = maxSubarraySum(arr, n);
        long totalSum = 0;
        for (int i = 0; i < n; i++) {
            totalSum += arr[i];
            arr[i] = -arr[i]; 
        }
        long maxWithWrap = totalSum + maxSubarraySum(arr, n);
        if(maxWithWrap == 0){
            return maxWithoutWrap;
        }
        return Math.max(maxWithoutWrap, maxWithWrap);
    }


    public static void main (String[] args) {
        // Your code here
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-- > 0){
            int n = sc.nextInt();
            long[] arr = new long[n];
            for(int i=0;i<n;i++){
                arr[i]=sc.nextLong();
            }
            System.out.println(maxCircularSubarraySum(arr,n));
        }

    }
}