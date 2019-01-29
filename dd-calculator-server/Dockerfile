FROM openjdk:8-jdk-alpine
LABEL maintainer="selfmarcell@gmail.com"
VOLUME /tmp
EXPOSE 8080
ARG JAR_FILE=target/calculator-0.0.1-SNAPSHOT.jar

# Add the application's jar to the container
ADD ${JAR_FILE} calculator.jar

# Run the jar file 
ENTRYPOINT ["java","-jar","/calculator.jar"]