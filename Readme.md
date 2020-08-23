# AWS Certified Developer - Associate

I decided to challenge me and started learning for the AWS certificate. FreeCodeCamp offers
a tutorial where they introduce the needed knowledge and experience

https://www.youtube.com/watch?v=RrKRN9zRBWs&t=7207s

## 1 Docker Full Stack App

Following the tutorial I realized, that you need to know how docker works and how you deploy with docker.
So I started watching another tutorial on docker and developed a little fullstack app (React, Node, MongoDB)
to practice what I have learned. It was really exciting and now I understand docker much better.

https://www.youtube.com/watch?v=fqMOX6JJhGo&t=3377s

## 2 Docker Full Stack App @ Multicontainer Docker EB Instance

The tutorial does not explain how to deploy on EB using multiple containers as you are used to do with docker compose. So I tryed it on my own.

1. `eb init` (Create a new docker app with multicontainer support).
2. add Dockerrun.aws.json to the folder `touch Dockerrun.aws.json`.
3. I need to use an environment name `eb use my-env`.
4. `eb create --single` create the instance and wait that it finished loading.
5. Access it with the ip or the given dns.
