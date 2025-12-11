#include <iostream>
using namespace std;

int calculateSum(int array[], int size) {  
    int sum = 0;

    for (int i = 0; i < size; i++) {
      // Add here the calculation logic
        sum += array[i];
    }
    return sum;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    cout << calculateSum(arr, 5);
    return 0;
}

