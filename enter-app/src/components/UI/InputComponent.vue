<template>
  <input class="input-text focusable" :type="type" :value="val" @input="onInput">
</template>

<script>
export default {
  props: {
    val: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    function onInput(e) {
      context.emit('update:val', e.target.value);
    }

    return {
      onInput,
    };
  },
};
</script>

<style lang="scss">
.input-text {
  width: 50%;
  margin: 20px auto;
  padding: 15px 25px;
  border: 1px dashed rgba(9, 0, 131, 0.4);

  &-value {
    max-width: 50%;
    word-wrap: break-word;
    text-align: center;
  }
}
</style>
