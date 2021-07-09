(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Documentation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Documentation.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Documentation.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Documentation.vue?vue&type=template&id=33ec115f&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Documentation.vue?vue&type=template&id=33ec115f&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-33ec115f");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-33ec115f");

var _hoisted_1 = {
  "class": "p-grid"
};
var _hoisted_2 = {
  "class": "p-col-12"
};
var _hoisted_3 = {
  "class": "card docs"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h4 data-v-33ec115f>Current Version</h4><p data-v-33ec115f>Vue 3.0.6 and PrimeVue 3.x</p><h4 data-v-33ec115f>Getting Started</h4><p data-v-33ec115f>Sigma is an application template for Vue based on the <a href=\"https://cli.vuejs.org/\" data-v-33ec115f>Vue CLI</a> that provides out-of-the-box standard tooling for Vue projects. To get started, clone the <a href=\"https://github.com/primefaces/sigma-vue\" data-v-33ec115f>repository</a> from GitHub and install the dependencies with npm or yarn.</p><pre data-v-33ec115f>npm install\n</pre> or <pre data-v-33ec115f>yarn\n</pre><p data-v-33ec115f>Next step is running the application using the serve script and navigate to <b data-v-33ec115f>http://localhost:8080/</b> to view the application. That is it, you may now start with the development of your application using the Sigma template.</p><pre data-v-33ec115f>npm run serve\n</pre><h4 data-v-33ec115f>Vue CLI Scripts</h4><p data-v-33ec115f>Following commands are derived from create-app-app.</p><pre data-v-33ec115f>&quot;npm run serve&quot;: Starts the development server\n&quot;npm run build&quot;: Builds the application for deployment.\n&quot;npm run lint&quot;: Executes the lint checks.\n&quot;npm run test:unit&quot;: Runs the tests.\n</pre><h4 data-v-33ec115f>Structure</h4><p data-v-33ec115f>Sigma consists of 2 main parts; the application layout and the resources. <i data-v-33ec115f>App.vue</i> inside src folder is the main component containing the template for the base layout whereas required resources such as SASS structure for the layout are placed inside the <b data-v-33ec115f>src/assets/layout</b> folder.</p><h4 data-v-33ec115f>Templates</h4><p data-v-33ec115f>Main layout is the template of the <i data-v-33ec115f>App.vue</i>, it is divided into a couple of child components such as topbar, profile, menu and footer. Here is template of the <i data-v-33ec115f>App.vue</i> component that implements the logic such as menu state, layout modes and so on. </p>", 16);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("");

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("code", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("template", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("\n<template>\n    <div :class=\"containerClass\" @click=\"onWrapperClick\">\n        <AppTopBar @menu-toggle=\"onMenuToggle\" />\n\n        <transition name=\"layout-sidebar\">\n            <div :class=\"sidebarClass\" @click=\"onSidebarClick\" v-show=\"isSidebarVisible()\">\n                <div class=\"layout-logo\">\n                    <router-link to=\"/\">\n                        <img alt=\"Logo\" :src=\"logo\" />\n                    </router-link>\n                </div>\n\n                <AppProfile />\n                <AppMenu :model=\"menu\" @menuitem-click=\"onMenuItemClick\" />\n            </div>\n        </transition>\n\n        <div class=\"layout-main\">\n            <router-view />\n        </div>\n\n        <AppConfig :layoutMode=\"layoutMode\" :layoutColorMode=\"layoutColorMode\" @layout-change=\"onLayoutChange\" @layout-color-change=\"onLayoutColorChange\"/>\n\n        <AppFooter />\n    </div>\n</template>\n")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("\n")], -1
/* HOISTED */
);

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, "Menu", -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Menu is a separate component defined in "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", null, "AppMenu.vue"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" file based on PrimeNG MenuModel API. In order to define the menuitems, navigate to data section of "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", null, "App.vue"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" file and define your own model as a nested structure using the menu property. Here is the menu component from the demo application. Notice that menu object is bound to the model property of AppMenu component as shown above.")], -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("");

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("code", null, "\ndata() {\n    return {\n        menu : [\n            {label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'},\n            {\n                label: 'UI KIT', icon: 'pi pi-fw pi-sitemap',\n                items: [\n                    {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout'},\n                    {label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input'},\n                    {label: \"Float Label\", icon: \"pi pi-fw pi-bookmark\", to: \"/floatlabel\"},\n                    {label: \"Invalid State\", icon: \"pi pi-fw pi-exclamation-circle\", to: \"invalidstate\"},\n                    {label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button'},\n                    {label: 'Table', icon: 'pi pi-fw pi-table', to: '/table'},\n                    {label: 'List', icon: 'pi pi-fw pi-list', to: '/list'},\n                    {label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree'},\n                    {label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel'},\n                    {label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay'},\n                    {label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu'},\n                    {label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages'},\n                    {label: 'File', icon: 'pi pi-fw pi-file', to: '/file'},\n                    {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart'},\n                    {label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc'},\n                ]\n            },\n            {\n                label: \"Utilities\", icon:'pi pi-fw pi-globe',\n                items: [\n                    {label: 'Display', icon:'pi pi-fw pi-desktop', to:'/display'},\n                    {label: 'Elevation', icon:'pi pi-fw pi-external-link', to:'/elevation'},\n                    {label: 'Flexbox', icon:'pi pi-fw pi-directions', to:'/flexbox'},\n                    {label: 'Icons', icon:'pi pi-fw pi-search', to:'/icons'},\n                    {label: 'Grid System', icon:'pi pi-fw pi-th-large', to:'/grid'},\n                    {label: 'Spacing', icon:'pi pi-fw pi-arrow-right', to:'/spacing'},\n                    {label: 'Typography', icon:'pi pi-fw pi-align-center', to:'/typography'},\n                    {label: 'Text', icon:'pi pi-fw pi-pencil', to:'/text'},\n                ]\n            },\n            {\n                label: 'Pages', icon: 'pi pi-fw pi-clone',\n                items: [\n                    {label: 'Crud', icon: 'pi pi-fw pi-user-edit', to: '/crud'},\n                    {label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', to: '/calendar'},\n                    {label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/timeline'},\n                    {label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty'}\n                ]\n            },\n            {\n                label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',\n                items: [\n                    {\n                        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',\n                        items: [\n                            {\n                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',\n                                items: [\n                                    {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},\n                                ]\n                            },\n                            {\n                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',\n                                items: [\n                                    {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark'}\n                                ]\n                            },\n                        ]\n                    },\n                    {\n                        label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',\n                        items: [\n                            {\n                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',\n                                items: [\n                                    {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark'},\n                                ]\n                            },\n                            {\n                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',\n                                items: [\n                                    {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark'}\n                                ]\n                            }\n                        ]\n                    }\n                ]\n            },\n            {label: 'Documentation', icon: 'pi pi-fw pi-question', command: () => {window.location = \"#/documentation\"}},\n            {label: 'View Source', icon: 'pi pi-fw pi-search', command: () => {window.location = \"https://github.com/primefaces/sigma\"}}\n        ]\n    }\n}\n\n", -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, "Dependencies", -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "Dependencies of Sigma are listed below and needs to be added to package.json. Sigma has no direct dependency, even PrimeVue components are an optional dependency..", -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("");

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("code", null, "\n{\n    \"primevue\": \"3.3.4\",              //optional: PrimeVue components\n    \"primeicons\": \"4.1.0\",            //optional: Icons\n    \"primeflex\": \"2.0.0\",             //optional: Grid system\n}\n\n", -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, "Integration with an Existing CLI Project", -1
/* HOISTED */
);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " To setup Sigma in an existing project, follow the steps below; ", -1
/* HOISTED */
);

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Copy the "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", null, "public/assets"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" folder to your projects folder with the same name")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Copy all "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", null, "src/App*.vue"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" files to the src folder of your application.")])], -1
/* HOISTED */
);

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "Install PrimeVue", -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("code", null, "\nnpm install primevue@latest --save\nnpm install\tprimeicons@latest --save\nnpm install primeflex@latest --save\n\n", -1
/* HOISTED */
);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, "Saga Theme", -1
/* HOISTED */
);

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "Sigma uses the free Saga-Blue which is a free theme distributed within PrimeVue, however it can be used with any PrimeVue theme as well.", -1
/* HOISTED */
);

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, "SASS Variables", -1
/* HOISTED */
);

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("In case you'd like to customize the layout variables, open "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", null, "_variables.scss"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" file under src/layout folder. Saving the changes will be reflected instantly at your browser.")], -1
/* HOISTED */
);

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", null, "src/assets/_variables.scss", -1
/* HOISTED */
);

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("");

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("code", null, "\n/* General */\n$fontSize:14px;\n$bodyBgColor:#edf0f5;\n$textColor:#333333;\n$textSecondaryColor:#707070;\n$borderRadius:3px;\n$dividerColor:#e3e3e3;\n$transitionDuration:.2s;\n$maskBgColor:#424242;\n$focusShadowColor:#8dcdff;\n\n\n/* Menu */\n$menuitemBadgeBgColor:#007be5;\n$menuitemBadgeColor:#ffffff;\n$submenuFontSize:13px;\n\n/* Menu Dark*/\n$menuDarkBgColorFirst:#4d505b;\n$menuDarkBgColorLast:#3b3e47;\n$menuitemDarkColor:#ffffff;\n$menuitemDarkHoverColor:#0388e5;\n$menuitemDarkActiveColor:#0388e5;\n$menuitemDarkActiveBgColor:#2e3035;\n$menuitemDarkBorderColor:rgba(52, 56, 65, 0.6);\n\n/* Menu Light*/\n$menuBgColorFirst:#f3f4f9;\n$menuBgColorLast:#d7dbe8;\n$menuitemColor:#232428;\n$menuitemHoverColor:#0388e5;\n$menuitemActiveColor:#0388e5;\n$menuitemActiveBgColor:#ffffff;\n$menuitemBorderColor:rgba(207, 211, 224, 0.6);\n\n/* Topbar */\n$topbarLeftBgColor:#0388E5;\n$topbarRightBgColor:#07BDF4;\n$topbarItemBadgeBgColor:#ef6262;\n$topbarItemBadgeColor:#ffffff;\n$topbarItemColor:#ffffff;\n$topbarItemHoverColor:#77c7ff;\n$topbarSearchInputBorderBottomColor:#ffffff;\n$topbarSearchInputColor:#ffffff;\n\n/* Footer */\n$footerBgColor:#ffffff;\n\n", -1
/* HOISTED */
);

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, "Menu Modes", -1
/* HOISTED */
);

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Menu has 2 modes, "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", null, "static"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" and "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", null, "overlay"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". Main layout container element in App.vue is used to define which mode to use by adding specific classes. List below indicates the style classes for each mode.")], -1
/* HOISTED */
);

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, "Static: \"layout-wrapper layout-static\""), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, "Overlay: \"layout-wrapper layout-overlay\"")], -1
/* HOISTED */
);

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "For example to create an overlay menu, the div element should be in following form;", -1
/* HOISTED */
);

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("");

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("code", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("template", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("\n<div class=\"layout-wrapper layout-static\">\n")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("\n")], -1
/* HOISTED */
);

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes. Sample application has an example implementation of such use case with a computed property. Refer to App.vue for an example.", -1
/* HOISTED */
);

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, "Menu Color Scheme", -1
/* HOISTED */
);

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("There are two alternatives as the menu colors schemes; \"light\" and \"dark\". A color scheme is applied using the "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", null, "layout-sidebar-light"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" or "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", null, "layout-sidebar-dark"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to the sidebar element.")], -1
/* HOISTED */
);

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("b", null, "Dark Menu", -1
/* HOISTED */
);

var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("");

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("code", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("template", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("\n<div class=\"layout-sidebar layout-sidebar-dark\">\n")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("\n")], -1
/* HOISTED */
);

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("b", null, "Light Menu", -1
/* HOISTED */
);

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("");

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("code", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("template", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("\n<div class=\"layout-sidebar layout-sidebar-light\">\n")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("\n")], -1
/* HOISTED */
);

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, "Grid CSS", -1
/* HOISTED */
);

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Sigma uses PrimeFlex CSS Grid throughout the samples. Although any grid library can be used, we recommend using PrimeFlex as your layout framework as it is well tested and supported by PrimeVue. PrimeFlex is available at "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  href: "https://www.npmjs.com/package/primeflex"
}, "NPM"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(".")], -1
/* HOISTED */
);

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, "Customizing Styles", -1
/* HOISTED */
);

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("It is suggested to write your customizations in "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", null, "_overrides.scss"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" file instead of adding them to the scss files under sass folder to avoid maintenance issues after an update.")], -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_code = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("code");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("pre", null, [_hoisted_20, _hoisted_21], 512
  /* NEED_PATCH */
  ), [[_directive_code]]), _hoisted_22, _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("pre", null, [_hoisted_24, _hoisted_25], 512
  /* NEED_PATCH */
  ), [[_directive_code, void 0, void 0, {
    script: true
  }]]), _hoisted_26, _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("pre", null, [_hoisted_28, _hoisted_29], 512
  /* NEED_PATCH */
  ), [[_directive_code, void 0, void 0, {
    script: true
  }]]), _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("pre", null, [_hoisted_34], 512
  /* NEED_PATCH */
  ), [[_directive_code]]), _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("pre", null, [_hoisted_40, _hoisted_41], 512
  /* NEED_PATCH */
  ), [[_directive_code, void 0, void 0, {
    css: true
  }]]), _hoisted_42, _hoisted_43, _hoisted_44, _hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("pre", null, [_hoisted_46, _hoisted_47], 512
  /* NEED_PATCH */
  ), [[_directive_code]]), _hoisted_48, _hoisted_49, _hoisted_50, _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("pre", null, [_hoisted_52, _hoisted_53], 512
  /* NEED_PATCH */
  ), [[_directive_code]]), _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("pre", null, [_hoisted_55, _hoisted_56], 512
  /* NEED_PATCH */
  ), [[_directive_code]]), _hoisted_57, _hoisted_58, _hoisted_59, _hoisted_60])])]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Documentation.vue?vue&type=style&index=0&id=33ec115f&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Documentation.vue?vue&type=style&index=0&id=33ec115f&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\npre[data-v-33ec115f] {\n    border-left: 10px solid #7fbcec;\n    background: #f0f0f0;\n    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;\n    text-align: left;\n    white-space: pre;\n    padding: 1em;\n    overflow: auto;\n}\ni[data-v-33ec115f] {\n    background-color: #fcf2a7;\n    font-family: monaco,Consolas,Lucida Console,monospace;\n    font-weight: 700;\n    font-style: normal;\n    font-size: 14px;\n    padding: 2px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Documentation.vue?vue&type=style&index=0&id=33ec115f&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Documentation.vue?vue&type=style&index=0&id=33ec115f&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Documentation_vue_vue_type_style_index_0_id_33ec115f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Documentation.vue?vue&type=style&index=0&id=33ec115f&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Documentation.vue?vue&type=style&index=0&id=33ec115f&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Documentation_vue_vue_type_style_index_0_id_33ec115f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Documentation_vue_vue_type_style_index_0_id_33ec115f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/Documentation.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Documentation.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Documentation_vue_vue_type_template_id_33ec115f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Documentation.vue?vue&type=template&id=33ec115f&scoped=true */ "./resources/js/components/Documentation.vue?vue&type=template&id=33ec115f&scoped=true");
/* harmony import */ var _Documentation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Documentation.vue?vue&type=script&lang=js */ "./resources/js/components/Documentation.vue?vue&type=script&lang=js");
/* harmony import */ var _Documentation_vue_vue_type_style_index_0_id_33ec115f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Documentation.vue?vue&type=style&index=0&id=33ec115f&scoped=true&lang=css */ "./resources/js/components/Documentation.vue?vue&type=style&index=0&id=33ec115f&scoped=true&lang=css");




;
_Documentation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Documentation_vue_vue_type_template_id_33ec115f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Documentation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-33ec115f"
/* hot reload */
if (false) {}

_Documentation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/Documentation.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Documentation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/Documentation.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Documentation.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Documentation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Documentation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Documentation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Documentation.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Documentation.vue?vue&type=template&id=33ec115f&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Documentation.vue?vue&type=template&id=33ec115f&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Documentation_vue_vue_type_template_id_33ec115f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Documentation_vue_vue_type_template_id_33ec115f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Documentation.vue?vue&type=template&id=33ec115f&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Documentation.vue?vue&type=template&id=33ec115f&scoped=true");


/***/ }),

/***/ "./resources/js/components/Documentation.vue?vue&type=style&index=0&id=33ec115f&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Documentation.vue?vue&type=style&index=0&id=33ec115f&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Documentation_vue_vue_type_style_index_0_id_33ec115f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Documentation.vue?vue&type=style&index=0&id=33ec115f&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Documentation.vue?vue&type=style&index=0&id=33ec115f&scoped=true&lang=css");


/***/ })

}]);