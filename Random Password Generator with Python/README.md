Overview
==========================
Created a Random Password Generator program which generates a password mix of upper and lowercase letters, as well as numbers and symbols strong enough to provide great security.

![passwordgenerator](https://user-images.githubusercontent.com/80060515/131913260-6f1b3913-bd2b-400a-8f04-85a0c5c2010c.jpg)

Learned:
==========================
```
What is Password
Random and String Module
How to Create a Random Password Generator using Python
```
What is Password:
==========================

A password, sometimes called a passcode, is a memorized secret, typically a string of characters, usually used to confirm the identity of a user, In other words is a string of characters used to verify the identity of a user during the authentication process.

Modules Used:
==========================

### Random Module:

Random module is used to perform the random generations. We are making use of random.sample module here. If you will observe in the output all characters will be unique. `random.sample()` never repeats characters. If you don’t want to repeat characters or digits in the random string, then use `random.sample()` but it is less secure because it will reduce the probability of combinations because we are not allowing repetitive letters and digits.

### String Module:
The string module contains a number of useful constants, classes and a number of functions to process the standard python string.
