<template>

        <div style="position:relative;padding-top:0;"> <iframe src="https://www.nrwision.de/mediathek/embed/kurt-piehl-ein-pirat-im-zweiten-weltkrieg-teil-1-der-weg-in-den-widerstand-240708/" scrolling="no" frameborder="0" allowfullscreen style="position:relative;top:0;left:0;width:560px;height:410px;"></iframe> </div>

        <div style="position:relative;padding-top:0;"> <iframe src="https://www.nrwision.de/mediathek/embed/kurt-piehl-ein-pirat-im-zweiten-weltkrieg-teil-1-der-weg-in-den-widerstand-240708/" scrolling="no" frameborder="0" allowfullscreen style="position:relative;top:0;left:0;width:560px;height:410px;"></iframe> </div>
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
