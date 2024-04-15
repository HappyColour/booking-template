<template>
    <div class="mx-auto flex justify-around pt-6 pb-4 items-center">
        <nuxt-link v-if="!$device.isMobile" class="md:hover:opacity-60" to="/about">ABOUT US</nuxt-link>
        <nuxt-link to="/" class="md:hover:opacity-60">
            <NuxtImg src="/logo-default-314x48.png" format="webp" :width="$device.isMobile ? '157' : '314'" loading="lazy" />
        </nuxt-link>
        <a v-if="!$device.isMobile" :href="$device.isMobile ? `tel:+1 (409) 987–5874` : ' javascript:;'" class="md:hover:opacity-60 flex items-center">
            <UIcon name="i-heroicons-phone" />
            +1 (409) 987–5874
        </a>
    </div>
</template>