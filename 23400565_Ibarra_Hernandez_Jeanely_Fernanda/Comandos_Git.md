## Investigacion de Comandos de Git

### 1. git init
Crea un nuevo repositorio Git dentro de una carpeta. Al ejecutarlo, Git genera un directorio oculto llamado .git, donde almacenará toda la información relacionada con el control de versiones, como el historial de cambios, ramas, configuraciones y referencias a commits.

#### Caso de uso
Un desarrollador comienza un nuevo proyecto de aplicación web y desea registrar todos los cambios realizados desde el inicio para poder recuperar versiones anteriores

### 2. git add
Agrega archivos o cambios al área de preparación (staging area). Esta área funciona como una zona intermedia donde se seleccionan los cambios específicos que formarán parte del próximo commit.

#### Caso de uso
Un desarrollador desea incluir los cambios realizados unicamente en un módulo en específico y dejar otros cambios para más tarde.

### 3. git status
Muestra información detallada sobre el estado actual del repositorio. Permite conocer qué archivos han sido modificados, cuáles están preparados para el próximo commit, cuáles no están siendo rastreados por Git y si existen diferencias entre la copia local y el repositorio remoto.

#### Caso de uso
Se desea verificar qué archivos se han modificado y confirmar que todos los cambios necesarios están preparados correctamente.

### 4. git diff
Permite visualizar las diferencias entre versiones de archivos. Muestra exactamente qué líneas fueron agregadas, eliminadas o modificadas.

#### Caso de uso
Hubo un cambio que hizo que el código ya no funcione y se desea ver especificamente en que linea es.

### 5. git difftool
Cumple una función similar a git diff, pero utiliza herramientas externas de comparación visual como Meld, Beyond Compare o Visual Studio Code. Estas herramientas suelen presentar los cambios de forma gráfica, facilitando la identificación de diferencias en proyectos grandes o archivos extensos.

#### Caso de uso
Se desea ver de manera gráfica los cambios efectuados para poder comprenderlos mejor.

### 6. git commit
Guarda permanentemente en el historial todos los cambios que se encuentran en el área de preparación. Cada commit representa una versión específica del proyecto en un momento determinado. Además de almacenar los cambios, cada commit contiene información como el autor, la fecha y un mensaje descriptivo que explica qué se modificó.

#### Caso de uso
Se desea registrar el avance de un proyecto para poder recuperar hasta ese punto si es necesario.

### 7. git reset
Permite deshacer acciones relacionadas con el área de preparación o mover el puntero HEAD hacia commits anteriores. Dependiendo de las opciones utilizadas, puede eliminar cambios del staging, deshacer commits recientes o incluso restaurar el estado completo del proyecto a una versión anterior.

#### Caso de uso
Hubieron demasiados cambios y se necesita saber que lineas son las que estan causando conflictos.

### 8. git rm
Elimina archivos tanto del sistema de archivos como del seguimiento de Git. La eliminación queda registrada para el próximo commit. Esto permite que Git comprenda que el archivo fue eliminado intencionalmente y registre ese cambio en el historial.

#### Caso de uso
Un archivo se dejó de utilizar y ya no es necesario, por lo que debe eliminarse del proyecto.

### 9. git mv
Sirve para mover o renombrar archivos dentro de un repositorio. Aunque Git puede detectar algunos cambios de nombre automáticamente, este comando registra explícitamente la operación. Ayuda a mantener un historial más claro y facilita la comprensión de la evolución de la estructura del proyecto.

#### Caso de uso
Hubo un error de dedo en el nombre del archivo y nos dimos cuenta hasta después de hacer varios movimientos.

### 10. git clean
Elimina archivos que no están siendo rastreados por Git. Es útil para limpiar directorios de trabajo llenos de archivos temporales, compilaciones o resultados de pruebas. A diferencia de git reset, este comando actúa sobre archivos que Git ni siquiera está siguiendo.

#### Caso de uso
Despues de hacer varias pruebas se crearon archivos temporales que ya no son necesarios y se necesita limpiar para optimizar el proyecto.

### 11. git branch
Permite crear, listar y eliminar ramas dentro de un repositorio. Las ramas permiten desarrollar funcionalidades, corregir errores o experimentar sin afectar el código principal. Cada rama representa una línea independiente de desarrollo.

#### Caso de uso
Un equipo comienza a trabajar en una nueva funcionalidad importante y decide aislarla en una rama separada para evitar afectar la versión estable.

### 12. git checkout
Se utiliza para cambiar entre ramas o restaurar versiones específicas de archivos. Cuando se cambia de rama, Git actualiza automáticamente el directorio de trabajo para reflejar el estado correspondiente a la rama seleccionada.

#### Caso de uso
Un desarrollador está trabajando en una nueva característica pero necesita regresar temporalmente a la rama principal para corregir un error.

### 13. git merge
Combina el historial y los cambios de una rama con otra. Es el mecanismo principal para integrar nuevas funcionalidades al proyecto principal. Cuando existen modificaciones incompatibles en las mismas líneas de código, Git genera conflictos que deben resolverse manualmente.

#### Caso de uso
Después de terminar una nueva funcionalidad en una rama separada, el equipo decide incorporarla a la versión principal del sistema.

### 14. git log
Muestra el historial completo de commits realizados en el repositorio. Incluye información como identificadores únicos, autores, fechas y mensajes descriptivos. Permite analizar la evolución del proyecto y rastrear cuándo se introdujeron cambios específicos.

#### Caso de uso
El desarrollador necesita identificar quién realizó una determinada modificación.

### 15. git stash

### 16. git tag

### 17. git fetch

### 18. git pull

### 19. git push

### 20. git bisect
