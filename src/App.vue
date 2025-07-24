<template>
    <div class="mainpage">
        <Header></Header>
        <router-view />
        <Fooder></Fooder>
    </div>

</template>

<script setup>
    import Header from '@/components/headerl.vue';
    import Fooder from '@/components/fooder.vue';
</script>

<style>
.mainpage{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>

