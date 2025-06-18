<template>
    <v-slide-group class="pa-2 ma-2 mt-sm-16 pt-sm-8" show-arrows>
        <v-slide-group-item
            v-for="i in cv"
            :key="i.id">

            <v-col class="ga-4">
                <h3 class="text-center pa-2 ma-2">{{ i.year }}</h3>
                <p class="text-center pa-2 ma-2">{{ i.title }}</p>
                <p class="text-center pa-2 ma-2">{{ i.place }}</p>
            </v-col>
        </v-slide-group-item>
    </v-slide-group>
</template>

<script setup>
    import cv from "@/data/cv.json";
</script>