# octopuscs

## Prerequisite

Install [docker desktop](https://docs.docker.com/desktop/).

## Run

Run with:

```
docker-compose up -d
```

the application opens at http://localhost:3000/

---

## Visual Demonstration Of The Architecture

### ERD

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

### Docker Initialization

The [docker-compose.yaml](docker-compose.yaml) pre-defines an architecure of 
images ready to be loaded into containers.
When running the `docker-compose up -d` command, the architecture initiates itself and runs.
```mermaid
flowchart TD
    compose[`docker-compose up -d`] --> octopuscs-network[octopuscs network]

    subgraph octopuscs-network
    direction BT
    mongodb
    mongo-express["mongo-express (UI)"]
    app -->|Depends on| mongodb
    end
```