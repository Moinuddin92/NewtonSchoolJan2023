import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class FindGeometricTriplet {
    public static void main(String[] args) {
        // Your code here
        Scanner scanner = new Scanner(System.in);

        // Read the size of the array
        int n = scanner.nextInt();

        // Read the array elements
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }

        for (int j = 1; j < n - 1; j++) {
            int i = j - 1, k = j + 1;

            while (i >= 0 && k <= n - 1) {

                while (i >= 0 && arr[j] % arr[i] == 0 &&
                        arr[k] % arr[j] == 0 &&
                        arr[j] / arr[i] == arr[k] / arr[j]) {

                    System.out.println(arr[i] + " " + arr[j]
                            + " " + arr[k]);

                    k++;
                    i--;
                }

                if (i >= 0 && arr[j] % arr[i] == 0 &&
                        arr[k] % arr[j] == 0) {
                    if (i >= 0 && arr[j] / arr[i] < arr[k] / arr[j])
                        i--;
                    else
                        k++;
                }

                else if (i >= 0 && arr[j] % arr[i] == 0)
                    k++;
                else
                    i--;
            }
        }
        scanner.close();
    }
}
