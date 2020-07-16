# Problem Solving

## Strategies

1. Understand the problem
   * Can I restate in my own works?
   * What are the inputs
   * what are the outputs
   * can the outputs be determined from the inputs? (is there enough info to solve the problem)
   * How should the pieces of data in the problem be labelled
2. Explore concrete examples
    * Creating user stories, unit tests etc.
    * Start with simple examples
    * Move to more complex examples
    * Check with empty and invalid inputs
3. Break it down
    * Write out the steps of the problem one by one where each step is the smallest possible
4. Solve/simplify
    * Solve the problem simply, pass over more complicated pieces at first and come back to them in step 5
    * Don't need to shoot for most optimum solution right away
5. Look back and refactor
    * Can you improve the readability?
    * The performance?

## Patterns

### Frequency Counters

Use objects or sets to collect values/frequencies of values
often can simplify nested loop solutions with arrays/strings

### Multiple Pointers

With some collection, have two "pointers" starting in different spots that move a certain direction based on some criteria until some condition is met.

## Sliding Window

Useful when looking for continous subsets usually of an array. Depending on conditions the window either increases or closes and a new one is created.

## Divide and Conquer

Divide a data set into smaller chunks and then repeat process with a subset of the data. Very good at reducing time complexity. Usually pretty good for some searching algorithms (binary search for instance.
In binary search, it only works if the data is sorted.
