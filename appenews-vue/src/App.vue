
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld msg="Catalogos" />

  <div class="row" style="overflow: auto;">
    <div class="col-lg-12 offset-lg-2">
      <div class="table responsive">
        <table class="table table-bordered table-hover">
          <thead><tr><th>#</th><th>id</th><th>medio</th><th>fecha</th><th>marca</th><th>producto</th><th>version</th><th>programa</th><th>hora</th><th>vehiculo</th><th>anunciante</th><th>tema</th><th>id_categoryCopys</th><th>processing</th><th>file</th><th>medioPage</th><th>spots</th><th>src_link</th></tr></thead>
          <tbody class="table-group-divider" id="contenido">

          </tbody>

        </table>
      </div>
    </div>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

//se comenta poque no deja hacer la importacion de libreria para usarla

import axios from 'axios'
// Ejemplo de uso de Axios para hacer una solicitud GET
axios.get('http://localhost:8000/getAll')
   .then(response => {
  console.log("s")
    })
  .catch(error => {
     // Maneja el error aquí
   });


export default {
  data(){
    
    return{products:null}
  },


  name: 'App',
  components: {
    HelloWorld
  }

}
</script>
