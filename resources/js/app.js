require("./bootstrap");
import { createApp, h, reactive } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";

//PrimeVue
import { registrationPrimevue } from "@/plugins/primevue";

import "prismjs/themes/prism-coy.css";
import "@fullcalendar/core/main.min.css";
import "@fullcalendar/daygrid/main.min.css";
import "@fullcalendar/timegrid/main.min.css";
import "./assets/layout/layout.scss";
import "./assets/layout/flags/flags.css";

import CodeHighlight from "./AppCodeHighlight";

InertiaProgress.init();

createInertiaApp({
  resolve: (name) => import(`./views/${name}`),
  setup({ el, app, props, plugin }) {
    const vue = createApp({ render: () => h(app, props) })
      .use(plugin)
      .mixin({ methods: { route: window.route } })
      .directive("code", CodeHighlight);

    vue.config.globalProperties.$appState = reactive({
      inputStyle: "outlined",
    });
    registrationPrimevue(vue);
    vue.mount(el);
  },
});
