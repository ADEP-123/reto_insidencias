# Ejercicio nodejs express reto manejo insidencias campusland
Ejercicio realizado con node.js para interactuar con una base de datos mysql para poder reportar insidencias en equipos para una base de datos campusland

## Estructura Base de Datos
![Estructura Base De Datos](./imgs/base%20de%20datos.png)
La estructura de la base de datos se realizo siguiendo los requerimientos propuestos en la descripcion de la actividad por lo cual se tomaron las siguientes decisiones:
1. Con la intencion de normalizar la base de datos se creo una tabla tipo equipo que categoriza los posibles equipos tecnologicos que se tendran en los reportes
2. Se creo una relacion entre el trainer y la insidencia ya que deberia poder ponerse el trainer a cargo de la sala en el momento de la misma
3. Dado que el equipo de la insidencia tiene la informacion del lugar y area por normalizacion, es decir para no repetir datos, se eliminaron los campos de lugar y area de la tabla de insidencia
## Modo de uso:
1. Clonar el repositorio en su dispositivo
2. Ingresar a la carpeta backend > scripts y seleccionar el archivo script_database 
3. Ejecutar paso a paso el archivo para crear la base de datos de manera local, para esto recuerde que primero debe seguir los siguientes pasos:
   - 3.1. Corrobore tener Apache y Mysql instalados y corriendo en su ordenador
   - 3.2. Ejecute el comando "mysql -u root -p;"
   - 3.3. Si no muestra ningun error, Ejecute el comando "SHOW DATABASES;" y asegurese de no tener ninguna base de datos con el nombre "reto_insidencias"
   - 3.4. Ahora ejecute uno a uno los comandos del archivo scriptDatabase
4. Revise que las configuraciones del archivo .env coincidan con las de su ordenador, si no es el caso cambielas
5. Abra un nuevo bloque de comandos desde el archivo del repositorio, si esta usando visual estudio puede hacerlo desde la pestaña terminal > new terminal
6. Con el comando "cd backend"  ingrese a la carpeta backend
7. Ejecute el comando "npm install"
8. Ejecute el comando "npm run dev"
9. La consola le mostrara la direccion http donde esta corriendo el servidor, la cual de manera predeterminada es "http://127.9.63.7:5000/insidencias"
10. Para interactuar con los enpoints es recomendable usar una extension como Thunder Client, para ello siga los siguientes pasos:
   - 10.1. Descarge la extension Thunder Client desde visual studio code
   - 10.2. En el panel izquierdo seleccione la extension Thunder Client y posteriormente en new request
   - 10.3. Coloque la url en el panel de direccion de Thunder Client con el endpoint especifico
   - 10.4. Seleccione el metodo de la peticion segun corresponda
   - 10.5. Si es un metodo POST envie un objeto en formato JSON con la informacion requerida en la pestaña body de Thunder Client

    ---
## Consultas SQL

---
Para realizar las consultas tenga en cuenta la siguiente informacion
1. Las consultas se pueden realizar enviando informacion tanto en el body como en el query, pero se prioriza la existencia de informacion en el body.
2. Los parametros se deben enviar tal cual con los nombres que aparecen en las respectivas consultas y estos son:
```json
2.1. Areas :{
 id: Parametro tipo entero,
 nombre: Parametro tipo string
 }
2.2. Lugar :{
 id: Parametro tipo entero,
 area: Parametro tipo entero corresponde al id del area asociada,
 nombre: Parametro tipo string
 }
2.3. Categoria: {
 id: Parametro tipo entero,
 nombre: Parametro tipo string
 }
2.4. Tipo: {
 id: Parametro tipo entero,
 nombre: Parametro tipo string
 }
2.5. Tipo_Equipo: {
 id: Parametro tipo entero,
 nombre: Parametro tipo string  
 }
2.6. Equipo: {
 id: Parametro tipo string,
 tipo_id: Parametro tipo entero corresponde al id del tipo de equipo,
 cantidad: Parametro tipo entero,
 lugar_id: Parametro tipo entero corresponde al id del lugar
 }
2.7. Trainer: {
 id: Parametro tipo string,
 nombre: Parametro tipo string,
 email1: Parametro tipo string,
 email2: Parametro tipo string,
 tegMov: Parametro tipo string,
 tefRes: Parametro tipo string,
 tefEmpresa: Parametro tipo string, se valida que el dominio sea @campuslands.com,
 tefMovEmpres: Parametro tipo string,
 }
2.8. Insidencias: {
id: Parametro tipo entero,
categoria: Parametro tipo entero corresponde al id de la categoria de la insidencia, 
tipo: Parametro tipo entero corresponde al id del tipo de insidencia, 
descripcion: Parametro tipo string, 
trainer: Parametro tipo string corresponde al id del trainer,
equipo: Parametro tipo string corresponde al id del equipo afectado,
 }  
```



