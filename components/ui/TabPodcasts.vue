<template>
    <v-sheet class="pa-8 d-flex flex-row justify-space-evenly align-center">
        <v-btn variant="text" @click="prev" icon="mdi-chevron-left" rounded></v-btn>

        <v-window class="d-flex align-center justify-center" v-model="currentTab">
            <!-- v-for="(v, i) ist JS Syntax in For-Schleifen: die erste Variable repräsentiert dann den Wert, die zweite den Index, den wir für den active tab brauchen" -->
            <v-window-item
            
            v-for="(p, i) in podcasts"
            :key="p.id"
            :value="i">
                <iframe style="border: none" height="420px" width="500px" :src="p.src" ></iframe>
            </v-window-item>
        </v-window>
 
        <v-btn variant="text" @click="next" icon="mdi-chevron-right" rounded></v-btn>
    </v-sheet>

</template>


<script setup>

    import podcasts from "@/data/podcasts.json"

    const currentTab = ref(0);

    function prev() {
        if(currentTab.value > 0) currentTab.value--;
        else if(currentTab.value === 0) currentTab.value = podcasts.length - 1;
    }

    function next() {
        if(currentTab.value < podcasts.length - 1) currentTab.value++;
        else if(currentTab.value === podcasts.length - 1) currentTab.value=0;
    }
</script>
