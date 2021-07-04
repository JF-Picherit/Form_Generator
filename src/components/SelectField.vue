<template>
  <AbstractField :label="label" :name="name">
    <select :name="name" :required="isRequired" class="form-select">
      <option v-if="placeHolder && !defaultValue" disabled selected>
        {{ placeHolder }}
      </option>
      <option
        v-for="option in options"
        :key="option"
        :selected="defaultValue == option ? 'selected' : null"
      >
        {{ option }}
      </option>
    </select>
  </AbstractField>
</template>

<script>
import FieldMixin from "@/mixins/FieldMixin.js";
import AbstractField from "./AbstractField.vue";

export default {
  name: "SelectField",
  components: { AbstractField },
  mixins: [FieldMixin],
  props: {
    options: Array,
  },
};
</script>
