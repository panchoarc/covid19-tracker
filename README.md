# COVID-19 Tracker

## [Live Demo](https://trackerapp-covid19.netlify.app/)

# Tecnologías Utilizadas

- [Create React App](https://create-react-app.dev/docs/getting-started/)

Herramienta oficial para la creación de SPA (Single Page Applications) utilizando react para la construcción rápida sin configuración.

- [Material-UI](https://github.com/axios/axios)

Material-UI es una biblioteca de componentes simple y personalizable para crear aplicaciones React más rápidas, hermosas y más accesibles siguiendo el sistema de diseño Material Design

- [Axios](https://github.com/axios/axios)

Cliente HTTP basado en promesas

- [Chart.js](https://www.chartjs.org/)

Gráficos de JavaScript simples pero flexibles para diseñadores y desarrolladores

<br>

# Scripts Disponibles

### `npm start` o `yarn start`

Nos permite iniciar la aplicación en modo desarrollo en el puerto 3000

### `npm run build`

Nos permite crear el bundle de producción. Este bundle se localiza en **build**


## Docker

Si desea construir la aplicación en un contenedor de Docker, utilice la siguiente sintaxis:

**_Para su construcción:_**

```docker
docker build -t <NombreAplicación> .
```

**_Para su despliegue:_**

```docker
docker run -dp puertocontenedor:puertomaquina --name <NombreContenedorAplicación> <NombreAplicación>
```
