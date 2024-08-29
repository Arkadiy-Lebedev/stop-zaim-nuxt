<script setup lang="ts">

const route = useRoute()

interface Props {
    name: string,
    link: string
}
const props = defineProps<Props>()

const isActive = ref(false)

const activeRoute = () => {
    if (route.path == props.link) {
    isActive.value = true
} else {
    isActive.value = false
}
}
activeRoute()


watch(
    () => route.path,
    (count, prevCount) => {
      activeRoute()   
    }
)



</script>

<template>
    <li class="header__nav-item" :class="{ active: isActive }">
        <NuxtLink :to="link" class="header__nav-link">{{ name }}</NuxtLink>        
    </li>
</template>