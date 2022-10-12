import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useThemeMode = defineStore('darkMode', ()=>{
    /* State */
    const isDark = ref(false)
    
    /* Function */
    const changeTheme = ()=>{
        isDark.value = !isDark.value
    }
    /* Getter */

    return{
        isDark, 
        changeTheme
    }
})