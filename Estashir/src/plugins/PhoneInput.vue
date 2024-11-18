<template>
  <div class="flex bg-red-900">
    <input id="phone" class="w-full py-1.5 px-2 rounded-lg shadow" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";

// Import intl-tel-input plugin and its CSS
import intlTelInput from "intl-tel-input";
import "/node_modules/intl-tel-input/build/css/intlTelInput.css";

// Initialize the intl-tel-input when the component is mounted
onMounted(() => {
  const phoneInputElement = document.querySelector("#phone"); // select the input element

  intlTelInput(phoneInputElement, {
    // Optionally, load utils.js dynamically for phone number validation
    loadUtilsOnInit: () =>
      import("/node_modules/intl-tel-input/build/js/utils.js"),
  });
});
</script>

<style>
/* Optional: Customize the path for flag images */
.iti {
  --iti-path-flags-1x: url("/node_modules/intl-tel-input/build/img/flags.webp");
  --iti-path-flags-2x: url("/node_modules/intl-tel-input/build/img/flags@2x.webp");
  --iti-path-globe-1x: url("/node_modules/intl-tel-input/build/img/globe.webp");
  --iti-path-globe-2x: url("/node_modules/intl-tel-input/build/img/globe@2x.webp");
}
</style>
