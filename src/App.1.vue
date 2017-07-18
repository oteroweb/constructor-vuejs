<template>
  <div id="app">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/foundation-icons/3.0/foundation-icons.min.css">

    <div id="MU" data-toggler data-animate="fade-in fade-out" class="callout secondary">
  <p>This panel fades.</p>
</div>

<div id="orbit" class="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
        <ul class="orbit-container">
          <button class="orbit-previous"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
          <button class="orbit-next"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
          <li class="is-active orbit-slide">
            <img class="orbit-image" src="./assets/img/orbit/01.jpg" alt="Space">
            <figcaption class="orbit-caption">Space, the final frontier.</figcaption>
          </li>
          <li class="orbit-slide">
            <img class="orbit-image" src="./assets/img/orbit/02.jpg" alt="Space">
            <figcaption class="orbit-caption">Lets Rocket!</figcaption>
          </li>
          <li class="orbit-slide">
            <img class="orbit-image" src="./assets/img/orbit/03.jpg" alt="Space">
            <figcaption class="orbit-caption">Encapsulating</figcaption>
          </li>
          <li class="orbit-slide">
            <img class="orbit-image" src="./assets/img/orbit/04.jpg" alt="Space">
            <figcaption class="orbit-caption">Outta This World</figcaption>
          </li>
        </ul>
        <nav class="orbit-bullets">
          <button class="is-active" data-slide="0"><span class="show-for-sr">First slide details.</span><span class="show-for-sr">Current Slide</span></button>
          <button data-slide="1"><span class="show-for-sr">Second slide details.</span></button>
          <button data-slide="2"><span class="show-for-sr">Third slide details.</span></button>
          <button data-slide="3"><span class="show-for-sr">Fourth slide details.</span></button>
        </nav>
      </div>
      The <span data-tooltip aria-haspopup="true" class="has-tip" tabindex="1" title="Fancy word for a beetle.">scarabaeus</span> hung quite clear of any branches, and, if allowed to fall, would have fallen at our feet. Legrand immediately took the scythe, and cleared with it a circular space, three or four yards in diameter, just beneath the insect, and, having accomplished this, ordered Jupiter to let go the string and come down from the tree.

    <div class="off-canvas position-right" id="offCanvas" data-off-canvas>
      <ul class="sidebar-menu" data-close="offCanvas">
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/reveal" exact>Reveal</router-link></li>
        <li><router-link to="/slider" exact>Slider</router-link></li>
        <li><router-link to="/tooltip" exact>Tooltip</router-link></li>
        <li><router-link to="/dropdown-menu" exact>Dropdown Menu</router-link></li>
        <li><router-link to="/drilldown-menu" exact>Drilldown Menu</router-link></li>
        <li><router-link to="/accordion-menu" exact>Accordion Menu</router-link></li>
        <li><router-link to="/magellan" exact>Magellan</router-link></li>
        <li><router-link to="/accordion" exact>Accordion</router-link></li>
        <li><router-link to="/dropdown" exact>Dropdown</router-link></li>
        <li><router-link to="/tabs" exact>Tabs</router-link></li>
        <li><router-link to="/orbit" exact>Orbit</router-link></li>
      </ul>          
    </div>
    <div class="off-canvas-content" data-off-canvas-content>
      <div class="top-bar">
        
          <ul class="menu expanded">
            <li class="logo">
              <router-link to="/">Vue-Foundation</router-link>
            </li>
            <li><a class="button small menu-button" data-toggle="offCanvas">Menu</a></li>
          </ul>
        
      </div>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    this.offCanvas = new Foundation.OffCanvas($('#offCanvas'))
    this.tooltip = $('.has-tip').foundation()
    this.orbit = new Foundation.Orbit($('#orbit'), {
      // These options can be declarative using the data attributes
      timerDelay: 2000
    })
  }
}
</script>
<style>
@import '/styles/global';
@import '/styles/icons';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
