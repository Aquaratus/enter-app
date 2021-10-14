<template>
  <header class="header">
    <div class="header-link-wrapper">
      <router-link
          v-for="link in headerLinks"
          :key="link.link"
          :class="[
            'header-link',
            'focusable--text',
            { 'focusable--disabled': isDisabled(link.link) },
          ]"
          :to="link.link"
          :disabled="isDisabled"
        >{{ link.text }}</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-component',
  data() {
    return {
      headerLinks: [
        {
          link: '/',
          text: 'Home',
        },
        {
          link: '/list',
          text: 'List',
        },
        {
          link: '/about',
          text: 'About',
        },
      ],
    };
  },
  methods: {
    isDisabled(link) {
      return this.$route.path === link;
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  padding: 30px 0;
}

.header-link-wrapper {
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
}

.header-link {
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
}
</style>
