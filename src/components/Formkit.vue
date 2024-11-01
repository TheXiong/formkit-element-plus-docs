<template>
    <button :class="['xl-button', type ? 'xl-button--' + type : '']">
        <slot />
    </button>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>