<template>
  <div class="home">
    <h1>{{ label }}</h1>
    <input-component type="text" v-model:val.trim="val"></input-component>
    <p class="input-text-value">{{ val }}</p>
  </div>
</template>

<script>
import {
  ref, inject,
} from 'vue';
import InputComponent from '@/components/UI/InputComponent.vue';

export default {
  components: {
    InputComponent,
  },
  setup() {
    const val = ref('');
    const label = inject([
      'homeLabel',
    ]);

    return {
      val,
      label,
    };
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>
