**1.- ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?**

La planeación del sprint de donde nace el backlog.

Revisión del sprint donde se revisa el avance final de lo que se hizo y lo que falta por hacer.

**2.- ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.**

Los wifremes son como el esqueleto de una página web. No se enfocan tanto en los estilos, más se enfoca en esquematizar todos los elementos que se añadirán. 
Los programas que podemos utilizar son Axure y Figma.

**3.- Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.**

const se usa para declarar variables constantes que no cambiarán su valor, generalmente encontramos su uso en la decalración de arrays, objetos del dom, etc.

let se usa para declarar variables que sí pueden cambiar su valor y además su alcance está limitado al bloque en el cuál se encuentre.
Su uso se encuentra en el uso de strings, variable de tipo number, booleanos, etc.

var es similar a let pero se declara de manera global, además que permite hoisting. 
Se puede ver un posible uso al momento de usar una misma variable en dos archivos js difrentes pero incrustados en el mismo HTML.

**4.- ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?**
```
git checkout -b rama-1
git branch rama-1
----
```

**5.- Explicar la diferencia entre git merge y git rebase.**

el git merge crea un commit con los cambios que tenga la rama y lo integra a la rama principal. Y el git rebase unifica las ramas sin necesidad de hacer un commit

**6.- ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?**

El pull request es una solicitud que hace por ejemplo el dueño de un fork para que sus cambios sean realizados también en el repositorio original.
El comando git pull trae todos los commits de la rama remote

**7.- ¿Qué es el Virtual DOM?**

El virtual DOM es una copia del DOM original. Su utilidad radica que el virtual DOM es capaz de reconocer que parte del DOM  ha cambiado y de este manera solo actualizar 
esa parte del DOM sin la necesidad de actualizar todo el DOM por completo lo que podría implicar perdida de rendimiento.

**8.- Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).**

