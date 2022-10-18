<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Stat</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{storeNotes.totalNotes}}</td>
                </tr>
                <tr>
                    <td>Number of Characters</td>
                    <td>{{storeNotes.totalCharacters}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
/**
 * import 
 */
 import {useStoreNotes} from '@/stores/storeNotes'

 const storeNotes = useStoreNotes()
</script>