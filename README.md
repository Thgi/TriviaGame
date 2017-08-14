#Trivia-Game

This website is designed to be a trivia game. The user has a set amount of time to answer a bunch of general trivia questions. Once the time is up, the website will calculate the totals and give you your score.

The website is using Javascript for the logic and jQuery to access the HTML. This website is used to show how to separate your CSS and Javascript into separate files instead of having it embeded into 1 HTML.

The website also focuses on using the radio type input to create buttons, timers to provide a countdown, and the hide() and show() function in order to make objects on the HTML appear and disappear.

It is also an example of how to use jQuery. jQuery allows you to quickly access parts and write less code. You can recognize the use of jQuery by the use of the $.

Here is an example of the jQuery vs using vanilla Javascript

jQuery:
$( "button.continue" ).html( "Next Step..." )

JavaScript
document.getElementById("txt").innerHTML

In order to use jQuery in your Javascript, you need to use the following code in the head of your HTML:
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
