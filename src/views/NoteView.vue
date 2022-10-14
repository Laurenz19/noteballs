<template>
    <div class="note">

       <NoteForm
        v-model="newNote"
        placeholder="Add new note"
       >
       <template #actions>
        <button
            :class="themeMode.isDark?'':'has-background-success'"
            @click="storeNotes.addNote(newNote)"
            :disabled="!newNote"
            class="button is-link"
        >
         Add new note            
        </button>
       </template>
       </NoteForm>

       <Note
          v-for="note in storeNotes.notes"
          :key="note.id"
          :note="note"
          @delete="storeNotes.deleteNote(note.id)"
        />
       
        
    </div>
</template>

<script setup>
/**
 * import
 */
 import {ref} from 'vue'
 import Note from '@/components/notes/Note.vue'
 import NoteForm from '@/components/notes/NoteForm.vue'
 import {useStoreNotes} from '@/stores/storeNotes.js'
 import {useThemeMode} from '@/stores/themeMode.js'

 /* Theme handler */
 const themeMode = useThemeMode()
 /* Note handler */
 const storeNotes =  useStoreNotes()
 const newNote = ref('')
 

</script>