# Question 1: 
Line number 9 returns "values added:  20"
# Question 2: 
Line number 13 returns "final result:  20"
# Question 3:
Like mentioned earlier, var is function-scoped, meaning it can be redeclared/over written anytime, anywhere, which is not ideal.

# Question 4:
Line number 9 returns "values added:  20"
# Question 5:
Line number 13 produces a reference error. This is because "let" is block-scope, which menas it is only accessible with the if statement block. Outside the block, the variable result is unknown of.

# Question 6:
The message "ERROR!  /tmp/Kg343iU5is/main.js:7    result = num1 + num2;" is produced because result is initialized with "const". This means result cannot be reassigned. However, since we are attempting to reassign with num1 + num2, an error message is given.
# Question 7:
Line 13 returns a typerror, becaaue once again a constant variable cannot be reassigned. 