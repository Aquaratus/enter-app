<template>
  <div>
    <ul>
      <li v-for="post in postList" :key="post.id">
        <h5>{{ post.id }}. {{ post.title }}</h5>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const postList = computed(() => store.state.listStore.posts);

    onMounted(() => {
      store.dispatch('listStore/getPosts');
    });

    return {
      postList,
    };
  },
};
</script>

<style></style>
