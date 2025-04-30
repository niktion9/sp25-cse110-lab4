# Question 1: 
Line number 12 gives us the output of 3 because i changes with every iteration of the for loop, and the loop end with i incremented to 3.

# Question 2:
At line number 13, the out is 150. This is because when doing the math with in the for loop, it would be somethign alogn the lines of 300 * (1 - 0.5), which is equal to 150.

# Question 3:
The output in 150 because finalPrice = Math.round(150 * 100) / 100, which is 150.

# Question 4:
Nothing is printed because all the ```console.log``` statements are commented out.

# Question 5:
Line 12 would not cuase an error but would not be executed either. This is because there is no function call and actual parameter values at the end.

# Question 6:
At line 13, a reference error would be created because discountedPrice is declared with "let", which means it is only recognizable and valid within the for block since it is block-scoped.

# Question 7:
At line 14, 150 gets printed because finalPrice would be Math.round(300 * 0.5 * 100) / 100, which is 15-.

# Question 8:
This function will not return anything because all the ```console.log``` statements are commented out.

# Question 9:
An error is produced at line 11. This is because i is block-scoped within the for loop due to the "let" keyword, and we are attemped to access it outside the loop.

# Question 10:
3 is returned at line 12 because length is "const" and the sixe of the array of prices in 3.

# Question 11:
All the ```const.log``` are commented so there is no putput.

# Question 12:
1. student.name
2. student["Grad Year"]
3. student.greeting()
4. student["Favorite Teacher"].name
5. student.courseLoad[0]

# Question 13:
1. '32' because the quotes around 3 and the + suggest a string concatenation rather than addition
2. 1 since - would indication numeric coercion
3. 3 because null is considered to be 0
4. '3null' because the quotes around 3 and the + suggest a string concatenation rather than addition (one string and a +)
5. 4 because true is considered at 1 and 1+3 = 4
6. 0 because false is considered 0
7. '3undefined' since string plus anythign would be concatenated
8. Nan since undefinded is considered Nan and 3-Nan would be Nan
   
# Question 14:
1. True since '2' is coerced as 2.
2. False since both are string, so when compared lexographically, '2' is greater that '1'
3. True, because '2' is coerced into 2.
4. False because === checks for type and value. We know that one type is a number and the other one is a string.
5. False because true = 1 and 1 is not equal to 2.
6. True because Boolean(2) would be true

# Question 15:
== compares just value, and in this case there is room for coercion to take place and change the resulting value \\
=== compared data type and value, where there is no room for coercion.

# Question 17:
The final result would probably be [2,4,6] because the originial array is [1,2,3] and doSomething() multiplies the values by 2. 

# Question 19:
The output would probably be the following:
1 \\
4 \\
3 \\
2 \\