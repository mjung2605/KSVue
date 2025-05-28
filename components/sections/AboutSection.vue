<template>
    <v-container class="h-screen" style="background-color: rgb(var(--v-theme-background));">
        
        <h2  class="pa-2 pt-sm-16 pb-sm-8 ma-2">Sie haben die Geschichte und ich die passende Stimme.</h2>
    
        <p class="pa-2 ma-2">Mich fasziniert es, immer wieder in neue Rollen zu schlüpfen, actiongeladene Szenen zu vertonen, oder in unentdeckte Welten einzutauchen. Gerne spreche ich aber auch ruhig, neutral und sachlich.</p>
    
        <p class="pa-2 ma-2">Ob Hörbuch, Hörspiel, Werbung, Synchron, Sachtext, oder Voice-Over für TV und Radio - als ausgebildete Sprecherin lasse ich ihre Vision zum Leben erwecken.</p>
    
        <p class="pa-2 ma-2">Machen Sie sich hier einen ersten Eindruck von mir!</p>

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
    </v-container>
</template>

<script setup>
    import cv from "@/data/cv.json";
</script>