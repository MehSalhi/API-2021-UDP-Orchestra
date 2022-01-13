# API - UDP Orchestra - Rapport
## Task 1: design the application architecture and protocols

| #        | Topic                                                                                                                                                                                  |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Question | How can we represent the system in an **architecture diagram**, which gives information both about the Docker containers, the communication protocols and the commands?                |
|          | *Insert your diagram here...*                                                                                                                                                          |
| Question | Who is going to **send UDP datagrams** and **when**?                                                                                                                                   |
|          | Every Musician every second                                                                                                                                                            |                                                                                                                                                         |
| Question | Who is going to **listen for UDP datagrams** and what should happen when a datagram is received?                                                                                       |
|          | The Auditor App. Everytime a datagram is received, the Auditor should update it's table of musicians to indicate that this musician is active, it's instrument and it's last activity. |
| Question | What **payload** should we put in the UDP datagrams?                                                                                                                                   |
|          | A string corresponding to the instrument played by the musician                                                                                                                        |
| Question | What **data structures** do we need in the UDP sender and receiver? When will we update these data structures? When will we query these data structures?                               |
|          | A destination address (ip + port), a source address (ip + port), a payload                                                                                                             |


## Task 2: implement a "musician" Node.js application

| #  | Topic                                                                                                                                                        |
| ---  |--------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Question | In a JavaScript program, if we have an object, how can we **serialize it in JSON**?                                                                          |
| | *Enter your response here...*                                                                                                                                |
|Question | What is **npm**?                                                                                                                                             |
| | npm is a package manager for JavaScript                                                                                                                      |
|Question | What is the `npm install` command and what is the purpose of the `--save` flag?                                                                              |
| | 'npm install' is used to install a module and '--save' adds the package to the dependencies. From version 5.0, '--save' is optionnal and done automatically. |
|Question | How can we use the `https://www.npmjs.com/` web site?                                                                                                        |
| | This website can be used as a npms modules repository to get new modules.                                                                                    |
|Question | In JavaScript, how can we **generate a UUID** compliant with RFC4122?                                                                                        |
| | *Enter your response here...*                                                                                                                                |
|Question | In Node.js, how can we execute a function on a **periodic** basis?                                                                                           |
| | With the command : `setInterval(functionName, timeInMs);`                                                                                                    |
|Question | In Node.js, how can we **emit UDP datagrams**?                                                                                                               |
| | *Enter your response here...*                                                                                                                                |
|Question | In Node.js, how can we **access the command line arguments**?                                                                                                |
| | *Enter your response here...*                                                                                                                                |


## Task 3: package the "musician" app in a Docker image

| #  | Topic |
| ---  | --- |
|Question | How do we **define and build our own Docker image**?|
| | *Enter your response here...*  |
|Question | How can we use the `ENTRYPOINT` statement in our Dockerfile?  |
| | *Enter your response here...*  |
|Question | After building our Docker image, how do we use it to **run containers**?  |
| | *Enter your response here...*  |
|Question | How do we get the list of all **running containers**?  |
| | *Enter your response here...*  |
|Question | How do we **stop/kill** one running container?  |
| | *Enter your response here...*  |
|Question | How can we check that our running containers are effectively sending UDP datagrams?  |
| | *Enter your response here...*  |


## Task 4: implement an "auditor" Node.js application

| #  | Topic |
| ---  | ---  |
|Question | With Node.js, how can we listen for UDP datagrams in a multicast group? |
| | *Enter your response here...*  |
|Question | How can we use the `Map` built-in object introduced in ECMAScript 6 to implement a **dictionary**?  |
| | *Enter your response here...* |
|Question | How can we use the `Moment.js` npm module to help us with **date manipulations** and formatting?  |
| | *Enter your response here...* |
|Question | When and how do we **get rid of inactive players**?  |
| | *Enter your response here...* |
|Question | How do I implement a **simple TCP server** in Node.js?  |
| | *Enter your response here...* |


## Task 5: package the "auditor" app in a Docker image

| #  | Topic |
| ---  | --- |
|Question | How do we validate that the whole system works, once we have built our Docker image? |
| | *Enter your response here...* |
