# BiblioPerú - Sistema de Gestión Bibliotecaria

Sistema de gestión bibliotecaria institucional con catálogo de libros, préstamos y soporte multiidioma.

## 📁 Estructura del Proyecto

```
IHC/
├── public/                    # Vistas HTML públicas
│   ├── index.html            # Página principal (español)
│   ├── catalogo.html         # Catálogo de libros
│   ├── prestamos.html        # Préstamos activos
│   ├── historial.html        # Historial de lectura
│   ├── perfil.html           # Perfil de usuario
│   ├── login.html            # Inicio de sesión
│   ├── detallelibro.html     # Detalle de libro
│   ├── solicitarprestamo.html # Formulario de solicitud
│   ├── language/             # Versiones multiidioma
│   │   ├── index-en.html     # Inglés
│   │   ├── index-ru.html     # Ruso
│   │   ├── index-zh.html     # Chino
│   │   ├── index-it.html     # Italiano
│   │   └── index-be.html     # Bielorruso
│   └── contrast-views/      # Vistas de alto contraste
│       ├── index-contrast.html
│       ├── catalogo-contrast.html
│       ├── prestamos-contrast.html
│       ├── historial-contrast.html
│       ├── login-contrast.html
│       └── detalle-contrast.html
├── admin/                     # Panel administrativo
│   ├── login-admin.html      # Login administrador
│   ├── panel-admin.html      # Dashboard principal
│   ├── usuarios.html         # Gestión de usuarios
│   ├── detalle-usuario.html  # Detalle de usuario
│   ├── info-libros.html      # Gestión de libros
│   └── detalle-libro-adm.html # Detalle de libro (admin)
├── assets/                    # Recursos compartidos
│   ├── css/
│   │   ├── styles.css        # Estilos principales
│   │   ├── hamBurger.css     # Estilos menú hamburguesa
│   │   └── styles-admin.css  # Estilos panel admin
│   ├── js/
│   │   ├── scripts.js        # Scripts públicos
│   │   └── scripts-admin.js  # Scripts administrativos
│   └── img/                  # Imágenes de libros
├── docs/                      # Documentación
├── data.json                  # Archivo de datos (actualmente vacío)
└── README.md                  # Este archivo
```

## 🚀 Características

### Para Usuarios
- **Catálogo de libros**: Exploración de más de 1,200 libros
- **Gestión de préstamos**: Control de libros prestados y fechas de devolución
- **Historial de lectura**: Registro de libros leídos
- **Perfil de usuario**: Información personal y configuración de accesibilidad
- **Soporte multiidioma**: Español, inglés, ruso, chino, italiano, bielorruso
- **Vistas de alto contraste**: Modo accesible para usuarios con discapacidad visual

### Para Administradores
- **Gestión de usuarios**: Crear, editar y eliminar usuarios
- **Gestión de libros**: Administrar catálogo, stock y disponibilidad
- **Información de accesibilidad**: Registro de necesidades especiales de usuarios
- **Dashboard**: Resumen de estadísticas del sistema

## 💾 Gestión de Datos

### Almacenamiento Actual
El sistema utiliza **localStorage** del navegador para almacenar datos:
- `biblioperu_books`: Catálogo de libros
- `biblioperu_users`: Usuarios registrados
- `biblioperu_admins`: Administradores del sistema
- `biblioperu_admin_session`: Sesión de administrador activa

Los datos por defecto están definidos en `assets/js/scripts-admin.js` y se inicializan automáticamente al cargar el panel administrativo.

### data.json
El archivo `data.json` está disponible pero actualmente no se utiliza. Puede implementarse para:
- Cargar datos iniciales desde un archivo JSON externo
- Migrar los datos por defecto de scripts-admin.js
- Facilitar la importación/exportación de datos

## 🌐 Multiidioma

El sistema soporta 6 idiomas a través de archivos HTML separados en la carpeta `public/language/`:
- **Español (es)**: `public/index.html`
- **Inglés (en)**: `public/language/index-en.html`
- **Ruso (ru)**: `public/language/index-ru.html`
- **Chino (zh)**: `public/language/index-zh.html`
- **Italiano (it)**: `public/language/index-it.html`
- **Bielorruso (be)**: `public/language/index-be.html`

## 🔧 Configuración

### Requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- JavaScript habilitado
- localStorage habilitado

### Instalación
1. Clonar o descargar el repositorio
2. Abrir `public/index.html` en un navegador web
3. Para acceso administrativo, navegar a `admin/login-admin.html`

### Credenciales de Administrador (Demo)
- **Email**: admin@biblioperu.com
- **Contraseña**: admin123

## 📝 Notas de Desarrollo

### Rutas Relativas
- Las páginas en `public/` usan rutas relativas a `../assets/`
- Las páginas en `public/language/` usan rutas relativas a `../../assets/`
- Los enlaces de navegación en `language/` deben usar `../` para volver a `public/`

### Enlaces de Idioma
Los selectores de idioma deben usar etiquetas `<a>` en lugar de `<button>` para que funcionen correctamente como enlaces de navegación.

### Accesibilidad
El sistema incluye so para:
- Alto contraste (vistas en `contrast-views/`)
- Información de accesibilidad por usuario (daltonismo, dislexia, etc.)
- Navegación por teclado
- ARIA labels en elementos interactivos

## 📄 Licencia

© 2026 BiblioPerú. Todos los derechos reservados.
