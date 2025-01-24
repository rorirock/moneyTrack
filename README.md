# MoneyTrack

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 17.3.10.

## Requisitos previos

Antes de ejecutar la aplicación, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión recomendada: 18.x o superior)
- [Angular CLI](https://angular.io/cli) (versión utilizada en el proyecto: 17.3.10)

Para verificar si Angular CLI está instalado, ejecuta:

ng version
node -v 

## Intalacion de proyecto

clonar repositorio

- git clone https://github.com/rorirock/moneyTrack.git

- cd moneytrack

Ahora instalamos las dependencias ejecutando:

- npm install


## Ejecutar la aplicación

Para iniciar el servidor de desarrollo, ejecuta:

- ng serve

Luego, abre tu navegador en http://localhost:4200/. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

## Estilos

Este proyecto utiliza SCSS como preprocesador de estilos y está basado en la librería de componentes Angular Material.
Para personalizar la apariencia de los componentes, revisa el archivo src/styles.scss.

## Generación de componentes

Para generar un nuevo componente, utiliza el siguiente comando:

- ng generate component nombre-del-componente


## Construcción del proyecto

Para compilar la aplicación en modo producción, ejecuta:

- ng build --configuration production
 
Los archivos generados se almacenarán en el directorio dist/.


## Pruebas unitarias

Para ejecutar las pruebas unitarias con Karma, usa:

- ng test

## Variables de entorno

Este proyecto maneja variables de entorno mediante los archivos:

 - src/environments/environment.dev.ts (para desarrollo)

Modifica estos archivos para agregar configuraciones específicas.

## Herramientas y librerías utilizadas

Angular - Framework de desarrollo
Angular Material - Librería de componentes UI
RxJS - Programación reactiva
SCSS - Preprocesador de estilos
Karma - Pruebas unitarias
Jasmine - Framework para pruebas unitarias


