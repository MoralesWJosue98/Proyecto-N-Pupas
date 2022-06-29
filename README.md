# Guía de instalación
## Tecnologías y prerrequisitos
La aplicación y sus componentes han sido utilizados y desarrollados en entorno local haciendo uso de las siguientes versiones de tecnologías, en el sistema operativo Windows 11. 
### Base de datos
  * PostgreSQL 14
  * PgAdmin 4

### Web Service
  * Java Runtime 18
  * Java Spring Boot 2.7.0
  * Spring Tools Suite 4

### Cliente Web
  * Next JS 12.1.5
  * React 18.1.0
  * Node JS 16.3.0
  * Npm 7.15.1

## Instalación de base de datos
  Con el objetivo de tener persistencia de datos en nuestra aplicación se debe contar con una base de datos. Para el caso, se utilizará PostgreSQL como gestor de base de datos.

  1. Ejecutar PgAdmin e ingresar credenciales de usuario. 
  2. Dar clic en ```Servers -> PostgreSQL 14 -> Databases```.
  3. Clic derecho en y luego clic en ```create -> database```.
  4. Dentro del campo escribir el nombre de la base de datos como ```npupas```. 
  5. clic derecho sobre ```npupas``` y luego clic en ```query tool```. 
  6. En el campo de texto de ```Query Editor``` pegar todo el contenido de [DDL.sql](./Data/DDL.sql) sustituyendo cualquier contenido existente.
  7. Presionar ```F5``` para ejecutar el contenido de ```Query Editor```.
  8. Repetir los pasos 6 y 7 con [DML.sql](./Data/DML.sql).

![Ejemplo de PgAdmin 4](./Images/pgadmin.png)

## Instalación de servicio Web
1. Modificar el contenido de ```Server/src/main/resources/application.properties``` asignando las credenciales para la base de datos. 
![Credenciales a modificar](./Images/spring.png)
2. Dentro de la carpeta ```Server/``` ejecutar el comando ```mvn spring-boot:run```.
![Ejemplo de ejecución con Maven](./Images/maven.png)

## Instalación de cliente web
1. Dentro de la carpeta ``` Client/n-pupas/``` ejecutar el comando ```npm install```.
2. Dentro de la misma carpeta ejecutar el comando ```npm run build```.
3. Dentro de la misma carpeta ejecutar el comando ```npm start```.
4. Puede acceder a la aplicación por medio de un navegador consultando la dirección [http://localhost:3000](http://localhost:3000).

![Ejemplo de ejecución en terminal](./Images/console.png)