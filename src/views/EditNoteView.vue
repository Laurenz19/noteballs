<template>
    <div class="edit-note">
        <NoteForm
            v-model="noteToEdited"
            title="Edit note"
            placeholder="Edit note"
       >
       <template #actions>
        <button
            @click="$router.back()"
            :class="themeMode.isDark?'is-dark':'is-success'"
            class="button is-light mx-2"
        >
         Cancel         
        </button>
        <button
            :class="themeMode.isDark?'':'has-background-success'"
            @click="handleSaveClicked"
            :disabled="!noteToEdited"
            class="button is-link"
        >
         Save note     
        </button>
       </template>
       </NoteForm>
    </div>
</template>
<script setup>
/**
 * import
 */
 import {ref} from 'vue'
 import {useRoute, useRouter} from 'vue-router'
 import NoteForm from '@/components/notes/NoteForm.vue'
 import {useStoreNotes} from '@/stores/storeNotes.js'
 import {useThemeMode} from '@/stores/themeMode.js'

/**
 * Route
 */
 const route = useRoute()
 const router = useRouter()

 /* Theme handler */
 const themeMode = useThemeMode()
 
/**
 * Note
 */
 const storeNotes = useStoreNotes()
 const noteToEdited = ref('')
 noteToEdited.value = storeNotes.getNote(route.params.id)
 
 const handleSaveClicked = ()=>{
    let payload = {
        id: route.params.id,
        content: noteToEdited.value
    }
    storeNotes.updateNote(payload)
    router.back()
 }





 
</script>