# Search

## Linear Search

indexOf, includes, find, findIndex use linear search where
each item is checked one at a time for a match.

## Binary Search

Only works on sorted arrays
eliminates half at each step
Pick a halfway-ish point, then see if the value you are searching for is
greater than or less than that one. If it is greater than, you can eliminate all values before
your picked value. Vise versa if it is less than.
Complexity is O(logn)
every time you double n, you gain one max step

## Naive String Search

Linear search to find a single char

