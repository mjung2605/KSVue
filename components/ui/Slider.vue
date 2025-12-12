<template>
   
    <v-slide-group class="pa-4 mt-sm-16 pt-sm-8 spacer" show-arrows>

        <v-slide-group-item 
            v-for="i in cv"
            :key="i.id">

            <v-col class="ma-4 rounded-pill" style="background-color: white;">
                <h3 class="text-center pa-4 pt-8">{{ i.year }}</h3>
                <p class="text-center pa-4">{{ i.title }}</p>
                <p class="text-center pb-8">{{ i.place }}</p>
            </v-col>
        </v-slide-group-item>
    </v-slide-group>
</template>


<script setup>
// script setup ist automatisch im template sichtbar, man braucht kein export default data oder so
    import cv from "@/data/cv.json";
</script>

<style scoped>

    @media (min-width: 1200px) {
        .spacer {
            background-image: url("/public/wave-haikei-2.svg");

            background-position: center;
        }  
    }

</style>
