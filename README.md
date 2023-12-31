# load-balancer
Load balancer implementation in Node.js

Implementation of round‑robin load balancing.


![alt text](https://github.com/ivanmmarkovic/misc/blob/9e38b521afa94544a90424e97615a16774cfd815/images-microservices-app/my-microservice-project.png)

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