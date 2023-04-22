import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class UniqueCharacters {
    public static void uniqueCharacters(String s, int n){
        Map<Character, Integer> mp = new HashMap<>();
        for(int i=0;i<n;i++){
            if(mp.containsKey(s.charAt(i))){
                mp.put(s.charAt(i),mp.get(s.charAt(i))+1);
            }
            else{
                mp.put(s.charAt(i),1);
            }
        }
        int count=0;
        for(Map.Entry<Character, Integer> entry : mp.entrySet()){
            count +=1;
        }
        System.out.println(count);
    }

    public static void main (String[] args) {
        // Your code here
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String s = sc.next();
        uniqueCharacters(s,n);
    }
}