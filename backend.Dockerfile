FROM eclipse-temurin:24-jdk
WORKDIR /backend
COPY backend/app.jar .
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
