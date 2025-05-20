# Timestamp Microservice

My solution for one of the tasks from [freecodecamp](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice). This task involved creation of simple timestamp microservice according to the given guidelines that can be found in the above link. The solution is currently available on [my website](https://timestamp.profresor.net)

## Requirements

The only requirement is Docker, which can be installed from [official website](https://www.docker.com/products/docker-desktop/)


## Setup

Microservice can be run using the following command run from the project directory:

```
sudo docker compose up -d
```

As the result, the microservice will be available at 127.0.0.1:10000.

NOTE: [<i>compose.yaml</i>](https://github.com/MrResor/freecodecamp-timestamp/blob/main/compose.yaml) should be updated with volume paths that correspond to the file layout on your machine.

## Description

The documentation of the application endpoints can be found under [<i>/api/docs<i>](https://timestamp.profresor.net/api/docs).