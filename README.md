## Arrancar el proyecto en desarrollo

1. **Clonar repositorio:**
git clone https://github.com/benjiserrano/task-manager.git
cd task-manager

2. **Instalar dependencias:**
npm install

3. **Iniciar el servidor de desarrollo:**
ionic serve

Esto iniciará el servidor de desarrollo. Accede a 'http://localhost:8100' en tu navegador para ver la aplicación.

## Estructura del Proyecto

### /src
- **/app/core:** Contiene elementos esenciales de la aplicación como interceptores HTTP y servicios globales.
- **/app/models:** Almacena interfaces o modelos utilizados en toda la aplicación para definir la estructura de datos.
- **/app/pages:** Agrupa diferentes módulos para las páginas de la aplicación (autenticación, calendario, inicio, pestañas (tabs), tareas, etc.).
- **/app/services:** Contiene servicios como AuthGuard para la protección de rutas y lógica de autenticación.
- **/app/shared:** Agrupa elementos compartidos entre diferentes partes de la aplicación, como servicios, componentes o pipes reutilizables.

### /assets
- **/icon:** Contiene íconos para la aplicación.
- **shapes.svg:** Archivo SVG con formas utilizadas en la aplicación.

### /environments
- **environment.prod.ts:** Configuración de entorno para producción.
- **environment.ts:** Configuración de entorno para desarrollo.
