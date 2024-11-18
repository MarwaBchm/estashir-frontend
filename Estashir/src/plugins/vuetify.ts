// Import Vuetify and the styles
import { createVuetify } from "vuetify";
import "vuetify/styles";
import { aliases, mdi } from "vuetify/iconsets/mdi";

// Optional: Add icons if you're using them
import "@mdi/font/css/materialdesignicons.css";

// Create and export the Vuetify instance
export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
