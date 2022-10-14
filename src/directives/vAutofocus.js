export const vAutofocus = {
    mounted(el) {
        el.focus()
    },
    updated(el) {
        if(el.value == '') el.focus()
    },
}