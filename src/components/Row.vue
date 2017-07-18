<template>
     <div class="row grid-x grid-margin-x">
         <i class="handlerow fi-arrows-out"></i>
          <draggable :options="{'handle':'.handlecolum'}">
                <transition-group name="list-complete">
                    <div :key="1" style="align-text:center"> {{this.random}} </div>
                 </transition-group>
            </draggable>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
import Column from './Column.vue'
export default {
  name: 'row',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    draggable,
    Column
  },
  computed: {
    random: function () {
      // Remove job from GUI
      return Math.random(50).toString()
    }
  }
}
</script>
<style>
.row{
    background: lightblue;
    min-height: 10vh;
    border: 2px dashed black;
    border-radius: 40px;
    text-align: center;
    align-content: center;
}
.handlerow {
    display: none;
}
.handlerow{ 
display: none;
}
.row:hover .handlerow{
/*display : block;*/
    display: flex;
    position: relative;
    left: 21px;
}
.row:hover + .hover {
    
}
.list-complete-item {
  padding: 4px;
  margin-top: 4px;
  transition: all 1s;
}

.list-complete-enter, .list-complete-leave-active {
  opacity: 0;
}
</style>
