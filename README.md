# Web APP echa en ReactJS y ExpressJS que hice como test para Mercadolibre

*Esta descripción esta pensada para un usuario de Windows*

*Necesitas tener instalado la ultima versión de [NodeJS](https://nodejs.org/es/) y saber usar la consola.*

## Pasos para correr la Web APP:

### 1 Clonar archivos a tu PC

Después de tener instalado todo lo necesario necesitamos bajarnos los archivos de GitHub para poder correr la Web App y poder editar los archivos, para ello hacemos los siguiente pasos:

* Abrir la consola de NodeJS.
* Dirigirnos al directorio donde queremos crear la carpeta del proyecto (si es en escritorio por ejemplo debemos escribir el siguiente comando `cd C:\Users\AQUI VA NUESTRO USUARIO\Desktop` y luego precionar enter).
* Luego debemos clonar los archivos de github a nuestra PC (en el directorio que designamos en el punto anterior) para ello escribimos el siguiente comando `git clone https://github.com/matidiaz00/test-mercadolibre.git` y precionamos enter.

Con estos puntos ya deberíamos tener todos los archivos en el directorio que designamos.

### 2 Instalar SASS

Para poder usar las hojas de estilos debes tener instalado SASS en tu PC

`npm install -g sass`

### 3 Instalar paquetes

Ahora debemos instalar todos los paquetes necesarios para correr esta Web APP, para ello solo debemos escribir el siguiente comando y presionar enter.

`npm install`

Tambien debemos instalas los paquetes del lado del cliente, para ello debemos escribir los siguientes comandos en este orden.

`npm install`

`cd client`

`npm install`

`cd ..`

### 4 Estamos listos para correr la Web APP

Para ello iremos de nuevo a nuestra consola (que ya debería estar abierta) de NodeJS y escribimos el siguiente comando:

`npm run dev`

Ahora podremos hacer cualquier cambio en la Web APP y se refrescara automáticamente en el navegador.

Si deseamos salir de esta función solo debes apretar "Control" + "C" y luego escribir "s" o también puedes cerrar esta consola.