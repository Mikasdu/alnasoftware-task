# Alna Software task



## Running the application
As I used iv.lt mysql server for security purposes it requires internal IP, or configured IP address.
Feel free to ask I will add your IP address to my database server no further configuration required.

Or you can upload my database file to your mysql server: 
```
src\main\resources\database\person.sql
```
Database connection configuration file: 
```
src\main\resources\application.properties
```
Without MySQL application won't compile.


After cloning the repository, run this to launch the application:
```
./gradlew bootRun
```
Navigate to http://localhost:8080/ to see the application running.
