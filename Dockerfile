# ----- `FROM` (this section MUST be first) -----
FROM openjdk:17-jre-alpine
# ----- `FROM` (this section MUST be first) -----


# ----- Variables -----
# Port (MUST be the same as `SPRING_DOCKER_PORT` in `.env` file)
ENV SPRING_DOCKER_PORT=8075
# Name
ARG APP_NAME=app.jar
ENV APP_PATH=app/$APP_NAME
# ----- Variables -----


# ----- Build -----
EXPOSE $SPRING_DOCKER_PORT
ADD spring/build/libs/$APP_NAME $APP_PATH
ENTRYPOINT java -jar $APP_PATH --server.port=$PORT
# ----- Build -----