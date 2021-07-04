<template>
  <FormGenerator :id="formId" />
</template>

<script>
import FormGenerator from "./components/FormGenerator.vue";

export default {
  name: "App",
  components: {
    FormGenerator,
  },
  data() {
    return {
      formId: 1,
    };
  },
};
</script>
