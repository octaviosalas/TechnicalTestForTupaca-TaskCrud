Pasos para la instalacion del proyecto:

1 - Luego de clonar el repositorio, situarse en la carpeta "client" y ejecutar por consola "npm install". Esto instalara las dependencias para el frontend: MaterialUi - FaysiUi - TailwindCss - Uniqid - Axios.
2 - Luego, situarse en la carpeta "api" y ejecutar nuevamente por consola "npm install": Esto instala las dependencias del backend: node - express - mongoose - bodyParser - cors- nodemon - bcrypt - dateFns - dontenv

3 - En la carpeta "api" hay un achivo llamado ".env" que es el archivo que contiene la clave y el nombre de usuario para conectarse a la Base de Datos y poder ver la funcionalidad de la pagina. La base de Datos fue creada con MongoDB Atlas, por lo cual es una base de datos en la nube.

4 - Una vez instaladas las dependencias, situarse en la carpeta "client" y ejecutar por consola: npm run dev (esto levantara el frontend) + Luego situarse en la carpeta "api" y ejecutar por consola: npx nodemon index.js (esto levantara el servidor de node + express junto a la coneccion con la database de MongoDB)


5 - La version de NodeJs utilizada es: v16.17.0