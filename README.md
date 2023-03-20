# octopuscs

A simple app for demonstrating the use of docker containers with Node.js and MongoDB.

The home page of the app is destined to display the quantity of apples in the database.

## Prerequisite

Install [docker desktop](https://docs.docker.com/desktop/).

## Run

- To run the application:

  ```
  docker-compose up -d
  ```
  
  the application opens at http://localhost:3000/

- To stop the application:

  ```
  docker-compose down
  ```
---

## Visual Demonstration Of The Architecture

### Docker Initialization Architecture

The [docker-compose.yaml](docker-compose.yaml) pre-defines an architecure of 
images ready to be loaded into containers.
When running the `docker-compose up -d` command, the architecture initiates itself and runs.
```mermaid
flowchart TD
    compose>`docker-compose up -d`] --> octopuscs-network[octopuscs network]

    subgraph octopuscs-network
    direction BT
        subgraph mongodb-initialization
        direction BT
            mongodb[(mongodb)] --> |Calls| mongo-init>mongo-init.js]
        end

        mongo-express["mongo-express (UI)"]

        subgraph app-initialization
        direction BT
            app --> |Calls| dockerfile>Dockerfile]
        end

        app-initialization -->|Depends on| mongodb-initialization
    end
```

### About The Containers

- `mongodb` stores the MongoDB database at http://localhost:27017/
- `mongo-express` may view the database at http://localhost:8061/
- `app` opens at http://localhost:3000/

### App Architecture

#### ERD

```mermaid
erDiagram

ITEMS {
    String _id PK
    String name
    Number qty
    Number rating
    Number microsieverts
}

```

#### App Flow

```mermaid
flowchart TD
`index.js` --> |Establish Connection To DB| `dal.js`
HomePage[Home Page] -->|Http Request To View Apples' Quantity| Controllers --> Logics --> `dal.js` --> MongoDB[(MongoDB)]

```

---

## About Releases

The [docker-publish.yml](.github/workflows/docker-publish.yml) file builds and publishes a release of the `app` image.

You may download the latest release of the `app` image [here](https://github.com/taljacob2/octopuscs/pkgs/container/octopuscs).

