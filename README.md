# load-balancer
Load balancer implementation in Node.js

Implementation of round‑robin load balancing.

![alt text](https://github.com/ivanmmarkovic/misc/blob/c14b0ee7fde54f4f8210b2a778a242dc4c132532/load-balancer/load%20balancer.png)

- [Firefox icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/firefox){:target="_blank"}

- [Server icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/server)

- [Server icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/database)

Project description

- One api-gateway microservice(contains load balancer implementation)
- Three instances of users microservices 
- All instances share same MongoDB instance.

You can access application on http://localhost:8080.
To test all routes, there is a Postman collection.
To start application, navigate to root directory and run docker-compose up --build.


Method | URL | description | access
-------|---- | ------------|--------
POST      |/users                            | create user            | all
GET       |/users                            | get all users          | all
GET       |/users/{id}                       | get user by id         | all
PATCH     |/users/{id}                       | update user            | all
DELETE    |/users/{id}                       | delete user            | all
