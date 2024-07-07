---
title: "Deploy un viernes: la importancia de automatizar"
excerpt: "Una historia sobre cómo un error en el deploy llevó a una lección importante sobre la automatización y la atención al detalle."
coverImage: "https://storage.googleapis.com/afterbootcamp/fidaydalle.webp"
date: "2020-01-17T05:35:07.322Z"
author:
  name: "Sergio Hackstler"
  picture: "https://storage.googleapis.com/afterbootcamp/WhatsApp%20Image%202024-06-30%20at%2023.28.13.jpeg"
ogImage:
  url: "https://www.linkedin.com/in/sergio-hackstler/"
---

# Deploy un viernes: la importancia de automatizar

Un **viernes** habíamos quedado todo el equipo de la empresa donde trabajaba para comer y después tomar unas cervezas. Yo, además de trabajar como desarrollador web, estaba haciendo un bootcamp full stack DevOps, por lo que iba **a mil**.

Había mecanizado internamente, en mis prácticas y ejercicios del bootcamp, a meter un `-y` o darle a `Yes` cada vez que la terminal preguntaba si quería realizar alguna acción o aceptar alguna condición.

¿Por qué cuento esto? Para dar contexto de por qué el viernes mi **tech lead** y yo llegamos dos horas tarde a comer.

Resulta que teníamos **tres cloud functions** que formaban parte del embudo de ventas de la empresa y desde el CLI de Firebase, si querías subir un cambio, antes de subirlo, si no especificabas el nombre de la cloud function, te preguntaba si querías **borrar todas las cloud functions** de tu proyecto. ¿Qué pasó? **¡NO LEÍ!** Tenía tan automatizado el aceptar sin mirar por la prisa de avanzar en mi bootcamp que cuando escribí "yes" y le di a enter, dije **“no puede ser, la que acabo de liar”**.

Obviamente, lo primero que hice fue decirle a mi tech lead: **“Oye, acabo de liarla mazo, me he cargado el core de las ventas”**.

Además, mi novia de aquel entonces me estaba esperando a la salida del coworking porque se había desmayado en el trabajo y había venido a verme porque yo se lo había pedido para ver qué le había pasado.

Total, con la **presión y la ansiedad** por las nubes, tuve que decirle que no podía salir en ese momento y que ya la llamaría más tarde. Estuvimos intentando solucionar el problema.

Al final, no pasó nada relevante, se almacenaron las peticiones de ventas y al **redesplegar** se lanzaron todas correctamente.

### Moraleja

Este incidente me enseñó la importancia de **no automatizar respuestas sin pensar** y siempre **revisar los comandos** que ejecutamos, especialmente en producción. Por otra parte, la **automatización en tecnología** es clave para la eficiencia; si el proceso de subida hubiese estado automatizado, nos habríamos ahorrado un buen susto. Los procesos manuales dependen de un humano, con muchas variables, y pueden llevar a situaciones críticas. Siempre hay que mantener un **equilibrio entre la rapidez y la precisión** en nuestras acciones diarias.
