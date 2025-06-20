<template>
    <p class="ma-4">{{ text }}</p>
</template>

<script setup>
    defineProps({
        text: String
    })
</script>