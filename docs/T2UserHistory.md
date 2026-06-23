**Historias de Usuario**

**1) Historia de Usuario 01**

|**Código**|**HU-BIB-001**|
| :- | :- |
|**Nombre**|**Acceso para discapacidad visual**|
|**Owner**|**Dirección de Biblioteca / Área de inclusión**|
|**Prioridad**|**100**|
|**Esfuerzo**|**40**|
|**Proyecto**|**BiblioPerú**|
|**Sprint**|**1**|
|**Roles**|<p>**Cliente con discapacidad visual** </p><p></p>|
|**Descripción**|La interfaz del catálogo y la lectura de resultados deben estructurarse de manera semántica para ser interpretadas correctamente con las herramientas de asistencia.|
|**Criterios de aceptación**|<p>1. **CA-001:** La interfaz debe incluir un botón visible para activar el modo de alto contraste.</p><p>2. **CA-002:** El sistema debe ser navegable utilizando el teclado.</p>|
|**Tareas**|<p>I. **TR-VIS-001:** Diseñar paleta de colores y estilos específicos para el modo alto contraste.</p><p>II. **TR-VIS-002**: Implementar el botón “alto contraste” para activar/desactivar el modo.</p><p>III. **TR-VIS-003:** Agregar etiquetas y descripciones a todos los elementos interactivos del catálogo.</p><p>IV. **TR-VIS-004:** Realizar pruebas de usabilidad del flujo de búsqueda de libros.</p>|

|**Código**|**HU-BIB-002**|
| :- | :- |
|**Nombre**|**Acceso para discapacidad motora**|
|**Owner**|**Dirección de Biblioteca / Área de inclusión**|
|**Prioridad**|**95**|
|**Esfuerzo**|**32**|
|**Proyecto**|**BiblioPerú**|
|**Sprint**|**1**|
|**Roles**|<p>**Cliente con movilidad reducida en manos** </p><p></p>|
|**Descripción**|El diseño UI debe priorizar las áreas de click sean ampliadas y consolidar el flujo de préstamo para reducir la necesidad de múltiples clicks y desplazamientos.|
|**Criterios de aceptación**|<p>3. **CA-003:** Los botones de acciones principales deben tener un área de click ampliada.</p><p>4. **CA-004:** El proceso de préstamos o reserva de un libro no debe requerir más de 3 clicks o interacciones.</p>|
|**Tareas**|<p>I. **TR-MOT-001**: Rediseñar la interfaz de resultados de búsqueda para incorporar botones grandes.</p><p>II. **TR-MOT-002:** Simplificar y unificar el flujo de préstamo para que se procese en una sola pantalla.</p><p>III. **TR-MOT-003:** Configurar correctamente las etiquetas de los formularios para sugerir credenciales y datos guardados.</p>|

**2) Historia de Usuario 02**










**3) Historia de Usuario 03**

|**Código**|**HU-BIB-003**|
| :- | :- |
|**Nombre**|**Acceso para discapacidad cognitiva**|
|**Owner**|**Dirección de Biblioteca / Área de inclusión**|
|**Prioridad**|**90**|
|**Esfuerzo**|**40**|
|**Proyecto**|**BiblioPerú**|
|**Sprint**|**2**|
|**Roles**|**Cliente con dificultad cognitiva** |
|**Descripción**|Se deben implementar textos a nivel de lectura básico, alertas visuales para confirmaciones y una barra de progreso visible durante procesos como el préstamo de libros.|
|**Criterios de aceptación**|<p>5. **CA-005:** Las instrucciones del sistema y mensajes de error deben estar redactados en un lenguaje sencillo.</p><p>6. **CA-006:** Cada paso del proceso debe estar acompañado con un icono descriptivo e intuitivo.</p><p>7. **CA-007:** El sistema debe proporcionar confirmaciones visuales claras cuando un usuario realiza una acción con éxito.</p>|
|**Tareas**|<p>I. **TR-COG-001:** Revisar todos los textos de la plataforma y reescribirlos a nivel de lectura básico.</p><p>II. **TR-COG-002:** Seleccionar e integrar un paquete de iconos claros al lado de las acciones principales.</p><p>III. **TR-COG-003:** Implementar alertas emergentes con un diseño amigable para confirmaciones de éxito y mensajes de error.</p><p>IV. **TR-COG-004:** Crear una barra de progreso que le indique al usuario en que paso del préstamo se encuentra.</p>|









**4) Historia de Usuario 04**

|**Código**|**HU-BIB-004**|
| :- | :- |
|**Nombre**|**Acceso sin barreras económicas**|
|**Owner**|**Dirección de Biblioteca / Área de inclusión**|
|**Prioridad**|**100**|
|**Esfuerzo**|**32**|
|**Proyecto**|**BiblioPerú**|
|**Sprint**|**1**|
|**Roles**|<p>**Cliente sin recursos económicos o bajos** </p><p></p>|
|**Descripción**|El flujo de registro debe omitir cualquier campo obligatorio relacionado con pagos, asignando un rol de lector por defecto.|
|**Criterios de aceptación**|<p>8. **CA-008:** El formulario de creación de cuenta no debe contener ningún campo que solicite información de tarjetas de crédito o cuentas bancarias.</p><p>9. **CA-009:** El registro debe poder completarse únicamente con un número de DNI y datos básicos de contacto.</p><p>10. **CA-010:** El usuario registrado bajo ese perfil debe tener acceso integro al catálogo digital sin restricciones.</p>|
|**Tareas**|<p>I. **TR-ECO-001:** Modificar el esquema de la base de datos de usuarios para asegurar que los datos de pago no sean obligatorios.</p><p>II. **TR-ECO-002:** Eliminar el paso de pagos o verificación financiera del flujo de registro.</p><p>III. **TR-ECO-003:** Construir un formulario de registro simplificado de un solo paso.</p><p>IV. **TR-ECO-004:** Configurar los roles y permisos del sistema para que todas las cuentas nuevas obtengan el rol de lector con acceso gratuito por defecto.</p>|








**5) Historia de Usuario 05**

|**Código**|**HU-BIB-005**|
| :- | :- |
|**Nombre**|**Acceso multilingüe**|
|**Owner**|**Dirección de Biblioteca / Área de inclusión**|
|**Prioridad**|**90**|
|**Esfuerzo**|**44**|
|**Proyecto**|**BiblioPerú**|
|**Sprint**|**2**|
|**Roles**|<p>**Cliente que habla lengua originaria** </p><p></p>|
|**Descripción**|Se debe implementar un sistema para la gestión y traducción dinámica de los textos.|
|**Criterios de aceptación**|<p>11. **CA-011:** El sistema debe incluir un selector de idiomas fácilmente identificable.</p><p>12. **CA-012:** Todo el texto de la interfaz debe cambiar dinámicamente al seleccionar el lenguaje preferido.</p><p>13. **CA-013:** El idioma seleccionado debe guardarse para que no tenga que volver a elegirlo en su próxima sesión.</p>|
|**Tareas**|<p>I. **TR-MUL-001:** Implementar una librería o sistema de internalización para la gestión de idiomas en el proyecto.</p><p>II. **TR-MUL-002:** Crear el archivo de traducciones para pasar las cadenas de texto.</p><p>III. **TR-MUL-003:** Desarrollar el componente visual del menú para el selector de idiomas.</p><p>IV. **TR-MUL-004:** Programar la lógica para guardar la preferencia de idioma del usuario en el almacenamiento local o mediante cookies.</p>|









**Distribución de Sprints**

|**Código**|**SP-01 / SP-02**|
| :- | :- |
|**Nombre**|**Sistema de gestión - BiblioPerú**|
|**Owner**|**Product Owner**|
|**Prioridad**|**1 - 100**|
|**Esfuerzo**|**188**|
|**Historias de usuario**|**HU-BIB-001 HU-BIB-002 HU-BIB-003 HU-BIB-004 HU-BIB-005**|
|**Número de sprints**|**2**|

**Sprint 1**

|**Código**|**SP-01**|
| :- | :- |
|**Nombre**|**Accesibilidad Física y Acceso base**|
|**Esfuerzo total**|**104**|
|**Historias de Usuario relacionadas**|<p>- **HU-BIB-001**</p><p>- **HU-BIB-002**</p><p>- **HU-BIB-004**</p>|

**Sprint 2**

|**Código**|**SP-02**|
| :- | :- |
|**Nombre**|**Accesibilidad Cognitiva y Cultural**|
|**Esfuerzo total**|**84**|
|**Historias de Usuario relacionadas**|<p>- **HU-BIB-003**</p><p>- **HU-BIB-005**</p>|





**Tareas Sprint 1**

|<a name="_hlk232432016"></a>**Código TR**|**Codigo HU**|**Descripción**|**Prioridad**|**Esfuerzo**|
| :- | :- | :- | :-: | :-: |
|TR-ECO-001|**HU-BIB-004**|Modificar el esquema de la base de datos para que los datos de pago no sean obligatorios.|**Alta**|**8**|
|TR-ECO-002|**HU-BIB-004**|Eliminar el paso de pagos o verificación financiera del flujo de registro.|**Alta**|**8**|
|TR-ECO-003|**HU-BIB-004**|Construir un formulario de registro simplificado de un solo paso.|**Media**|**8**|
|TR-ECO-004|**HU-BIB-004**|Configurar los roles y permisos del sistema para que todas las cuentas nuevas obtengan el rol de lector con acceso gratuito por defecto.|**Alta**|**8**|
|TR-VIS-001|**HU-BIB-001**|Diseñar paleta de colores y programar el botón de alto contraste.|**Alta**|**8**|
|TR-VIS-002|**HU-BIB-001**|Implementar el botón “alto contraste” para activar/desactivar el modo.|**Media**|**16**|
|TR-VIS-003|**HU-BIB-001**|Agregar etiquetas y descripciones a todos los elementos interactivos del catálogo.|**Media**|**8**|
|TR-VIS-004|**HU-BIB-001**|Realizar pruebas de usabilidad del flujo de búsqueda de libros.|**Media**|**8**|
|TR-MOT-001|**HU-BIB-002**|Rediseñar la interfaz de resultados de búsqueda para incorporar botones grandes.|**Media**|**8**|
|TR-MOT-002|**HU-BIB-002**|Simplificar y unificar el flujo de préstamo para que se procese en una sola pantalla.|**Alta**|**16**|
|TR-MOT-003|**HU-BIB-002**|Configurar correctamente las etiquetas de los formularios para sugerir credenciales y datos guardados.|**Media**|**8**|










**Tareas Sprint 2**

|**Código TR**|**Codigo HU**|**Descripción**|**Prioridad**|**Esfuerzo**|
| :- | :- | :- | :-: | :-: |
|TR-COG-001|**HU-BIB-003**|Revisar todos los textos de la plataforma y reescribirlos a nivel de lectura básico.|**Media**|**8**|
|TR-COG-002|**HU-BIB-003**|Seleccionar e integrar un paquete de iconos claros al lado de las acciones principales.|**Media**|**8**|
|TR-COG-003|**HU-BIB-003**|Implementar alertas emergentes con un diseño amigable para confirmaciones de éxito y mensajes de error.|**Media**|**12**|
|TR-COG-004|**HU-BIB-003**|Crear una barra de progreso que le indique al usuario en que paso del préstamo se encuentra.|**Alta**|**12**|
|TR-MUL-001|**HU-BIB-005**|Implementar una librería o sistema de internalización para la gestión de idiomas en el proyecto.|**Alta**|**16**|
|TR-MUL-002|**HU-BIB-005**|Crear el archivo de traducciones para pasar las cadenas de texto.|**Alta**|**12**|
|TR-MUL-003|**HU-BIB-005**|Desarrollar el componente visual del menú para el selector de idiomas.|**Media**|**8**|
|TR-MUL-004|**HU-BIB-005**|Programar la lógica para guardar la preferencia de idioma del usuario en el almacenamiento local o mediante cookies.|**Media**|**8**|













![](Aspose.Words.e3eeb858-5cc4-4572-970a-81c6f270cc15.001.png)**Wireframes**

![](Aspose.Words.e3eeb858-5cc4-4572-970a-81c6f270cc15.002.png)




![](Aspose.Words.e3eeb858-5cc4-4572-970a-81c6f270cc15.003.png)

![](Aspose.Words.e3eeb858-5cc4-4572-970a-81c6f270cc15.004.png)











![](Aspose.Words.e3eeb858-5cc4-4572-970a-81c6f270cc15.005.png)

**Tablero Scrum Sprint 01**

![](Aspose.Words.e3eeb858-5cc4-4572-970a-81c6f270cc15.006.jpeg)**Martes**












![](Aspose.Words.e3eeb858-5cc4-4572-970a-81c6f270cc15.007.jpeg)**Miércoles**









![](Aspose.Words.e3eeb858-5cc4-4572-970a-81c6f270cc15.008.jpeg)**Jueves**









![](Aspose.Words.e3eeb858-5cc4-4572-970a-81c6f270cc15.009.jpeg)**Viernes**

