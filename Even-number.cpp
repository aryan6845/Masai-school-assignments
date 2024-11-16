#include <bits/stdc++.h>
using namespace std;

int main() {
    
    int arr[] = {12, 5, 8, 9, 24, 7, 15, 16}; // array input
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "Even numbers in the array are: ";

    for (int i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            cout << arr[i] << " ";
        }
    }

    cout << endl;
    return 0;
}