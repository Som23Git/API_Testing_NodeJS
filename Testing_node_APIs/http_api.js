const http = require('http');

const server = http.createServer(function(req,res) {
    res.writeHead(200, 'Success',{'Content-Type': 'application/json'});
    res.write('Hello World');
    res.end();
});

const PORT = process.env.PORT || 5020;

server.listen(PORT, () => console.log(`Listening to the PORT - ${PORT}`));


//Callback function

//What is the need for callback function? What are the advantages of using it? and its disadvantages?

// A callback function is a function that is passed as an argument to another function, and is executed after the outer function has completed. In the context of the code you provided, the callback function is used to specify a function that should be executed after the server has started listening for connections.
// There are several advantages to using callback functions:
// They can make code easier to read and understand, by allowing you to break up larger pieces of code into smaller, more modular units.
// They can help you avoid "callback hell", which is a situation that can occur when you have multiple nested callback functions, leading to code that is difficult to read and maintain.
// They allow you to specify what should happen after an asynchronous operation completes, without blocking the main thread of execution. This can be useful for improving the performance of your application.
// There are also some potential disadvantages to using callback functions:
// They can make your code more difficult to understand if they are not used properly, especially if you have a lot of nested callback functions.
// It can be difficult to handle errors in callback functions, especially if you have multiple nested callback functions.
// Callback functions can make it more difficult to write unit tests, because they are often difficult to mock or stub.
// Overall, callback functions can be a powerful and useful tool, but it is important to use them appropriately and carefully to avoid making your code more complex than necessary.

// If you want to log a different message depending on the status of the callback function, you can use an if statement to check the value of the error argument that is passed to the callback.

// For example:

// ```
// server.listen(PORT, (error) => {
//   if (error) {
//     console.log(`Error starting server: ${error}`);
//   } else {
//     console.log(`Listening to the PORT - ${PORT}`);
//   }
// });
// ```
// In this code, if there is an error starting the server (e.g., the port is already in use), the error message will be logged to the console. If there is no error, the message indicating that the server is listening on the specified port will be logged.

// You could also use the value of the error argument to perform additional error handling or recovery steps, if necessary.