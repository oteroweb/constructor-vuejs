<template>

<main>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/foundation-icons/3.0/foundation-icons.min.css">
  <draggable :options="{'handle':'.handlerow'}">
     <transition-group name="list-complete" >
      <row v-for="(job, index) in keys"  v-bind:key="keys" class="list-complete-item"></row>
   </transition-group>
   </draggable>
   <input type="button" @click="removeRow" value="Borrar fila"> 
</main>
</template>

<script>
import Row from './components/Row.vue'
import draggable from 'vuedraggable'
export default {
  name: 'app',
  data () {
    return {
      keys: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  components: { Row, draggable },
  mounted () {
  },
  methods: {
    removeRow: function () {
      // Remove job from GUI //
      console.log(this.keys)
      this.keys.pop()
    }
  }
}
</script>
<style lang="scss">
@import '/styles/global';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
