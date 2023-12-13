export const node_data = [
  {
    question:
      "Q1. When a JavaScript function is invoked (called) in Node, where is a new frame placed?",
    options: [
      "the call stack",
      "the event loop",
      "the poll phase",
      "the events queue",
    ],
    answer: "the call stack",
    explanation:
      "When a JavaScript function is invoked in Node, a new frame is placed on the call stack to keep track of the function's execution context.",
  },
  {
    question: "Q2. Which of the following is a core module in Node?",
    options: ["webpack", "crypto", "request", "chalk"],
    answer: "crypto",
    explanation:
      "The 'crypto' module is a core module in Node, providing cryptographic functionality.",
  },
  {
    question:
      "Q3. Which of the following Buffer class methods returns an uninitialized buffer?",
    options: ["allocUnsafe", "concat", "from", "alloc"],
    answer: "allocUnsafe",
    explanation:
      "The 'allocUnsafe' method in the Buffer class returns an uninitialized buffer, which is faster than 'alloc' but may contain sensitive data from previous allocations.",
  },
  {
    question:
      "Q4. Which of the following modules is NOT a built-in module in Node?",
    options: ["ftp", "events", "dgram", "http2"],
    answer: "ftp",
    explanation:
      "The 'ftp' module is not a built-in module in Node. Built-in modules include 'events', 'dgram', and 'http2'.",
  },
  {
    question:
      "Q5. Which fs module method can be used to read the content of a file without buffering it in memory?",
    options: ["read", "readFile", "createReadStream", "readFileSync"],
    answer: "createReadStream",
    explanation:
      "To minimize memory costs, the 'createReadStream' method in the fs module is used to read the content of a file without buffering it in memory.",
  },
  {
    question:
      "Q6. Which of the following DNS module methods uses the underlying OS facilities and does not necessarily perform any network communication?",
    options: ["lookup", "resolve", "resolve4", "reverse"],
    answer: "lookup",
    explanation:
      "The 'lookup' method in the DNS module uses the underlying OS facilities and does not necessarily perform network communication. It is used for DNS resolution.",
  },
  {
    question: "Q7. How do you check that a value is a date object in Node?",
    options: [
      "util.types.isDate(value)",
      "assert.isDate(value)",
      "console.isDate(value)",
      "util.date(value)",
    ],
    answer: "util.types.isDate(value)",
    explanation:
      "To check if a value is a date object in Node, you use 'util.types.isDate(value)'.",
  },
  {
    question: "Q8. Can you create an https web server with Node.js?",
    options: [
      "no, there are no modules supporting it yet",
      "yes, with the https or http2 modules",
      "yes, through the path module",
      "yes, with the http module",
    ],
    answer: "yes, with the https or http2 modules",
    explanation:
      "You can create an HTTPS web server in Node.js using the 'https' or 'http2' modules.",
  },
  {
    question:
      "Q9. What is the API that is designed to insulate Addons from changes in the underlying JavaScript engine?",
    options: ["A-API", "Z-API", "N-API", "X-API"],
    answer: "N-API",
    explanation:
      "The N-API (Node-API) is designed to insulate Addons from changes in the underlying JavaScript engine, providing a stable API for native modules.",
  },
  {
    question:
      "Q10. Which CLI option can you use to debug a node script in Chrome DevTools?",
    options: ["--dev-tools", "--inspect", "--chrome", "--debug"],
    answer: "--inspect",
    explanation:
      "You can use the '--inspect' CLI option to debug a Node script in Chrome DevTools.",
  },
  {
    question:
      "Q11. What command would you use to count the number of logical CPUs on the machine that is running Node?",
    options: [
      'node -p "process.cpus"',
      'node -p "util.cpus().size"',
      'node -p "process.os.cpus"',
      'node -p "os.cpus().length"',
    ],
    answer: 'node -p "os.cpus().length"',
    explanation:
      "To count the number of logical CPUs on the machine running Node, you use the command 'node -p \"os.cpus().length\"'.",
  },
  {
    question: "Q12. Which of the following is a method on the console object?",
    options: ["exit", "test", "time", "print"],
    answer: "time",
    explanation:
      "The 'time' method is a valid method on the console object in Node, used for timing the duration of operations.",
  },
  {
    question:
      "Q13. Which object is used to manage the cache of required modules?",
    options: ["global.cache", "module.cache", "process.cache", "require.cache"],
    answer: "require.cache",
    explanation:
      "The 'require.cache' object is used to manage the cache of required modules in Node, allowing for more efficient module loading.",
  },
  {
    question: "Q14. What is the command to silence all process warnings?",
    options: [
      "node index.js --trace-warnings",
      "node --no-warnings",
      "node -trace-warnings",
      "node index.js --no-warnings",
    ],
    answer: "node --no-warnings",
    explanation:
      "To silence all process warnings in Node, you use the command 'node --no-warnings'.",
  },
  {
    question:
      "Q15. How can you use the promise API with a callback-based function such as child_process.exec?",
    options: [
      "new Promise(child_process.exec())",
      "util.promisify(child_process.exec())",
      "util.promisify(child_process.exec)",
      "new Promise(child_process.exec)",
    ],
    answer: "util.promisify(child_process.exec)",
    explanation:
      "To use the promise API with a callback-based function like 'child_process.exec', you use 'util.promisify(child_process.exec)'.",
  },
  {
    question: "Q16. Which of the following is NOT a Node repl command?",
    options: [".break", ".history", ".editor", ".save"],
    answer: ".save",
    explanation:
      "The '.save' command is not a valid Node repl command. Valid commands include '.break', '.history', and '.editor'.",
  },
  {
    question:
      "Q17. Which statement is true when you run the code shown below?\nrequire('child_process').fork('script.js');",
    options: [
      "The forked process shares the event loop with the parent process",
      "A new VM instance is created and the two VM instances will be shared between the forked process and the parent process.",
      "The forked process will have its own VM instance.",
      "The forked process shares the same VM thread with the parent process.",
    ],
    answer: "The forked process shares the event loop with the parent process",
    explanation:
      "When using 'require('child_process').fork('script.js')', the forked process shares the event loop with the parent process in Node.",
  },
  {
    question:
      "Q18. If EventEmitter is in scope, which of the following lines of code will have an event emitter emitting a change event?",
    options: [
      "EventEmitter.emit('change');",
      "EventEmitter.new().emit('change');",
      "(new EventEmitter()).emit('change');",
      "new EventEmitter('change');",
    ],
    answer: "(new EventEmitter()).emit('change');",
    explanation:
      "If EventEmitter is in scope, the correct way to have an event emitter emit a 'change' event is '(new EventEmitter()).emit('change');'.",
  },
  {
    question: "Q19. Which of the following objects is a stream",
    code: null,
    options: ["process.uptime", "process.stdout", "process", "Buffer"],
    answer: "process.stdout",
    explanation:
      "The correct option is process.stdout. It represents the standard output stream, which is a writable stream. Streams are a fundamental concept in Node.js for handling data flow.",
  },
  {
    question:
      "Q20. Which module variable holds the resolved absolute path of the current module file?",
    code: null,
    options: ["__pathname", "__location", "__flder", "__filename"],
    answer: "__filename",
    explanation:
      "The correct option is __filename. It holds the resolved absolute path of the current module file in Node.js.",
  },
  {
    question:
      "Q21. If the child_process module methods are in scope, what is a current way to execute the command ps -ef using a child process?",
    code: null,
    options: [
      'spawn("ps -ef")',
      'exec("ps -ef")',
      'exec("ps", "-ef")',
      'fork("ps -ef")',
    ],
    answer: 'spawn("ps -ef")',
    explanation:
      'The correct option is spawn("ps -ef"). The spawn method is used to launch a new process with the given command and arguments.',
  },
  {
    question:
      "Q22. Which console method can be used to print the stack trace to the point of its execution?",
    code: null,
    options: ["stack", "trace", "debug", "print"],
    answer: "trace",
    explanation:
      "The correct option is trace. The console.trace() method is used to print the stack trace to the console at the point where it's called.",
  },
  {
    question:
      "Q23. When you run JavaScript in a Node.js application, which of the following elements in a Node.js stack actually executes that JavaScript?",
    code: null,
    options: [
      "the libuv library",
      "the c-ares library",
      "the VM (like V8 or Chakra)",
      "the repl module",
    ],
    answer: "the VM (like V8 or Chakra)",
    explanation:
      "The correct option is the VM (like V8 or Chakra). The V8 JavaScript engine is responsible for executing JavaScript code in a Node.js application.",
  },
  {
    question:
      'Q24. Looking at the code below, what does the console show?\n\nconst http = require(\'http\');\nconst hostname = \'127.0.0.1\'; const port = 3000;\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;  res.setHeader("Content-Type", "text/plain");  res.end("Hello World\\n");\n});\nserver.listen(port, hostname, () => { console.log(`server running at http://${hostname}:${port}/`); });',
    code: null,
    options: [
      "server running at http://localhost:3000/",
      "server running at port 3000",
      "server running at http://localhost:4000/",
      "server running at http://127.0.0.1:3000/",
    ],
    answer: "server running at http://localhost:3000/",
    explanation:
      "The correct option is 'server running at http://localhost:3000/'. The server is set to listen on port 3000, and the console.log statement shows the server's address when it starts.",
  },
  {
    question: "Q25. What is the purpose of the path module?",
    code: null,
    options: [
      "to provide utilities to play with file and directory paths",
      "to provide utilities to add and remove files",
      "It is a retiring module.",
      "to provide utilities to test files",
    ],
    answer: "to provide utilities to play with file and directory paths",
    explanation:
      "The correct option is 'to provide utilities to play with file and directory paths.' The path module in Node.js provides methods for working with file and directory paths.",
  },
  {
    question:
      "Q26. How do you make an HTTP server object active and listen to requests on certain ports?",
    code: null,
    options: [
      "server. start",
      "server.activate",
      "server.listen",
      "server. run",
    ],
    answer: "server.listen",
    explanation:
      "The correct option is 'server.listen.' To make an HTTP server object active and listen to requests on certain ports in Node.js, you use the server.listen method.",
  },
  {
    question:
      "Q27. What does the code shown below do?\n\nconst fs = require('fs'); const os = require('os');\nconst system = os.platform(); const user = os.userInfo().username;\nfs.appendFile('hello.txt', `Hello ${user} on ${system}`, (err) => { if (err) throw err; console.log('The data was appended to file!'); } );",
    code: null,
    options: [
      "creates a text file hello.txt and appends customized text",
      "creates an image file",
      "console logs system information",
      "creates a file named data and append numbers",
    ],
    answer: "creates a text file hello.txt and appends customized text",
    explanation:
      "The correct option is 'creates a text file hello.txt and appends customized text.' The code appends a customized message to a file named hello.txt.",
  },
  {
    question:
      "Q28. How do you start a Node application if the entry file is indexjs?",
    code: null,
    options: ["nodemon start", "start index.js", "node index.js", "node start"],
    answer: "node index.js",
    explanation:
      "The correct option is 'node index.js.' To start a Node application with an entry file named index.js, you use the 'node index.js' command.",
  },
  {
    question: "Q29. What is the purpose of the file system (fs) module?",
    code: null,
    options: [
      "to provide methods to work with requests and responses",
      "to provide methods to work with files",
      "to provide methods to work with databases",
      "to find new file systems",
    ],
    answer: "to provide methods to work with files",
    explanation:
      "The correct option is 'to provide methods to work with files.' The fs module in Node.js provides methods for interacting with the file system, such as reading and writing files.",
  },
  {
    question: "Q30. What is the Node LTS version?",
    code: null,
    options: [
      "It is the current unstable version and is to be avoided.",
      "It is the version that will be retired soon.",
      "It is the version with the latest features.",
      "It is the safest version for long-term support.",
    ],
    answer: "It is the safest version for long-term support.",
    explanation:
      "The correct option is 'It is the safest version for long-term support.' LTS stands for Long Term Support, and the Node LTS version provides a stable and supported platform for an extended period.",
  },
  {
    question: "Q31. Which of the following is NOT a valid stream in Node?",
    code: null,
    options: [
      "process. stdinfo",
      "process. stdin",
      "process. stdout",
      "process. stderr",
    ],
    answer: "process. stdinfo",
    explanation:
      "The correct option is 'process. stdinfo.' There is no 'stdinfo' property in the process object related to streams in Node.js.",
  },
  {
    question:
      "Q32. You have a script.js file with the single line of code shown here. What will be the output of executing script.js with the node command?\n\nconsole.log(arguments);",
    code: null,
    options: [
      "ReferenceError: arguments is not defined",
      "an empty string",
      "undefined",
      "an object representing an array that has five elements",
    ],
    answer: "ReferenceError: arguments is not defined",
    explanation:
      "The correct option is 'ReferenceError: arguments is not defined.' The arguments object is not available in Node.js, and attempting to use it will result in a ReferenceError.",
  },
  {
    question: "Q33. Which choice is not a valid method on event emitters?",
    code: null,
    options: ["start", "on", "once", "off"],
    answer: "start",
    explanation:
      "The correct option is 'start.' It is not a valid method on event emitters in Node.js.",
  },
  {
    question: "Q34. Which special object is an instance of EventEmitter?",
    code: null,
    options: ["process", "Buffer", "root", "require"],
    answer: "process",
    explanation:
      "The correct option is 'process.' The process object in Node.js is an instance of EventEmitter, and it allows the registration and handling of events.",
  },
  {
    question:
      "Q35. What is the command to get a list of available commands for Node.js?",
    code: null,
    options: ["node index.js -x", "node -v", "node -h", "node index.js -h"],
    answer: "node -h",
    explanation:
      "The correct option is 'node -h.' This command provides a list of available commands and options for Node.js in the terminal.",
  },
  {
    question:
      "Q36. When a request event is received in the HTTP module, what is the type of the first argument passed to that event, usually named req?",
    code: null,
    options: [
      "http.IncomingMessage",
      "http.ServerRequest",
      "http.ClientRequest",
      "http.ServerResponse",
    ],
    answer: "http.IncomingMessage",
    explanation:
      "The correct option is 'http.IncomingMessage.' When a request event is received in the HTTP module, the first argument passed is an instance of http.IncomingMessage, representing the incoming HTTP request.",
  },
  {
    question:
      "Q37. What are the arguments passed to the module wrapper function?",
    code: null,
    options: [
      "exports, __filename, __dirname",
      "exports, process, require, module, __filename, __dirname",
      "exports, module, __filename, __dirname",
      "exports, require, module, __filename, __dirname",
    ],
    answer: "exports, require, module, __filename, __dirname",
    explanation:
      "The correct option is 'exports, require, module, __filename, __dirname.' These are the arguments passed to the module wrapper function in Node.js.",
  },
  {
    question: "Q38. Which library provides Node.js with the event loop?",
    code: null,
    options: ["V8", "c-ares", "libuv", "events"],
    answer: "libuv",
    explanation:
      "The correct option is 'libuv.' Libuv is a multi-platform support library that provides the event loop implementation for Node.js.",
  },
  {
    question:
      "Q39. In the context of Node.js, what is the purpose of the 'npm' command?",
    code: null,
    options: [
      "Node Package Manager",
      "New Package Manager",
      "Node Project Manager",
      "Network Package Manager",
    ],
    answer: "Node Package Manager",
    explanation:
      "The correct option is 'Node Package Manager.' The 'npm' command in Node.js is used for package management, allowing you to install, manage, and publish Node.js packages.",
  },
  {
    question: "Q40. What is the purpose of the 'require' function in Node.js?",
    code: null,
    options: [
      "to include external modules",
      "to define a variable",
      "to create a new module",
      "to install npm packages",
    ],
    answer: "to include external modules",
    explanation:
      "The correct option is 'to include external modules.' The 'require' function in Node.js is used to include external modules or files into the current module.",
  },
  {
    question:
      "Q41. In Node.js, which module is commonly used for handling file operations, such as reading and writing files?",
    code: null,
    options: ["http", "fs", "path", "net"],
    answer: "fs",
    explanation:
      "The correct option is 'fs.' The 'fs' module in Node.js is commonly used for handling file operations, such as reading and writing files.",
  },
  {
    question:
      "Q42. What is the purpose of the 'process.argv' array in a Node.js script?",
    code: null,
    options: [
      "to access command-line arguments",
      "to define environment variables",
      "to manage file paths",
      "to store module dependencies",
    ],
    answer: "to access command-line arguments",
    explanation:
      "The correct option is 'to access command-line arguments.' The 'process.argv' array in a Node.js script contains the command-line arguments passed to the script.",
  },
  {
    question: "Q43. How does Node.js handle asynchronous operations?",
    code: null,
    options: [
      "using callbacks",
      "using only synchronous operations",
      "using only promises",
      "using only async/await",
    ],
    answer: "using callbacks",
    explanation:
      "The correct option is 'using callbacks.' Node.js primarily uses callbacks to handle asynchronous operations, allowing functions to continue executing while waiting for I/O or other non-blocking operations.",
  },
  {
    question: "Q44. What is the purpose of the 'npm init' command?",
    code: null,
    options: [
      "to initialize a new Node.js project",
      "to install Node.js packages globally",
      "to update all installed packages",
      "to remove a Node.js package",
    ],
    answer: "to initialize a new Node.js project",
    explanation:
      "The correct option is 'to initialize a new Node.js project.' The 'npm init' command is used to initialize a new Node.js project, creating a 'package.json' file with project details.",
  },
  {
    question: "Q45. In Node.js, what does the 'module.exports' object do?",
    code: null,
    options: [
      "it exports the entire module",
      "it exports individual functions or values",
      "it imports external modules",
      "it imports built-in modules",
    ],
    answer: "it exports individual functions or values",
    explanation:
      "The correct option is 'it exports individual functions or values.' The 'module.exports' object in Node.js is used to export individual functions, objects, or values from a module to make them accessible in other modules.",
  },
  {
    question: "Q46. What is the purpose of the 'npm install' command?",
    code: null,
    options: [
      "to run the installed packages",
      "to uninstall Node.js packages",
      "to install Node.js packages locally",
      "to update all installed packages",
    ],
    answer: "to install Node.js packages locally",
    explanation:
      "The correct option is 'to install Node.js packages locally.' The 'npm install' command is used to install Node.js packages locally in a project, adding them to the 'node_modules' directory.",
  },
  {
    question:
      "Q47. In the context of Node.js, what does the term 'middleware' refer to?",
    code: null,
    options: [
      "software that runs on the client side",
      "software that connects different databases",
      "software that handles HTTP requests and responses",
      "software that manages project dependencies",
    ],
    answer: "software that handles HTTP requests and responses",
    explanation:
      "The correct option is 'software that handles HTTP requests and responses.' In the context of Node.js, middleware refers to software components that handle HTTP requests and responses, providing additional functionality in the request-response cycle.",
  },
  {
    question: "Q48. What is the purpose of the 'npm start' command?",
    code: null,
    options: [
      "to start the Node.js application",
      "to start a new npm project",
      "to update npm packages",
      "to restart the computer",
    ],
    answer: "to start the Node.js application",
    explanation:
      "The correct option is 'to start the Node.js application.' The 'npm start' command is used to start the Node.js application, and it typically runs the 'start' script specified in the 'package.json' file.",
  },
  {
    question:
      "Q49. In Node.js, which module should you use when you need to decode raw data into strings?",
    code: null,
    options: ["buffer", "util", "string_decoder", "string_buffer"],
    answer: "string_decoder",
    explanation:
      "The correct option is 'string_decoder.' In Node.js, the 'string_decoder' module is used to decode raw data into strings, especially when working with Buffer objects.",
  },
  {
    question:
      "Q50. Which global object acts like a bridge between a Node script and the host operating system?",
    code: null,
    options: ["v8", "env", "process", "child_process"],
    answer: "process",
    explanation:
      "The correct option is 'process.' The 'process' global object in Node.js acts like a bridge between a Node script and the host operating system, providing information and control over the Node.js process.",
  },
  {
    question: "Q51. Which statement is true about Node.js and threads?",
    code: null,
    options: [
      "Every Node process runs in a single thread, and all the I/O work is run in that same thread.",
      "Every Node process gets four threads that it can share between its JavaScript VM and the event loop.",
      "The event loop is single-threaded, but a JavaScript VM can use multiple threads.",
      "JavaScript execution in Node.js is single-threaded, but I/O operations are executed using multiple threads.",
    ],
    answer:
      "Every Node process runs in a single thread, and all the I/O work is run in that same thread.",
    explanation:
      "The correct statement is 'Every Node process runs in a single thread, and all the I/O work is run in that same thread.' Node.js follows a single-threaded event loop model, and I/O operations are handled asynchronously without blocking the main thread.",
  },
  {
    question: "Q52. Which statement about event emitters is false?",
    code: null,
    options: [
      "Event names must be camelCase strings.",
      "The emit method allows an arbitrary set of arguments to be passed to the listener functions.",
      "Any values returned by the listeners for emitted events are ignored.",
      "When an event emitter object emits an event, all of the functions attached to that specific event are called synchronously.",
    ],
    answer: "Event names must be camelCase strings.",
    explanation:
      "The false statement is 'Event names must be camelCase strings.' Event names in event emitters can be strings, but they are case-sensitive and can use any valid string format.",
  },
  {
    question:
      "Q53. Which core module in Node can you use to compile and run JavaScript code in a sandbox environment?",
    code: null,
    options: ["sandbox", "buffer", "vm", "v8"],
    answer: "vm",
    explanation:
      "The correct option is 'vm.' The 'vm' core module in Node.js provides an interface for compiling and running JavaScript code in a sandbox environment, isolating it from the global scope.",
  },
  {
    question:
      "Q54. How would you determine the number of cluster instances to start when using the cluster module?",
    code: null,
    options: [
      "const numInstances = cluster.instances().length;",
      "const numInstances = cluster.instances();",
      "const numInstances = require('os').cpus().length;",
      "const numInstances = process.cpus().length;",
    ],
    answer: "const numInstances = require('os').cpus().length;",
    explanation:
      "The correct option is 'const numInstances = require('os').cpus().length;' To determine the number of cluster instances based on the available CPU cores, the 'os' module is used to get the number of CPUs.",
  },
  {
    question:
      "Q55. You have to read a large text file, replace some words in it, and write it back to a new file. You know that the memory on your target system is limited. What should you do?",
    code: null,
    options: [
      "Use regular expressions directly on the file.",
      "Use Promises and async/await to offload the task to libuv.",
      "Copy the file into a database and perform the operations there.",
      "Use readline together with streams to read and transform and write the file contents line by line.",
    ],
    answer:
      "Use readline together with streams to read and transform and write the file contents line by line.",
    explanation:
      "The correct option is 'Use readline together with streams to read and transform and write the file contents line by line.' This approach is memory-efficient as it processes the file in chunks without loading the entire content into memory.",
  },
  {
    question: "Q56. In Node.js, what is the purpose of the 'os' module?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to manage file operations",
      "to create child processes",
    ],
    answer: "to provide operating system-related utility functions",
    explanation:
      "The correct option is 'to provide operating system-related utility functions.' The 'os' module in Node.js provides various utility functions related to the operating system, such as getting information about CPUs, memory, and network interfaces.",
  },
  {
    question: "Q57. What is the purpose of the 'crypto' module in Node.js?",
    code: null,
    options: [
      "to perform cryptographic operations",
      "to create and manage child processes",
      "to handle HTTP requests and responses",
      "to provide operating system-related utility functions",
    ],
    answer: "to perform cryptographic operations",
    explanation:
      "The correct option is 'to perform cryptographic operations.' The 'crypto' module in Node.js provides cryptographic functionality, including hash functions, encryption, and decryption.",
  },
  {
    question: "Q58. In Node.js, what does the 'npm audit' command do?",
    code: null,
    options: [
      "to start the npm audit process",
      "to display information about installed packages and their versions",
      "to fix vulnerabilities in installed packages",
      "to uninstall Node.js packages",
    ],
    answer:
      "to display information about installed packages and their versions",
    explanation:
      "The correct option is 'to display information about installed packages and their versions.' The 'npm audit' command is used to check for known security vulnerabilities in the dependencies of a project.",
  },
  {
    question:
      "Q59. Which of the following is true about the 'cluster' module in Node.js?",
    code: null,
    options: [
      "It is used for cluster analysis of data.",
      "It is used to create and manage clusters of Node.js instances.",
      "It is used for load balancing in the browser.",
      "It is used to manage multiple network clusters in Node.js.",
    ],
    answer: "It is used to create and manage clusters of Node.js instances.",
    explanation:
      "The correct option is 'It is used to create and manage clusters of Node.js instances.' The 'cluster' module in Node.js allows the creation of multiple child processes (workers) to share the same port, enabling load balancing and improved performance.",
  },
  {
    question:
      "Q60. What does the term 'npm run-script' refer to in a Node.js project?",
    code: null,
    options: [
      "It refers to executing an npm package script.",
      "It refers to running a Node.js script.",
      "It refers to the script used to install npm packages.",
      "It refers to uninstalling npm packages.",
    ],
    answer: "It refers to executing an npm package script.",
    explanation:
      "The correct option is 'It refers to executing an npm package script.' The 'npm run-script' command is used to execute scripts defined in the 'scripts' section of the 'package.json' file in a Node.js project.",
  },
  {
    question: "Q61. What is the purpose of the 'util' module in Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to format text and inspect objects",
      "to create child processes",
    ],
    answer: "to format text and inspect objects",
    explanation:
      "The correct option is 'to format text and inspect objects.' The 'util' module in Node.js provides utility functions for formatting text, inspecting objects, and working with common JavaScript utilities.",
  },
  {
    question:
      "Q62. In Node.js, what is the purpose of the 'child_process' module?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to create and manage child processes",
      "to perform cryptographic operations",
    ],
    answer: "to create and manage child processes",
    explanation:
      "The correct option is 'to create and manage child processes.' The 'child_process' module in Node.js is used to spawn and interact with child processes, allowing parallel execution of tasks and interaction with external commands.",
  },
  {
    question:
      "Q63. What is the primary purpose of the 'stream' module in Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to create and manage child processes",
      "to work with streaming data",
    ],
    answer: "to work with streaming data",
    explanation:
      "The correct option is 'to work with streaming data.' The 'stream' module in Node.js provides an interface for working with streaming data, allowing data to be read or written in chunks rather than loading the entire dataset into memory.",
  },
  {
    question:
      "Q64. What does the 'npm outdated' command do in a Node.js project?",
    code: null,
    options: [
      "to start the npm outdated process",
      "to display a list of outdated packages and their current versions",
      "to update all installed packages",
      "to uninstall Node.js packages",
    ],
    answer: "to display a list of outdated packages and their current versions",
    explanation:
      "The correct option is 'to display a list of outdated packages and their current versions.' The 'npm outdated' command is used to check for outdated packages in a Node.js project and displays information about the current and latest versions.",
  },
  {
    question: "Q65. What is the purpose of the 'events' module in Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to create and manage child processes",
      "to work with events and event emitters",
    ],
    answer: "to work with events and event emitters",
    explanation:
      "The correct option is 'to work with events and event emitters.' The 'events' module in Node.js provides an EventEmitter class that allows the implementation of the observer pattern, enabling the creation and handling of custom events.",
  },
  {
    question: "Q66. What is the purpose of the 'url' module in Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to parse URL strings and construct URL objects",
      "to work with streaming data",
    ],
    answer: "to parse URL strings and construct URL objects",
    explanation:
      "The correct option is 'to parse URL strings and construct URL objects.' The 'url' module in Node.js is used for parsing URL strings and constructing URL objects, providing utilities for working with URLs.",
  },
  {
    question: "Q67. What is the purpose of the 'path' module in Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to parse and manipulate file paths",
      "to work with streaming data",
    ],
    answer: "to parse and manipulate file paths",
    explanation:
      "The correct option is 'to parse and manipulate file paths.' The 'path' module in Node.js provides utilities for working with file and directory paths, including parsing, joining, and normalizing paths.",
  },
  {
    question: "Q68. What is the purpose of the 'fs' module in Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to parse and manipulate file paths",
      "to perform file system operations",
    ],
    answer: "to perform file system operations",
    explanation:
      "The correct option is 'to perform file system operations.' The 'fs' module in Node.js provides an interface for interacting with the file system, allowing operations such as reading, writing, and manipulating files and directories.",
  },
  {
    question:
      "Q69. In Node.js, which core module is commonly used for handling asynchronous operations?",
    code: null,
    options: ["async", "event", "util", "fs"],
    answer: "util",
    explanation:
      "The correct option is 'util.' While multiple modules in Node.js handle asynchronous operations, the 'util' module is commonly used for utilities related to asynchronous programming, including the 'promisify' function.",
  },
  {
    question: "Q70. What is the purpose of the 'zlib' module in Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to compress and decompress data using gzip or deflate",
      "to work with streaming data",
    ],
    answer: "to compress and decompress data using gzip or deflate",
    explanation:
      "The correct option is 'to compress and decompress data using gzip or deflate.' The 'zlib' module in Node.js provides functionality for compressing and decompressing data using gzip or deflate compression algorithms.",
  },
  {
    question:
      "Q71. What is the purpose of the 'querystring' module in Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to parse and stringify URL query strings",
      "to work with streaming data",
    ],
    answer: "to parse and stringify URL query strings",
    explanation:
      "The correct option is 'to parse and stringify URL query strings.' The 'querystring' module in Node.js provides utilities for parsing and stringify URL query strings, handling the encoding and decoding of query parameters.",
  },
  {
    question:
      "Q72. Which of the following is true about the 'http' module in Node.js?",
    code: null,
    options: [
      "It is deprecated and no longer used.",
      "It is used for handling HTTP requests and responses.",
      "It is used for creating and managing child processes.",
      "It is used for cryptographic operations.",
    ],
    answer: "It is used for handling HTTP requests and responses.",
    explanation:
      "The correct option is 'It is used for handling HTTP requests and responses.' The 'http' module in Node.js is used for creating an HTTP server, handling incoming HTTP requests, and sending HTTP responses.",
  },
  {
    question:
      "Q73. Which method in the 'http' module is used to create an HTTP server?",
    code: null,
    options: ["createServer", "startServer", "initServer", "httpServer"],
    answer: "createServer",
    explanation:
      "The correct method is 'createServer.' The 'http' module in Node.js uses the 'createServer' method to create an HTTP server that can handle incoming requests and provide responses.",
  },
  {
    question:
      "Q74. In Node.js, what is the purpose of the 'express' framework?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to parse and manipulate file paths",
      "to perform file system operations",
    ],
    answer: "to handle HTTP requests and responses",
    explanation:
      "The correct option is 'to handle HTTP requests and responses.' The 'express' framework in Node.js is a web application framework that simplifies the process of handling HTTP requests, defining routes, and sending responses.",
  },
  {
    question: "Q75. What is the purpose of the 'socket.io' library in Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to enable real-time, bidirectional, and event-based communication",
      "to work with streaming data",
    ],
    answer: "to enable real-time, bidirectional, and event-based communication",
    explanation:
      "The correct option is 'to enable real-time, bidirectional, and event-based communication.' The 'socket.io' library in Node.js facilitates real-time communication between clients and servers, supporting bidirectional and event-based communication.",
  },
  {
    question:
      "Q76. What is the purpose of the 'jsonwebtoken' library in Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to enable real-time communication",
      "to generate and verify JSON Web Tokens for authentication",
    ],
    answer: "to generate and verify JSON Web Tokens for authentication",
    explanation:
      "The correct option is 'to generate and verify JSON Web Tokens for authentication.' The 'jsonwebtoken' library in Node.js is used for generating and verifying JSON Web Tokens (JWTs), commonly used for authentication and authorization purposes.",
  },
  {
    question: "Q77. In the context of databases, what is Mongoose?",
    code: null,
    options: [
      "a database management system",
      "an object-relational mapping (ORM) library",
      "a query language for databases",
      "a NoSQL database",
    ],
    answer: "an object-relational mapping (ORM) library",
    explanation:
      "The correct option is 'an object-relational mapping (ORM) library.' Mongoose is an ORM library for MongoDB and Node.js, providing a schema-based solution for modeling and interacting with MongoDB databases.",
  },
  {
    question: "Q78. What is the purpose of the 'dotenv' library in Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to enable real-time communication",
      "to load environment variables from a .env file",
    ],
    answer: "to load environment variables from a .env file",
    explanation:
      "The correct option is 'to load environment variables from a .env file.' The 'dotenv' library in Node.js is used to load environment variables from a '.env' file into the application's process environment.",
  },
  {
    question: "Q79. In Node.js, what is the purpose of the 'cors' middleware?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to enable real-time communication",
      "to handle Cross-Origin Resource Sharing (CORS) in web applications",
    ],
    answer:
      "to handle Cross-Origin Resource Sharing (CORS) in web applications",
    explanation:
      "The correct option is 'to handle Cross-Origin Resource Sharing (CORS) in web applications.' The 'cors' middleware in Node.js is used to enable Cross-Origin Resource Sharing, allowing controlled access to resources from different origins in web applications.",
  },
  {
    question:
      "Q80. What is the purpose of the 'WebSocket' protocol in the context of Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to enable real-time communication",
      "to perform cryptographic operations",
    ],
    answer: "to enable real-time communication",
    explanation:
      "The correct option is 'to enable real-time communication.' The 'WebSocket' protocol in Node.js facilitates full-duplex communication channels over a single, long-lived connection, enabling real-time communication between clients and servers.",
  },
  {
    question:
      "Q81. What is the purpose of the 'pm2' tool in the context of Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to manage and monitor Node.js applications in production",
      "to perform file system operations",
    ],
    answer: "to manage and monitor Node.js applications in production",
    explanation:
      "The correct option is 'to manage and monitor Node.js applications in production.' The 'pm2' tool in Node.js is a process manager that simplifies the deployment, management, and monitoring of Node.js applications in production environments.",
  },
  {
    question: "Q82. What is the purpose of the 'Axios' library in Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to enable real-time communication",
      "to create and manage child processes",
    ],
    answer: "to handle HTTP requests and responses",
    explanation:
      "The correct option is 'to handle HTTP requests and responses.' The 'Axios' library in Node.js is a popular HTTP client that simplifies making HTTP requests and handling responses in both browsers and Node.js environments.",
  },
  {
    question: "Q83. What is the purpose of the 'Jest' library in Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to enable real-time communication",
      "to test JavaScript code, especially for React applications",
    ],
    answer: "to test JavaScript code, especially for React applications",
    explanation:
      "The correct option is 'to test JavaScript code, especially for React applications.' 'Jest' is a testing library in Node.js that is commonly used for testing JavaScript code, including applications built with React.",
  },
  {
    question:
      "Q84. What is the purpose of the 'GraphQL' in the context of Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to enable real-time communication",
      "to query and manipulate data using a flexible syntax",
    ],
    answer: "to query and manipulate data using a flexible syntax",
    explanation:
      "The correct option is 'to query and manipulate data using a flexible syntax.' GraphQL is a query language for APIs, and in the context of Node.js, it is used to define, query, and manipulate data in a flexible and efficient manner.",
  },
  {
    question:
      "Q85. What is the purpose of the 'MongoDB' database in the context of Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to enable real-time communication",
      "to store and retrieve data using a NoSQL database",
    ],
    answer: "to store and retrieve data using a NoSQL database",
    explanation:
      "The correct option is 'to store and retrieve data using a NoSQL database.' MongoDB is a NoSQL database commonly used in Node.js applications to store and retrieve data in a flexible, JSON-like format.",
  },
  {
    question: "Q86. What is the purpose of the 'Socket.IO' library in Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to enable real-time communication",
      "to create and manage child processes",
    ],
    answer: "to enable real-time communication",
    explanation:
      "The correct option is 'to enable real-time communication.' Socket.IO is a library in Node.js that enables real-time, bidirectional, and event-based communication between clients and servers using WebSockets.",
  },
  {
    question:
      "Q87. What is the purpose of the 'npm' package manager in the context of Node.js?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to enable real-time communication",
      "to manage and install packages and dependencies in Node.js projects",
    ],
    answer:
      "to manage and install packages and dependencies in Node.js projects",
    explanation:
      "The correct option is 'to manage and install packages and dependencies in Node.js projects.' npm (Node Package Manager) is the default package manager for Node.js, used to manage and install packages, libraries, and dependencies in Node.js projects.",
  },
  {
    question: "Q88. In the context of Node.js, what is 'middleware'?",
    code: null,
    options: [
      "a programming language",
      "a software architecture pattern",
      "a type of module",
      "a function or set of functions that can be executed during the processing of an HTTP request",
    ],
    answer:
      "a function or set of functions that can be executed during the processing of an HTTP request",
    explanation:
      "The correct option is 'a function or set of functions that can be executed during the processing of an HTTP request.' In the context of Node.js, middleware refers to functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.",
  },
  {
    question:
      "Q89. What is the purpose of the 'JWT' (JSON Web Token) in the context of authentication?",
    code: null,
    options: [
      "to provide operating system-related utility functions",
      "to handle HTTP requests and responses",
      "to enable real-time communication",
      "to securely transmit information between parties as a JSON object",
    ],
    answer: "to securely transmit information between parties as a JSON object",
    explanation:
      "The correct option is 'to securely transmit information between parties as a JSON object.' JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and information exchange in web development.",
  },
  {
    question: "Q90. In the context of Node.js, what is 'npm init' used for?",
    code: "null",
    options: [
      "to install Node.js on a system",
      "to initialize a new Node.js project and create a 'package.json' file",
      "to create a new directory",
      "to uninstall Node.js modules",
    ],
    answer:
      "to initialize a new Node.js project and create a 'package.json' file",
    explanation:
      "The correct option is 'to initialize a new Node.js project and create a 'package.json' file.' The 'npm init' command is used to initialize a new Node.js project, and it guides the user through creating a 'package.json' file that contains metadata about the project and its dependencies.",
  },
];
