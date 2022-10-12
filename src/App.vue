<template>
 <div
    :class="themeMode.isDark? 'has-background-grey-light':'has-background-success-light'"
    class="app"
  >
   <component
      :is="themeMode.isDark ? NavBarDark:NavBar"
    >
    </component>
    <div class="container is-max-desktop px-2 py-4">
      <input type="checkbox" v-model="themeMode.isDark">
      {{themeMode.isDark}}
      <router-view></router-view>
    </div>
  </div>
</template>


<script setup>
  /**
   * import
   */
   import NavBar from '@/components/layouts/NavBar.vue'
   import NavBarDark from '@/components/layouts/NavBardark.vue'
   import {useThemeMode} from '@/stores/themeMode.js'

   /* Theme Mode Handler */
   const themeMode = useThemeMode()
</script>

<style>
  @import 'bulma/css/bulma.min.css';
  
  .app{
    min-height: 760px;
  }
</style>