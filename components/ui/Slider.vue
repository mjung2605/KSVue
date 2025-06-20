<template>
    <v-slide-group class="pa-4 mt-sm-16 pt-sm-8" show-arrows>
        <v-slide-group-item
            v-for="i in cv"
            :key="i.id">

            <v-col>
                <h3 class="text-center pa-4">{{ i.year }}</h3>
                <p class="text-center pa-4">{{ i.title }}</p>
                <p class="text-center pa-4">{{ i.place }}</p>
            </v-col>
        </v-slide-group-item>
    </v-slide-group>
</template>


<script setup>
// script setup ist automatisch im template sichtbar, man braucht kein export default data oder so
    import cv from "@/data/cv.json";
</script>