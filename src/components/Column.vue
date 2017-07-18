<template>
  <div id="column" class="column auto cell">Whatever's left!</div>
</template>
<script>
import draggable from 'vuedraggable'

export default {
  name: 'row',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    draggable
  },
  methods: {
    removeJob: function (machineId, jobNumber, jobs, index) {
      // Remove job from GUI
      jobs.splice(index, 1)
    }
  }
}
</script>
<style>
 .column{
       justify-content: center;
    align-items: center;
    display: flex;
    height: 10vh;
 }
</style>
