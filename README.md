# FrontEnd con vue 

## Instrucciones ⚙️

1. Instalar vue
   
```python
npm install vue
```

2. Instalar CLI de vue

```python
npm install -g @vue/cli
```

3. Instalar axios

```python
npm install axios
```

4. Levantar servidor vue

```python
npm run serve
```

## Iniciar proyecto 🚀

1. Entrar a carpeta de proyecto

```python
 cd appenews-vue
```
2. Correr servidor
   
```python
npm run serve
```

![image](https://github.com/AliciaGaona/appEnewsFront/assets/99162884/7ae8cced-5106-4151-98e5-0ff75c416213)



## BackEnd 🚀

[proyecto BackEnd](https://github.com/AliciaGaona/appEnews)

 ## Tecnologias 🚀
 
 Vue.js

 ## Bibiotecas/librerias 🔧

 - bootstrap
 - axios

 ## Referencias 🔧

 [axios](https://axios-http.com/docs/intro)


 ## En proceso, bugs 🛠️🔎

La importasción de axios no funcionaba por lo que se cambio de front

```python
import axios from 'axios'
// Ejemplo de uso de Axios para hacer una solicitud GET
axios.get('http://localhost:8000/getAll')
   .then(response => {
  console.log("s")
    })
  .catch(error => {
     // Maneja el error aquí
   });

```

Solución: pausar el servidor, cerrar todo y volverlo a abrir, de esta forma te aseguras que funcionará lo que instales.

Estatus, resuelto, funcionó lo del servidor, ya consume API 


 ## Comentarios

 Comencé realizando la prueba utilizando vue, pero me pase a terminar/realizar el frontEnd en react cuando tuve el error de la biblioteca axios, por los tiempos y para alcanzar a tener lista la prueba en tiempo y forma, después se pudo solucionar lo de la biblioteca axios, pero ya no me dio tiempo de realizar funcionalidad de filtrado aqui.

 Funcionalidad de filtrado de tabla que se llena con datos que consume de API en [Solucion con react](https://github.com/AliciaGaona/appEnewsFrontwithReact)

