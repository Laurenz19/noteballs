<template>
    <div class="note">
        <div
          :class="!themeMode.isDark?'has-background-success-dark':'has-background-grey-dark'"
          class="card mb-3 px-4 py-3"
        >
            <div class="field">
                <div class="control">
                    <textarea class="textarea" placeholder="Add new note"/>
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button class="button is-link"
                    :class="themeMode.isDark?'':'has-background-success'"
                    
                    >Add new note</button>
                </div>
            </div>
        </div>
        <div
          v-for="i in 3"
          :key="i"
          class="card mb-3"
        >
            <div class="card-content">
                <div class="content">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aut optio ducimus ipsam dolorem suscipit saepe quo illum sequi, enim dignissimos est, voluptate accusamus quia harum pariatur esse! Consequuntur, non?
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
        </div>
    </div>
</template>

<script setup>
/**
 * import
 */
 import {useThemeMode} from '@/stores/themeMode.js'

 /* Theme Mode Handler */
 const themeMode = useThemeMode()

</script>