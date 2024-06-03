import "./assets/main.css";

import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { Router } from "./router";
import { i18n } from "./i18n";

import App from "./App.vue";

const app = createApp(App);

app.use(Router);
app.use(VueQueryPlugin);
app.use(i18n);

app.mount("#app");
