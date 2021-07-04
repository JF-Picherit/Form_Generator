<template>
  <div class="container-sm d-flex justify-content-center">
    <p v-if="isLoading">
      <Spinner fill="red" height="20px" dur="1.0s" />
      Chargement du formulaire n°{{ id }} en cours...
    </p>
    <p v-else-if="isError">
      Une erreur est survenue lors de la récupération du formulaire.
    </p>

    <form v-else :action="formData.action" :method="formData.method" class="w-50 p-3">
      <template v-for="field in formData.fields" :key="field.name" >
        <SelectField
          v-if="field.type == 'select'"
          :label="field.label"
          :name="field.name"
          :defaultValue="field.defaultValue ? field.defaultValue : null"
          :placeHolder="field.placeHolder ? field.placeHolder : null"
          :isRequired="field.isRequired ? field.isRequired : false"
          :options="field.options"
        />
        <InputField
          v-else
          :type="field.type"
          :label="field.label"
          :name="field.name"
          :defaultValue="field.defaultValue ? field.defaultValue : null"
          :placeHolder="field.placeHolder ? field.placeHolder : null"
          :isRequired="field.isRequired ? field.isRequired : false"
          :isReadOnly="field.isReadOnly ? field.isReadOnly : false"
        />
      </template>
    </form>
  </div>
</template>

<script>
import formService from "@/services/FormService.js";
import Spinner from "./IconSpinner.vue";
import InputField from "./InputField.vue";
import SelectField from "./SelectField.vue";

export default {
  name: "FormGenerator",
  components: {
    Spinner,
    InputField,
    SelectField,
  },
  props: {
    id: Number,
  },
  data() {
    return {
      isLoading: true,
      isError: false,
      formData: null,
    };
  },
  mounted() {
    formService
      .getById(this.id)
      .then((response) => (this.formData = response))
      .catch(() => (this.isError = true))
      .finally(() => (this.isLoading = false));
  },
};
</script>

