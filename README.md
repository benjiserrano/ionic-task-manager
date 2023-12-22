## Sobre el proyecto

La principal idea era aprovechar la plantilla "tabs" que ofrece Ionic para dividir la app en 3 secciones:

- Home: En la que contiene una vista general de las tareas diarias.
- Tareas (En construcción): Donde se muestran las tareas categorizadas por etiquetas.
- Calendario (En construcción): Una vista general de calendario donde se organizan las tareas y puedes consultar un día concreto.

> IMPORTANTE: El diseño ha sido trabajado en modo oscuro y para versión móvil o tablet. Tener en cuenta esto a la hora del testing.

## Estructura del proyecto

#### /src
- **/app/components:** Contiene sub componentes utilizados principalmente para las páginas.
- **/app/models:** Almacena interfaces o modelos utilizados en toda la aplicación para definir la estructura de datos.
- **/app/pages:** Agrupa diferentes módulos para las páginas de la aplicación (autenticación, calendario, inicio, pestañas (tabs), tareas, etc.).
- **/app/services:** Contiene servicios como AuthGuard para la protección de rutas y lógica de autenticación.
- **/app/shared:** Agrupa elementos compartidos entre diferentes partes de la aplicación, como servicios, componentes o pipes reutilizables.

#### /assets
- **/icon:** Contiene íconos para la aplicación.
- **shapes.svg:** Archivo SVG con formas utilizadas en la aplicación.

#### /environments
- **environment.prod.ts:** Configuración de entorno para producción.
- **environment.ts:** Configuración de entorno para desarrollo.

## Instalación

1. **Clonar repositorio:**
```
git clone https://github.com/benjiserrano/task-manager.git
cd task-manager
```

3. **Instalar dependencias:**
```
npm install
```

4. **Iniciar el servidor de desarrollo:**
```
ionic serve
```

Esto iniciará el servidor de desarrollo. Accede a 'http://localhost:8100' en tu navegador para ver la aplicación.

## Roadmap


- [x] Home (Sección)
    - [x] Componente para saludo inicial
    - [x] Componente para progreso
    - [x] Componente para listar tareas
- [x] Servicio para tareas
    - [x] CRUD
        - [x] Añadir tareas
        - [x] Modificar tareas
        - [x] Quitar tareas
    - [x] Sistema de etiquetas en tareas
    - [x] Sistema de estados (completado o pendiente)
        - [x] Pipe para obtener nombre de estado
- [x] Interfaces para modelos
    - [x] Tarea
    - [x] Etiqueta
    - [x] Usuario
- [x] Sistema de autenticación
    - [x] Implementar Auth Guard
    - [x] Inicio de sesión
    - [x] Registro
- [ ] Calendario (Sección)
- [ ] Tareas (Sección)