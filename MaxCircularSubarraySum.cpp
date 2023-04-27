#include <bits/stdc++.h> // header file includes every Standard library
using namespace std;


long maxSubarraySum(long arr[], int n) {
    long maxSoFar = arr[0], maxEndingHere = arr[0];
    for (int i = 1; i < n; i++) {
        maxEndingHere = max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}

long maxCircularSubarraySum(long arr[], int n) {
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
    return max(maxWithoutWrap, maxWithWrap);
}


int main() {
	// Your code here
    int t;
    cin >> t;
    while (t-- > 0) {
        int n;
        cin >> n;
        long arr[n];
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        cout << maxCircularSubarraySum(arr, n) << endl;
    }
    return 0;
}