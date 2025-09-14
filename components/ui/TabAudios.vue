<template>
    <v-container class="pa-0 ma-0 d-flex flex-column ga-4">

        <v-sheet class="pa-2 pa-sm-4 pt-1 rounded d-flex flex-wrap justify-space-between"
        v-for="a in audios"
        :key="a.id">
            <UiText :text="a.title"/>
            <UiText :text="a.date"/>
            <audio class="w-100" :src="a.src" controls></audio>
        </v-sheet>

    </v-container>
</template>

<script setup>
// setup, damit kein extra export der daten notwendig
    import audios from "@/data/audios.json"



</script>