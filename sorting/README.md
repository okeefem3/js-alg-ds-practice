# Sorting

https://www.youtube.com/watch?v=kPRA0W1kECg
https://www.toptal.com/developers/sorting-algorithms
visualgo.net

Built in array.sort
Default sort order is according to string unicode code points

## These algorithms Work Well For Smaller Data Sets O(n^2)

### Bubble sort
For each item, compare it to the next item in the list, if item is larger than the next, swap them, then check that same
item against the next
repeat until no swaps done

### Selection Sort
similar to bubble, but for each item, it is compared against all others, and swapped with
the minimum item that is smaller than it until no swaps are made

sorted values are placed at the beginning of the array at the end of
each iteration (or no swap is made)

### Insertion Sort
Builds up sorted array by inserting each item where it belongs on the left side.

## Sorting Algorithms That Scale Better O(n log n)

These algs are also more complicated in implementation

### Merge Sort

Exploits the fact that arrays of 0 | 1 element are already sorted

Decomposes an array into smaller arrays until 0 or 1 element
Then merge them back together in the correct order checking where each item in the arrays go in relation to each other

### Quick Sort

Uses same assumption as merge sort, decomposing arrays.
Select a pivot point and moves all numbers lower than pivot to the left, and all higher to the right
repeat the process for each side of the pivot



