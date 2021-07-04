<template>
  <AbstractField :label="label" :name="name">
    <input
      :type="type"
      :name="name"
      :value="defaultValue ? defaultValue : null"
      :placeHolder="placeHolder"
      :required="isRequired"
      :readonly="isReadOnly"
      class="form-control"
    />
  </AbstractField>
</template>

<script>
import FieldMixin from "@/mixins/FieldMixin.js";
import AbstractField from "./AbstractField.vue";

export default {
  name: "InputField",
  components: { AbstractField },
  mixins: [FieldMixin],
  props: {
    type: String,
    isReadOnly: { type: Boolean, default: false },
  },
};
</script>
