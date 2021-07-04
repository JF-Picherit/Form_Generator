<template>
  <div>
    <label :for="name" class="form-label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AbstractField",
  props: {
    name: String,
    label: String,
  },
};
</script>
