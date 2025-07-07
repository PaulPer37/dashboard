# Open Meteo TypeScript Project

Este proyecto es una aplicación TypeScript que utiliza la API de Open-Meteo para obtener datos meteorológicos. A continuación se describen los archivos y su propósito.

## Estructura del Proyecto

```
openmeteo-typescript
├── src
│   ├── types
│   │   └── DashboardTypes.tsx
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Descripción de Archivos

- **src/types/DashboardTypes.tsx**: Contiene la interfaz `OpenMeteoResponse`, que representa la estructura del JSON de salida de la API de Open-Meteo. Esta interfaz incluye propiedades como `latitude`, `longitude`, `timezone`, y `hourly`, que a su vez puede incluir subpropiedades como `temperature_2m`, `relative_humidity_2m`, `apparent_temperature`, y `wind_speed_10m`.

- **src/index.ts**: Este archivo es el punto de entrada de la aplicación. Aquí se puede incluir la lógica para realizar una solicitud a la API de Open-Meteo y manejar la respuesta utilizando la interfaz `OpenMeteoResponse`.

- **tsconfig.json**: Configuración para TypeScript. Especifica las opciones del compilador y los archivos que se incluirán en la compilación.

- **package.json**: Configuración para npm. Lista las dependencias y scripts para el proyecto.

## Justificación del Uso de Interfaces

Las interfaces en TypeScript permiten definir la forma de los datos que se esperan de la API, lo que ayuda a garantizar que el código sea más seguro y fácil de mantener. Al utilizar la interfaz `OpenMeteoResponse`, se puede asegurar que cualquier respuesta de la API cumpla con la estructura esperada, facilitando la manipulación de los datos en el código.

## Instrucciones para Ejecutar la Aplicación

1. Clona el repositorio.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm start` para iniciar la aplicación.

## Ejemplo de Uso de la Interfaz OpenMeteoResponse

```typescript
import { OpenMeteoResponse } from './types/DashboardTypes';

// Ejemplo de uso de la interfaz
const response: OpenMeteoResponse = {
  latitude: 35.6895,
  longitude: 139.6917,
  timezone: "Asia/Tokyo",
  hourly: {
    temperature_2m: [20, 21, 22],
    relative_humidity_2m: [60, 65, 70],
    apparent_temperature: [19, 20, 21],
    wind_speed_10m: [5, 10, 15],
  },
};
```

Con esta estructura y documentación, el proyecto está listo para ser desarrollado y utilizado.