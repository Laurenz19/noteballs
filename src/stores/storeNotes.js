import { defineStore } from "pinia";
import {ref} from 'vue'

export const useStoreNotes = defineStore('storeNotes', ()=>{
 /* State */
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

 /* Actions */
 const addNote = (note)=>{
    let time = new Date().getTime(),
        id = time.toString()
    
    let newNote = {
        id,
        content: note
    }

    notes.value.unshift(newNote)
 }

 const deleteNote = (id)=>{
  notes.value = notes.value.filter((note) => note.id !== id)
 }

 const updateNote = (payload)=>{
    let id = ''
    notes.value.forEach((note, index)=>{
        if(note.id == payload.id){
            notes.value[index].content = payload.content
        }
    })
 }

 /* Getters */
 /**
  * it should be a computed property but I don't know How 
  * to pass parameter with it
  */
 const getNote = (id)=>{
    return notes.value.filter((note)=> note.id == id)[0].content
 }
 

 return{
    notes, addNote, deleteNote, getNote, updateNote
 }

})