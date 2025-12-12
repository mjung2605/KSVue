<template>

    <v-sheet class="pa-8 d-flex flex-row justify-space-evenly align-center">
        <v-btn variant="text" @click="prev" icon="mdi-chevron-left" rounded></v-btn>

        <v-window class="w-100 h-300" v-model="currentTab">
            <!-- v-for="(v, i) ist JS Syntax in For-Schleifen: die erste Variable repräsentiert dann den Wert, die zweite den Index, den wir für den active tab brauchen" -->
            <v-window-item
            
            v-for="(v, i) in videos"
            :key="v.id"
            :value="i">

                <iframe height="300px" width="100%" :src="v.src" ></iframe>
            </v-window-item>
        </v-window>
 
        <v-btn variant="text" @click="next" icon="mdi-chevron-right" rounded></v-btn>
    </v-sheet>

</template>


<script setup>
    import videos from "@/data/videos.json"

    const currentTab = ref(0);

    function prev() {
        if(currentTab.value > 0) currentTab.value--;
        else if(currentTab.value === 0) currentTab.value = videos.length - 1;
    }

    function next() {
        if(currentTab.value < videos.length - 1) currentTab.value++;
        else if(currentTab.value === videos.length - 1) currentTab.value=0;
    }
</script>

