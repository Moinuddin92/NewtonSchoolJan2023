import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class ValidTriplet {
    public static void main (String[] args) {
        // Your code here
        Scanner scanner = new Scanner(System.in);
        
        // Read the three characters
        char first = scanner.nextLine().charAt(0);
        char second = scanner.nextLine().charAt(0);
        char third = scanner.nextLine().charAt(0);
        
        // Check if the sequence is a valid triplet
        boolean isValidTriplet = (first < second) && (second < third);
        
        // Print the result
        System.out.println(isValidTriplet);
        scanner.close();
    }
}