# Overview

Created a drum pad that plays actual sounds. Learned about different types of events, functions, styling, and more with JavaScript, HTML, and CSS.

![Drum Pad](https://user-images.githubusercontent.com/80060515/132026290-b64e1620-2449-4eea-88c6-7dc0cb9e7b05.png)


## Pre-requisites
- HTML
- Javascript

## Steps
- Created a function called `play ( )`,It receives a parameter `link`. which is the link to the sound
- Inside the function I created a JavaScript Audio object and passed the link to the object
- Then, loaded the audio with the `load( )` function (part of the Audio object)
- And finally, I played the sound using the Audio object's `play( )` function

*A function is a block of code designed to perform a particular task; it is executed when "something" invokes it (calls it).*

Once this was done then I needed to figure out how to play the sound when a button is clicked. It turns out running a function when you click on an HTML element is super easy!
