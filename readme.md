Pasos para API
1.- Iniciar proyecto con npm i -y
2.- Instalar depencencias npm i express sequelize pg pg-hstore cors dotoenv
3.- Instalar dependecnias de desarrollo npm i nodemon morgan -D
4.- Estructura de carpetas 
    /src
    --- /services
    --- /models
    --- /controllers
    --- /routes
    --- /middlewares
    --- /seeders
    --- /tests
    --- /util
    --- /templates
    --- app.js
    --- server.js
5.- Scrips start, dev en pakage.js
6.- Crear un server basico
7.- Configurar la conexion a db
8.- Autenticar en app
9.- Crear modelo generico de usuarios
10.-Crear el init models
11.-Sincronizar base de datos
12.-Registrar usuarios -> creacion de usuarios
                       ->"1234" encriptar contraseña bcrypt
13.-Auteticacion con el login