<template>
  <HeaderComponent></HeaderComponent>
  <router-view/>
</template>

<script setup>
import { provide, readonly } from 'vue';
import HeaderComponent from '@/components/UI/Header.vue';

provide('homeLabel', readonly('Vue 3 '));
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.focusable {
  transition: text-shadow 0.1s ease-in-out;

  &:hover, &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 139, 0.6);
  }

  &--text {
    &:hover, &:focus {
      text-shadow: 0 0 5px rgba(0, 0, 139, 0.6);
    }
  }

  &--disabled {
    cursor: not-allowed;

    &:hover, &:focus {
      text-shadow: none;
    }
  }
}
</style>
