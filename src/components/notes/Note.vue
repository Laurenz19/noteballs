<template>
    <div class="card mb-3">
            <div class="card-content">
                <div class="content">
                 {{note.content}}
                 <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{characterLength}}</small>
                 </div>
                </div>
            </div>
            <footer class="card-footer">
                <RouterLink
                  :to="`/editNote/${note.id}`"
                  class="card-footer-item"
                  href="#"
                >
                    Edit
                </RouterLink>
                <a href="#" @click="$emit('delete')" class="card-footer-item">Delete</a>
            </footer>
        </div>
</template>

<script setup>
/**
 * import
 */
 import {computed} from 'vue'

 /**
  * Props
  */
 const props = defineProps({
    note:{
        type: Object,
        required: true
    }
 })

 /**
  * Emits
  */
 const emit = defineEmits(['delete'])

 /* About the note */
 const characterLength = computed(()=>{
    let description = props.note.content.length > 1 ? 'characters': 'character'
    return `${props.note.content.length} ${description}`
 }) 
</script>