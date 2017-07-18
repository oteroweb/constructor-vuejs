<template>
  <div class="hello">
    <div class="grid-x">
      <div class="auto cell"><button type="button" class="success button"><i class="fi-arrows-out large"></i>  guardar</button></div>
      <div class="auto cell"><button type="button" class="success button">gardar</button></div>
      <div class="auto cell"><button type="button" class="success button">Save</button></div>
      <div class="auto cell">
        <button type="button" class="success button">Save</button></div>
    </div>
       <draggable  @start="drag=true" @end="drag=false"  :options="{handle:'.handle'}">
   <div> <span class="handle"> agarrar </span>  hola7</div>
</draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    draggable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
@import "./styles/global.scss";
@import '../styles/global';
-->
<style lang="sass">  
@import '../styles/global';

body 
   background: lightblue;

// Chrome Reset 
  a:focus {
    outline: none;
  }

  .logo, .logo a {
    color: $white;
    font-weight: normal;
  }

  li a.menu-button {
    border-radius: 20px;
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
    font-weight: 600;
    text-transform: uppercase;
    display: inline-block;
    float: right;
  }

  .content-wrapper {
    padding: 0.75rem 0;
  }

  .sidebar-menu {
    @include menu-base();
    @include menu-direction(vertical);
    a {
      color: $secondary-color;
      font-weight: normal;
    }
    a.active {
      font-weight: 600;
      color: $primary-color;
    }
  }
</style>
