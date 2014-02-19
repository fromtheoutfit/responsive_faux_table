// Create a div element and assign it to the variable testElem.
// Assign the HTML element to the variable rootElem.
var testElem = document.createElement('div'),
    rootElem = document.querySelector('html');

// Add some inline styles to testElem.
testElem.style.cssText = 'display:-webkit-flex; display:flex;';

// If the value of the display property is now equal to a
// supported form of flex, flexbox is supported.
if (/flex/.test(testElem.style.display)) {

    // Append a 'flexbox' class to rootElem.
    rootElem.className = rootElem.className + ' flexbox';
}