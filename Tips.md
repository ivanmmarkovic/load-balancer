https://www.cloudbees.com/blog/using-docker-compose-for-nodejs-development


'docker-compose' creating multiple instances for the same image

https://stackoverflow.com/questions/39663096/docker-compose-creating-multiple-instances-for-the-same-image

The old "scale" feature is now called replicas and it is part of the current Docker Compose specs, 2.19.1 as of writing.

Note that replicas is ignored if you name your container using container_name: myname. You must let the Docker generate the names.

services:
  myapp:
    image: awesome/webapp
    deploy:
      mode: replicated
      replicas: 6
