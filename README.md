# Placeholder

Placeholder is a turnkey System.

## Dependencies

 - [GraalVM](https://www.graalvm.org/)
 - [Maven](https://maven.apache.org/)

 ## Optional Dependencies

 - [Docker](https://www.docker.com/)

## Development

Start service with spring-boot.
```
mvn clean spring-boot:run
```

Wait until started and watch and rebuild ui.
```
npm --prefix ui run watch
```

> For browser reloading add LiveReload extension.

## Reactor Build

```
mvn clean install
```

## GraalVM Native Support

This project has been configured to let you generate either a lightweight container or a native executable.
It is also possible to run your tests in a native image.

### Lightweight Container with Cloud Native Buildpacks

If you're already familiar with Spring Boot container images support, this is the easiest way to get started.
Docker should be installed and configured on your machine prior to creating the image.

To create the image, run the following goal:

```
mvn clean spring-boot:build-image -Pnative
```

Then, you can run the app like any other container:

```
docker run --rm -p 8080:8080 service:0.0.1-SNAPSHOT
```

### Executable with Native Build Tools

Use this option if you want to explore more options such as running your tests in a native image.
The GraalVM `native-image` compiler should be installed and configured on your machine.

NOTE: GraalVM 22.3+ is required.

To create the executable, run the following goal:

```
mvn native:compile -Pnative
```

> Requires running `mvn clean install` to build `ui` artifact.

Then, you can run the app as follows:
```
service/target/service
```

You can also run your existing tests suite in a native image.
This is an efficient way to validate the compatibility of your application.

To run your existing tests in a native image, run the following goal:

```
mvn clean test -PnativeTest
```
