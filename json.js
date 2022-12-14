// JavaScript Object Notation (JSON) is a standard text-based format for representing structured 
// data based on JavaScript object syntax. It is commonly used for transmitting data in web applications 
// (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).
// JSON exists as a string — useful when you want to transmit data across a network.
// It needs to be converted to a native JavaScript object when you want to access the data.
// JavaScript provides a global JSON object that has methods available for converting between the two.
// JSON.parse()--> parses a JSON string to a Javscript value --> object, array, ...
// JSON.stringify() --> converts a Javascript value to a JSON string






function scopeTest() {
    var y = 44;

    console.log(x);
}

const x = 33;
scopeTest();
