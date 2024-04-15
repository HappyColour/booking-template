<script setup lang="ts">
const items = [
    'slide-01.jpg',
    'slide-01.jpg',
    'slide-01.jpg',
    'slide-01.jpg',
    'slide-01.jpg',
    'slide-01.jpg',
];

const carouselRef = ref();

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return;

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0);
        }

        carouselRef.value.next();
    }, 3000);
});
</script>

<template>
    <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="w-8/12 overflow-hidden" indicators>
        <img :src="item" class="w-full" draggable="false">
    </UCarousel>
</template>

