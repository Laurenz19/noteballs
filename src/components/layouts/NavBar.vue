<template>
<nav
  class="navbar is-success"
  aria-label="main navigation"
  role="navigation"
>
    <div class="container is-max-desktop px-2">
        <div class="navbar-brand">
           <div
              class="navbar-item is-size-5 is-family-monospace"
            >
                Noteballs
            </div>
            <a
              class="navbar-burger"
              :class="showMobileNav ? 'is-active':''"
              @click="mobileNavHandler"
              aria-expanded="false"
              aria-label="menu"
              data-target="navbarBasicExample"
              role="button"
              ref="navbarBurgerRef"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div
          :class="showMobileNav ? 'is-active':''"
          id="navbarBasicExample"
          class="navbar-menu"
        >
            <div class="navbar-end" ref="menuRef">
                <RouterLink
                @click="showMobileNav = false"
                class="navbar-item"
                to="/"
                active-class="is-active"
                >
                Notes
                </RouterLink>
                <RouterLink
                @click="showMobileNav = false"
                class="navbar-item"
                to="/stats"
                active-class="is-active"
                >
                Stats
                </RouterLink>
            </div>
        </div>
    </div>
</nav>
</template>

<script setup>
/**
 * import
 */
 import {ref} from 'vue'
 import {onClickOutside} from '@vueuse/core'

 /* Mobile Nav */
 const showMobileNav = ref(false)
 const menuRef = ref(null)
 const navbarBurgerRef = ref(null)
 const mobileNavHandler = ()=>{
    showMobileNav.value = !showMobileNav.value
 }

 onClickOutside((menuRef), (event)=>{
    showMobileNav.value = false
 },
 {
    ignore: [navbarBurgerRef]
 })

</script>

<style>
@media (max-width:1023px) {
    .navbar-menu{
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>