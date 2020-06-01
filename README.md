
# **Como ejecutar y probar el proyecto**

1. Clona el proyecto con 
  ```
  git clone https://github.com/miguelseguramx/terapify-challenge.git
  ```
2. [Configura tus variables de entorno dentro de la carpeta Backend](#configuracion-de-las-variables-de-entorno)
3. [Instala las dependencias en las carpetas principales](#instalacion-de-las-dependencias)
4. [Levanta el backend con `npm run build`](#comandos-para-el-backed')
5. [Configura tus variables de entorno dentro de la carpeta Frontend](#configuracion-de-las-variables-de-entorno)
6. [Ejecuta una peticion del tipo POST a localhost:3001/api/all para llenar de datos falsos tu base de datos de Mongo DB](#el-api)
7. [Construye el front con `npm run build`](#comandos-para-el-frontend)
8. [Levanta el front con `npm start`](#comandos-para-el-frontend)
9. [Si deseas probar las rutas revisa la documentacion del proyecto](#puedes-probar-las-rutas-desde-tu-herramienta-favorita)


## **Configuracion de las variables de entorno**

Crea un archivo `.env` dentro de la carpeta backend con la informacion de tu Cluster de MongoDB

```
// MONGO
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=
```

Crea un archivo `.env.local` dentro de la carpeta frontend para indicarle donde esta corriendo el backend actualmente (BACKEND_URL)

```
NEXT_PUBLIC_BASEURL=http://192.168.0.4:3001 
```

Este paso es super importante para poder probar el proyecto en celulares o tablets conectados al area local

[Volver arriba](#como-ejecutar-y-probar-el-proyecto)
## **Instalacion de las dependencias**

Para instalar las dependencias del proyecto, debes de ejecutar `npm i ` dentro de la carpeta Backend y dentro de la carpeta Frontend

[Volver arriba](#como-ejecutar-y-probar-el-proyecto)
## **Comandos para el Frontend**

```
npm run dev
```

Este comando creara la aplicacion con un Servidor de desarrollo escuchando todos los cambios

```
npm run build
```

Este comando creara la aplicacion optimizada para producion

```
npm start
```
Este comando abrira la aplicacion ya optimizada, siempre debe de ejecutarse despues de haber ejecutado el comando `npm run build`

[Volver arriba](#como-ejecutar-y-probar-el-proyecto)
## **Comandos para el Backed**

```
npm start
```

Este comando nos ayudara a levantar nuestro servidor en modo de desarrollo escuchando todos los cambios que necesitemos con nodemon

```
npm build
```

Este comando nos ayudara a levantar nuestro servidor en modo de produccion

[Volver arriba](#como-ejecutar-y-probar-el-proyecto)

## **El API**

### **Puedes probar las rutas desde Postman**

Para ejecutar las peticiones y probar las rutas desde postman vas a necesitar importar [este archivo de la Colleccion](https://www.postman.com/collections/2955227a0cb33edf6525)

Y crear un workspace donde definiras dos variables que nos ayudaran a mantener los datos actualizados gracias a los test

```
url = BACKEND_URL
actualId = 
```

Es importante que primero ejecutes una peticion del tipo Post donde crees una nueva cita,
asi guardaras el id generado por MongoDb automaticamente para despues ejecutar peticiones del tipo PUT, DELETE 

[Volver arriba](#como-ejecutar-y-probar-el-proyecto)

### **Puedes probar las rutas desde tu herramienta favorita**

[Aqui](https://b01b463e6126.ngrok.io/api/docs/) encontraras toda la informacion necesaria para ejecutar tus propias peticiones gracias a la documentacion del backend.

![Asi luce la documentacion del backend](/sample.png "Muestra de la documentacion del backedn")

[Volver arriba](#como-ejecutar-y-probar-el-proyecto)
