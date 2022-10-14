import {ref} from 'vue'

const notes = ref([
    {
        id:'id1',
        content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet rem officiis id assumenda dicta molestiae, a aut. Labore, incidunt consequuntur aliquam nisi temporibus consectetur, odit, et eligendi odio sapiente eius.'
    },
    {
        id:'id2',
        content:'this is a shorter note'
    }
])

export const useNote = ()=>{
 /* Note Handler */

 const note = ref('')

 const addNote = ()=>{
    let time = new Date().getTime(),
        id = time.toString()
    
    let newNote = {
        id,
        content: note.value
    }

    notes.value.unshift(newNote)
    note.value = ''
 }

 const deleteNote = (id)=>{
  notes.value = notes.value.filter((note) => note.id !== id)
 }

 return{
    notes, note, addNote, deleteNote
 }
}