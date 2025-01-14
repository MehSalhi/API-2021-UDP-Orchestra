# API - UDP Orchestra - Rapport
## Task 1: design the application architecture and protocols

| #        | Topic                                                                                                                                                                                  |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Question | How can we represent the system in an **architecture diagram**, which gives information both about the Docker containers, the communication protocols and the commands?                |
|          | ![](API_Orchestra_Architecture2.png)                                                                                                                                                                                       |
| Question | Who is going to **send UDP datagrams** and **when**?                                                                                                                                   |
|          | Every Musician every second                                                                                                                                                            |                                                                                                                                                         |
| Question | Who is going to **listen for UDP datagrams** and what should happen when a datagram is received?                                                                                       |
|          | The Auditor App. Everytime a datagram is received, the Auditor should update it's table of musicians to indicate that this musician is active, it's instrument and it's last activity. |
| Question | What **payload** should we put in the UDP datagrams?                                                                                                                                   |
|          | A string corresponding to the instrument played by the musician                                                                                                                        |
| Question | What **data structures** do we need in the UDP sender and receiver? When will we update these data structures? When will we query these data structures?                               |
|          | A destination address (ip + port), a source address (ip + port), a payload                                                                                                             |


## Task 2: implement a "musician" Node.js application

| #  | Topic                                                                                                                                                                  |
| ---  |------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Question | In a JavaScript program, if we have an object, how can we **serialize it in JSON**?                                                                                    |
| | *Enter your response here...*                                                                                                                                          |
|Question | What is **npm**?                                                                                                                                                       |
| | npm is a package manager for JavaScript                                                                                                                                |
|Question | What is the `npm install` command and what is the purpose of the `--save` flag?                                                                                        |
| | 'npm install' is used to install a module and '--save' adds the package to the dependencies. From version 5.0, '--save' is optionnal and done automatically.           |
|Question | How can we use the `https://www.npmjs.com/` web site?                                                                                                                  |
| | This website can be used as a npms modules repository to get new modules.                                                                                              |
|Question | In JavaScript, how can we **generate a UUID** compliant with RFC4122?                                                                                                  |
| | We can install the uuid module by using the `npm install uuid --save` command, then generate a uuid by using `const { v4: uuidv4 } = require('uuid'); uuidv4();` in the js code. |
|Question | In Node.js, how can we execute a function on a **periodic** basis?                                                                                                     |
| | With the command : `setInterval(functionName, timeInMs);`                                                                                                              |
|Question | In Node.js, how can we **emit UDP datagrams**?                                                                                                                         |
| | With the function: `socket.send(msg[, offset, length][, port][, address][, callback])`                                                                                 |
|Question | In Node.js, how can we **access the command line arguments**?                                                                                                          |
| | An array containing the application's name ("node"), the path of the script and the command line arguments is created when a script is launched. This array is called ` process.argv`|


## Task 3: package the "musician" app in a Docker image

| #  | Topic |
| ---  | --- |
|Question | How do we **define and build our own Docker image**?|
| | By creating a Dockerfile that specify the configuration of our image and building it with the `docker build` command.  |
|Question | How can we use the `ENTRYPOINT` statement in our Dockerfile?  |
| | We can use it to execute some code when we initiate our docker container  |
|Question | After building our Docker image, how do we use it to **run containers**?  |
| | With the `docker run NAME` command. Some parameters such as -p (to map a port) or -d (detached) can be added.  |
|Question | How do we get the list of all **running containers**?  |
| | Through the `docker ps` command. |
|Question | How do we **stop/kill** one running container?  |
| | With respectively the `docker stop NAME` or `docker kill NAME` commands. |
|Question | How can we check that our running containers are effectively sending UDP datagrams?  |
| | *Enter your response here...*  |


## Task 4: implement an "auditor" Node.js application

| #  | Topic                                                                                                                                                                                                        |
| ---  |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Question | With Node.js, how can we listen for UDP datagrams in a multicast group?                                                                                                                                      |
| | By adding the multicast address to the server's membership with : `server.addMembership(MCAST_ADDR);`                                                                                                        |
|Question | How can we use the `Map` built-in object introduced in ECMAScript 6 to implement a **dictionary**?                                                                                                           |
| | Simply by joining a key and a value to a map object (`const map = new Map();` then `map.set('key', value);`)                                                                                                                                                                               |
|Question | How can we use the `Moment.js` npm module to help us with **date manipulations** and formatting?                                                                                                             |
| | Moments has multiple methode to manipulates date and allow to easily add an amount to a date for example. Altough, the Moment website recommend to not us Moment.js anymore and recommend afew alternatives. |
|Question | When and how do we **get rid of inactive players**?                                                                                                                                                          |
| | We get rid of them when they didn't send a signal in the last 5 seconds by deleting their json row.                                                                                                                                                                                |
|Question | How do I implement a **simple TCP server** in Node.js?                                                                                                                                                       |
| | By importing the module "express", and then use functions `listen` and `send` to receive and send data.                                                                                                                                                                                |


## Task 5: package the "auditor" app in a Docker image

| #  | Topic |
| ---  | --- |
|Question | How do we validate that the whole system works, once we have built our Docker image? |
| | *Enter your response here...* |
