<template>
    <div  
          :class="!themeMode.isDark?'has-background-success-dark':'has-background-grey-dark'"
          class="card mb-3 px-4 py-3"
        >
            <label class="label has-text-white">
             {{title}}
            </label>
            <div class="field">
                <div class="control">
                   <textarea
                      v-model="modelValue"
                      @input="$emit('update:modelValue', modelValue)"
                      class="textarea"
                      :placeholder="placeholder"
                      v-autofocus
                    />
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <slot name="actions"/>
                </div>
            </div>
        </div>
</template>

<script setup>
/**
 * import
 */
 import {useThemeMode} from '@/stores/themeMode.js'
 import {vAutofocus} from '@/directives/vAutofocus.js'
 
/**
 * props
 */
 const props = defineProps({
    modelValue:{
        type: String,
        required: true
    },
    placeholder:{
        type: String,
        default:'noteballs form'
    },
    title:{
        type: String,
    }
 })

/**
 * events
 */
 const emit = defineEmits(['update:modelValue'])
 
 /* Theme Mode Handler */
 const themeMode = useThemeMode()
 
</script>