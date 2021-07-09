(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_TableDemo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/api */ "./node_modules/primevue/api/api.esm.js");
/* harmony import */ var _service_CustomerService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/CustomerService */ "./resources/js/service/CustomerService.js");
/* harmony import */ var _service_ProductService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/ProductService */ "./resources/js/service/ProductService.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      customer1: null,
      customer2: null,
      customer3: null,
      filters1: null,
      filters2: {},
      loading1: true,
      loading2: true,
      idFrozen: false,
      products: null,
      expandedRows: [],
      statuses: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'],
      representatives: [{
        name: "Amy Elsner",
        image: 'amyelsner.png'
      }, {
        name: "Anna Fali",
        image: 'annafali.png'
      }, {
        name: "Asiya Javayant",
        image: 'asiyajavayant.png'
      }, {
        name: "Bernardo Dominic",
        image: 'bernardodominic.png'
      }, {
        name: "Elwin Sharvill",
        image: 'elwinsharvill.png'
      }, {
        name: "Ioni Bowcher",
        image: 'ionibowcher.png'
      }, {
        name: "Ivan Magalhaes",
        image: 'ivanmagalhaes.png'
      }, {
        name: "Onyama Limba",
        image: 'onyamalimba.png'
      }, {
        name: "Stephen Shaw",
        image: 'stephenshaw.png'
      }, {
        name: "XuXue Feng",
        image: 'xuxuefeng.png'
      }]
    };
  },
  customerService: null,
  productService: null,
  created: function created() {
    this.customerService = new _service_CustomerService__WEBPACK_IMPORTED_MODULE_1__.default();
    this.productService = new _service_ProductService__WEBPACK_IMPORTED_MODULE_2__.default();
    this.initFilters1();
  },
  mounted: function mounted() {
    var _this = this;

    this.productService.getProductsWithOrdersSmall().then(function (data) {
      return _this.products = data;
    });
    this.customerService.getCustomersLarge().then(function (data) {
      _this.customer1 = data;
      _this.loading1 = false;

      _this.customer1.forEach(function (customer) {
        return customer.date = new Date(customer.date);
      });
    });
    this.customerService.getCustomersLarge().then(function (data) {
      return _this.customer2 = data;
    });
    this.customerService.getCustomersMedium().then(function (data) {
      return _this.customer3 = data;
    });
    this.loading2 = false;
  },
  methods: {
    initFilters1: function initFilters1() {
      this.filters1 = {
        'global': {
          value: null,
          matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_0__.FilterMatchMode.CONTAINS
        },
        'name': {
          operator: primevue_api__WEBPACK_IMPORTED_MODULE_0__.FilterOperator.AND,
          constraints: [{
            value: null,
            matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_0__.FilterMatchMode.STARTS_WITH
          }]
        },
        'country.name': {
          operator: primevue_api__WEBPACK_IMPORTED_MODULE_0__.FilterOperator.AND,
          constraints: [{
            value: null,
            matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_0__.FilterMatchMode.STARTS_WITH
          }]
        },
        'representative': {
          value: null,
          matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_0__.FilterMatchMode.IN
        },
        'date': {
          operator: primevue_api__WEBPACK_IMPORTED_MODULE_0__.FilterOperator.AND,
          constraints: [{
            value: null,
            matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_0__.FilterMatchMode.DATE_IS
          }]
        },
        'balance': {
          operator: primevue_api__WEBPACK_IMPORTED_MODULE_0__.FilterOperator.AND,
          constraints: [{
            value: null,
            matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_0__.FilterMatchMode.EQUALS
          }]
        },
        'status': {
          operator: primevue_api__WEBPACK_IMPORTED_MODULE_0__.FilterOperator.OR,
          constraints: [{
            value: null,
            matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_0__.FilterMatchMode.EQUALS
          }]
        },
        'activity': {
          value: null,
          matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_0__.FilterMatchMode.BETWEEN
        },
        'verified': {
          value: null,
          matchMode: primevue_api__WEBPACK_IMPORTED_MODULE_0__.FilterMatchMode.EQUALS
        }
      };
    },
    clearFilter1: function clearFilter1() {
      this.initFilters1();
    },
    onRowExpand: function onRowExpand(event) {
      this.$toast.add({
        severity: 'info',
        summary: 'Product Expanded',
        detail: event.data.name,
        life: 3000
      });
    },
    onRowCollapse: function onRowCollapse(event) {
      this.$toast.add({
        severity: 'success',
        summary: 'Product Collapsed',
        detail: event.data.name,
        life: 3000
      });
    },
    expandAll: function expandAll() {
      this.expandedRows = this.products.filter(function (p) {
        return p.id;
      });
      this.$toast.add({
        severity: 'success',
        summary: 'All Rows Expanded',
        life: 3000
      });
    },
    collapseAll: function collapseAll() {
      this.expandedRows = null;
      this.$toast.add({
        severity: 'success',
        summary: 'All Rows Collapsed',
        life: 3000
      });
    },
    formatCurrency: function formatCurrency(value) {
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    },
    formatDate: function formatDate(value) {
      return value.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    },
    calculateCustomerTotal: function calculateCustomerTotal(name) {
      var total = 0;

      if (this.customer3) {
        var _iterator = _createForOfIteratorHelper(this.customer3),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var customer = _step.value;

            if (customer.representative.name === name) {
              total++;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return total;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=template&id=204a1f14&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=template&id=204a1f14&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-204a1f14");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-204a1f14");

var _hoisted_1 = {
  "class": "p-grid"
};
var _hoisted_2 = {
  "class": "p-col-12"
};
var _hoisted_3 = {
  "class": "card"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Filter Menu", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "p-d-flex p-jc-between p-flex-column p-flex-sm-row"
};
var _hoisted_6 = {
  "class": "p-input-icon-left p-mb-2"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-search"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" No customers found. ");

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Loading customers data. Please wait. ");

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Name", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Country", -1
/* HOISTED */
);

var _hoisted_12 = {
  style: {
    "margin-left": ".5em",
    "vertical-align": "middle"
  },
  "class": "image-text"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "p-px-3 p-pt-0 p-pb-3 p-text-center p-text-bold"
}, "Customized Buttons", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Agent", -1
/* HOISTED */
);

var _hoisted_15 = {
  style: {
    "margin-left": ".5em",
    "vertical-align": "middle"
  },
  "class": "image-text"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "p-mb-3 p-text-bold"
}, "Agent Picker", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "p-multiselect-representative-option"
};
var _hoisted_18 = {
  style: {
    "margin-left": ".5em",
    "vertical-align": "middle"
  },
  "class": "image-text"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Date", -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Balance", -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Status", -1
/* HOISTED */
);

var _hoisted_22 = {
  key: 1
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Activity", -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "p-d-flex p-ai-center p-jc-between p-px-2"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Verified", -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "p-col-12"
};
var _hoisted_27 = {
  "class": "card"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Frozen Columns", -1
/* HOISTED */
);

var _hoisted_29 = {
  style: {
    "margin-left": ".5em",
    "vertical-align": "middle"
  },
  "class": "image-text"
};
var _hoisted_30 = {
  style: {
    "margin-left": ".5em",
    "vertical-align": "middle"
  },
  "class": "image-text"
};
var _hoisted_31 = {
  "class": "p-text-bold"
};
var _hoisted_32 = {
  "class": "p-col-12"
};
var _hoisted_33 = {
  "class": "card"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Row Expand", -1
/* HOISTED */
);

var _hoisted_35 = {
  "class": "table-header-container"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Name", -1
/* HOISTED */
);

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Image", -1
/* HOISTED */
);

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Price", -1
/* HOISTED */
);

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Category", -1
/* HOISTED */
);

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Reviews", -1
/* HOISTED */
);

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Status", -1
/* HOISTED */
);

var _hoisted_42 = {
  "class": "orders-subtable"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Id", -1
/* HOISTED */
);

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Customer", -1
/* HOISTED */
);

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Date", -1
/* HOISTED */
);

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Amount", -1
/* HOISTED */
);

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Status", -1
/* HOISTED */
);

var _hoisted_48 = {
  "class": "p-col-12"
};
var _hoisted_49 = {
  "class": "card"
};

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Subheader Grouping", -1
/* HOISTED */
);

var _hoisted_51 = {
  "class": "image-text p-ml-2"
};
var _hoisted_52 = {
  "class": "image-text"
};
var _hoisted_53 = {
  style: {
    "text-align": "right"
  },
  "class": "p-text-bold p-pr-6"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");

  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputText");

  var _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Column");

  var _component_MultiSelect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MultiSelect");

  var _component_Calendar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Calendar");

  var _component_InputNumber = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputNumber");

  var _component_Dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dropdown");

  var _component_ProgressBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ProgressBar");

  var _component_Slider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Slider");

  var _component_TriStateCheckbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TriStateCheckbox");

  var _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataTable");

  var _component_ToggleButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ToggleButton");

  var _component_Toast = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Toast");

  var _component_Rating = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Rating");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    value: $data.customer1,
    paginator: true,
    "class": "p-datatable-gridlines",
    rows: 10,
    dataKey: "id",
    rowHover: true,
    filters: $data.filters1,
    "onUpdate:filters": _cache[3] || (_cache[3] = function ($event) {
      return $data.filters1 = $event;
    }),
    filterDisplay: "menu",
    loading: $data.loading1,
    responsiveLayout: "scroll",
    globalFilterFields: ['name', 'country.name', 'representative.name', 'balance', 'status']
  }, {
    header: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        type: "button",
        icon: "pi pi-filter-slash",
        label: "Clear",
        "class": "p-button-outlined p-mb-2",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $options.clearFilter1();
        })
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        modelValue: $data.filters1['global'].value,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.filters1['global'].value = $event;
        }),
        placeholder: "Keyword Search",
        style: {
          "width": "100%"
        }
      }, null, 8
      /* PROPS */
      , ["modelValue"])])])];
    }),
    empty: _withId(function () {
      return [_hoisted_8];
    }),
    loading: _withId(function () {
      return [_hoisted_9];
    }),
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "name",
        header: "Name",
        style: {
          "min-width": "12rem"
        }
      }, {
        body: _withId(function (_ref) {
          var data = _ref.data;
          return [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.name), 1
          /* TEXT */
          )];
        }),
        filter: _withId(function (_ref2) {
          var filterModel = _ref2.filterModel;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
            type: "text",
            modelValue: filterModel.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return filterModel.value = $event;
            },
            "class": "p-column-filter",
            placeholder: "Search by name"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Country",
        filterField: "country.name",
        style: {
          "min-width": "12rem"
        }
      }, {
        body: _withId(function (_ref3) {
          var data = _ref3.data;
          return [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
            src: "assets/layout/flags/flag_placeholder.png",
            alt: data.country.name,
            "class": 'flag flag-' + data.country.code,
            width: "30"
          }, null, 10
          /* CLASS, PROPS */
          , ["alt"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.country.name), 1
          /* TEXT */
          )];
        }),
        filter: _withId(function (_ref4) {
          var filterModel = _ref4.filterModel;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
            type: "text",
            modelValue: filterModel.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return filterModel.value = $event;
            },
            "class": "p-column-filter",
            placeholder: "Search by country"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        filterclear: _withId(function (_ref5) {
          var filterCallback = _ref5.filterCallback;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
            type: "button",
            icon: "pi pi-times",
            onClick: function onClick($event) {
              return filterCallback();
            },
            "class": "p-button-secondary"
          }, null, 8
          /* PROPS */
          , ["onClick"])];
        }),
        filterapply: _withId(function (_ref6) {
          var filterCallback = _ref6.filterCallback;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
            type: "button",
            icon: "pi pi-check",
            onClick: function onClick($event) {
              return filterCallback();
            },
            "class": "p-button-success"
          }, null, 8
          /* PROPS */
          , ["onClick"])];
        }),
        filterfooter: _withId(function () {
          return [_hoisted_13];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Agent",
        filterField: "representative",
        showFilterMatchModes: false,
        filterMenuStyle: {
          'width': '14rem'
        },
        style: {
          "min-width": "14rem"
        }
      }, {
        body: _withId(function (_ref7) {
          var data = _ref7.data;
          return [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
            alt: data.representative.name,
            src: 'assets/layout/images/avatar/' + data.representative.image,
            width: "32",
            style: {
              "vertical-align": "middle"
            }
          }, null, 8
          /* PROPS */
          , ["alt", "src"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.representative.name), 1
          /* TEXT */
          )];
        }),
        filter: _withId(function (_ref8) {
          var filterModel = _ref8.filterModel;
          return [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MultiSelect, {
            modelValue: filterModel.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return filterModel.value = $event;
            },
            options: $data.representatives,
            optionLabel: "name",
            placeholder: "Any",
            "class": "p-column-filter"
          }, {
            option: _withId(function (slotProps) {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
                alt: slotProps.option.name,
                src: 'assets/layout/images/avatar/' + slotProps.option.image,
                width: "32",
                style: {
                  "vertical-align": "middle"
                }
              }, null, 8
              /* PROPS */
              , ["alt", "src"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.option.name), 1
              /* TEXT */
              )])];
            }),
            _: 2
            /* DYNAMIC */

          }, 1032
          /* PROPS, DYNAMIC_SLOTS */
          , ["modelValue", "onUpdate:modelValue", "options"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Date",
        filterField: "date",
        dataType: "date",
        style: {
          "min-width": "10rem"
        }
      }, {
        body: _withId(function (_ref9) {
          var data = _ref9.data;
          return [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatDate(data.date)), 1
          /* TEXT */
          )];
        }),
        filter: _withId(function (_ref10) {
          var filterModel = _ref10.filterModel;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Calendar, {
            modelValue: filterModel.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return filterModel.value = $event;
            },
            dateFormat: "mm/dd/yy",
            placeholder: "mm/dd/yyyy"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Balance",
        filterField: "balance",
        dataType: "numeric",
        style: {
          "min-width": "10rem"
        }
      }, {
        body: _withId(function (_ref11) {
          var data = _ref11.data;
          return [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCurrency(data.balance)), 1
          /* TEXT */
          )];
        }),
        filter: _withId(function (_ref12) {
          var filterModel = _ref12.filterModel;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputNumber, {
            modelValue: filterModel.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return filterModel.value = $event;
            },
            mode: "currency",
            currency: "USD",
            locale: "en-US"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "status",
        header: "Status",
        filterMenuStyle: {
          'width': '14rem'
        },
        style: {
          "min-width": "12rem"
        }
      }, {
        body: _withId(function (_ref13) {
          var data = _ref13.data;
          return [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
            "class": 'customer-badge status-' + data.status
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.status), 3
          /* TEXT, CLASS */
          )];
        }),
        filter: _withId(function (_ref14) {
          var filterModel = _ref14.filterModel;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {
            modelValue: filterModel.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return filterModel.value = $event;
            },
            options: $data.statuses,
            placeholder: "Any",
            "class": "p-column-filter",
            showClear: true
          }, {
            value: _withId(function (slotProps) {
              return [slotProps.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
                key: 0,
                "class": 'customer-badge status-' + slotProps.value
              }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.value), 3
              /* TEXT, CLASS */
              )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.placeholder), 1
              /* TEXT */
              ))];
            }),
            option: _withId(function (slotProps) {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
                "class": 'customer-badge status-' + slotProps.option
              }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.option), 3
              /* TEXT, CLASS */
              )];
            }),
            _: 2
            /* DYNAMIC */

          }, 1032
          /* PROPS, DYNAMIC_SLOTS */
          , ["modelValue", "onUpdate:modelValue", "options"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "activity",
        header: "Activity",
        showFilterMatchModes: false,
        style: {
          "min-width": "12rem"
        }
      }, {
        body: _withId(function (_ref15) {
          var data = _ref15.data;
          return [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ProgressBar, {
            value: data.activity,
            showValue: false
          }, null, 8
          /* PROPS */
          , ["value"])];
        }),
        filter: _withId(function (_ref16) {
          var filterModel = _ref16.filterModel;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Slider, {
            modelValue: filterModel.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return filterModel.value = $event;
            },
            range: "",
            "class": "p-m-3"
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(filterModel.value ? filterModel.value[0] : 0), 1
          /* TEXT */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(filterModel.value ? filterModel.value[1] : 100), 1
          /* TEXT */
          )])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "verified",
        header: "Verified",
        dataType: "boolean",
        bodyClass: "p-text-center",
        style: {
          "min-width": "8rem"
        }
      }, {
        body: _withId(function (_ref17) {
          var data = _ref17.data;
          return [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
            "class": ["pi", {
              'true-icon pi-check-circle': data.verified,
              'false-icon pi-times-circle': !data.verified
            }]
          }, null, 2
          /* CLASS */
          )];
        }),
        filter: _withId(function (_ref18) {
          var filterModel = _ref18.filterModel;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TriStateCheckbox, {
            modelValue: filterModel.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return filterModel.value = $event;
            }
          }, null, 8
          /* PROPS */
          , ["modelValue", "onUpdate:modelValue"])];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "filters", "loading", "globalFilterFields"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ToggleButton, {
    modelValue: $data.idFrozen,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.idFrozen = $event;
    }),
    onIcon: "pi pi-lock",
    offIcon: "pi pi-lock-open",
    onLabel: "Unfreeze Id",
    offLabel: "Freeze Id",
    style: {
      "width": "10rem"
    }
  }, null, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    value: $data.customer2,
    scrollable: true,
    scrollHeight: "400px",
    loading: $data.loading2,
    scrollDirection: "both",
    "class": "p-mt-3"
  }, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "name",
        header: "Name",
        style: {
          width: '150px'
        },
        frozen: ""
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "id",
        header: "Id",
        style: {
          width: '100px'
        },
        frozen: $data.idFrozen
      }, null, 8
      /* PROPS */
      , ["frozen"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "name",
        header: "Name",
        style: {
          width: '200px'
        }
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "country.name",
        header: "Country",
        style: {
          width: '200px'
        }
      }, {
        body: _withId(function (_ref19) {
          var data = _ref19.data;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
            src: "assets/layout/flags/flag_placeholder.png",
            "class": 'flag flag-' + data.country.code,
            width: "30"
          }, null, 2
          /* CLASS */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.country.name), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "date",
        header: "Date",
        style: {
          width: '200px'
        }
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "company",
        header: "Company",
        style: {
          width: '200px'
        }
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "status",
        header: "Status",
        style: {
          width: '200px'
        }
      }, {
        body: _withId(function (_ref20) {
          var data = _ref20.data;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
            "class": 'customer-badge status-' + data.status
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.status), 3
          /* TEXT, CLASS */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "activity",
        header: "Activity",
        style: {
          width: '200px'
        }
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "representative.name",
        header: "Representative",
        style: {
          width: '200px'
        }
      }, {
        body: _withId(function (_ref21) {
          var data = _ref21.data;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
            alt: data.representative.name,
            src: 'assets/layout/images/avatar/' + data.representative.image,
            width: "32",
            style: {
              "vertical-align": "middle"
            }
          }, null, 8
          /* PROPS */
          , ["alt", "src"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.representative.name), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "balance",
        header: "Balance",
        style: {
          width: '150px'
        },
        frozen: "",
        alignFrozen: "right"
      }, {
        body: _withId(function (_ref22) {
          var data = _ref22.data;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCurrency(data.balance)), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "loading"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_33, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Toast), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    value: $data.products,
    expandedRows: $data.expandedRows,
    "onUpdate:expandedRows": _cache[5] || (_cache[5] = function ($event) {
      return $data.expandedRows = $event;
    }),
    dataKey: "id",
    responsiveLayout: "scroll",
    onRowExpand: $options.onRowExpand,
    onRowCollapse: $options.onRowCollapse
  }, {
    header: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        icon: "pi pi-plus",
        label: "Expand All",
        onClick: $options.expandAll,
        "class": "p-mr-2 p-mb-2"
      }, null, 8
      /* PROPS */
      , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        icon: "pi pi-minus",
        label: "Collapse All",
        onClick: $options.collapseAll,
        "class": "p-mb-2"
      }, null, 8
      /* PROPS */
      , ["onClick"])])];
    }),
    expansion: _withId(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Orders for " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.name), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
        value: slotProps.data.orders,
        responsiveLayout: "scroll"
      }, {
        "default": _withId(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
            field: "id",
            header: "Id",
            sortable: true
          }, {
            body: _withId(function (slotProps) {
              return [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.id), 1
              /* TEXT */
              )];
            }),
            _: 2
            /* DYNAMIC */

          }, 1024
          /* DYNAMIC_SLOTS */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
            field: "customer",
            header: "Customer",
            sortable: true
          }, {
            body: _withId(function (slotProps) {
              return [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.customer), 1
              /* TEXT */
              )];
            }),
            _: 2
            /* DYNAMIC */

          }, 1024
          /* DYNAMIC_SLOTS */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
            field: "date",
            header: "Date",
            sortable: true
          }, {
            body: _withId(function (slotProps) {
              return [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.date), 1
              /* TEXT */
              )];
            }),
            _: 2
            /* DYNAMIC */

          }, 1024
          /* DYNAMIC_SLOTS */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
            field: "amount",
            header: "Amount",
            sortable: true
          }, {
            body: _withId(function (slotProps) {
              return [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCurrency(slotProps.data.amount)), 1
              /* TEXT */
              )];
            }),
            _: 2
            /* DYNAMIC */

          }, 1024
          /* DYNAMIC_SLOTS */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
            field: "status",
            header: "Status",
            sortable: true
          }, {
            body: _withId(function (slotProps) {
              return [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
                "class": 'order-badge order-' + (slotProps.data.status ? slotProps.data.status.toLowerCase() : '')
              }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.status), 3
              /* TEXT, CLASS */
              )];
            }),
            _: 2
            /* DYNAMIC */

          }, 1024
          /* DYNAMIC_SLOTS */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
            headerStyle: "width:4rem"
          }, {
            body: _withId(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
                icon: "pi pi-search"
              })];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["value"])])];
    }),
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        expander: true,
        headerStyle: "width: 3rem"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "name",
        header: "Name",
        sortable: true
      }, {
        body: _withId(function (slotProps) {
          return [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.name), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Image"
      }, {
        body: _withId(function (slotProps) {
          return [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
            src: 'assets/layout/images/product/' + slotProps.data.image,
            alt: slotProps.data.image,
            "class": "product-image"
          }, null, 8
          /* PROPS */
          , ["src", "alt"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "price",
        header: "Price",
        sortable: true
      }, {
        body: _withId(function (slotProps) {
          return [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCurrency(slotProps.data.price)), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "category",
        header: "Category",
        sortable: true
      }, {
        body: _withId(function (slotProps) {
          return [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCurrency(slotProps.data.category)), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "rating",
        header: "Reviews",
        sortable: true
      }, {
        body: _withId(function (slotProps) {
          return [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Rating, {
            modelValue: slotProps.data.rating,
            readonly: true,
            cancel: false
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "inventoryStatus",
        header: "Status",
        sortable: true
      }, {
        body: _withId(function (slotProps) {
          return [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
            "class": 'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.inventoryStatus), 3
          /* TEXT, CLASS */
          )];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "expandedRows", "onRowExpand", "onRowCollapse"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    value: $data.customer3,
    rowGroupMode: "subheader",
    groupRowsBy: "representative.name",
    sortMode: "single",
    sortField: "representative.name",
    sortOrder: 1,
    scrollable: "",
    scrollHeight: "400px"
  }, {
    groupheader: _withId(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
        alt: slotProps.data.representative.name,
        src: 'assets/layout/images/avatar/' + slotProps.data.representative.image,
        width: "32",
        style: {
          "vertical-align": "middle"
        }
      }, null, 8
      /* PROPS */
      , ["alt", "src"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.representative.name), 1
      /* TEXT */
      )];
    }),
    groupfooter: _withId(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_53, "Total Customers: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.calculateCustomerTotal(slotProps.data.representative.name)), 1
      /* TEXT */
      )];
    }),
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "representative.name",
        header: "Representative"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "name",
        header: "Name",
        style: {
          "min-width": "200px"
        }
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "country",
        header: "Country",
        style: {
          "min-width": "200px"
        }
      }, {
        body: _withId(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
            src: "assets/layout/flags/flag_placeholder.png",
            "class": 'flag flag-' + slotProps.data.country.code,
            width: "30"
          }, null, 2
          /* CLASS */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.country.name), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "company",
        header: "Company",
        style: {
          "min-width": "200px"
        }
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "status",
        header: "Status",
        style: {
          "min-width": "200px"
        }
      }, {
        body: _withId(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
            "class": 'customer-badge status-' + slotProps.data.status
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.status), 3
          /* TEXT, CLASS */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "date",
        header: "Date",
        style: {
          "min-width": "200px"
        }
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value"])])])]);
});

/***/ }),

/***/ "./resources/js/service/CustomerService.js":
/*!*************************************************!*\
  !*** ./resources/js/service/CustomerService.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CustomerService = /*#__PURE__*/function () {
  function CustomerService() {
    _classCallCheck(this, CustomerService);
  }

  _createClass(CustomerService, [{
    key: "getCustomersSmall",
    value: function getCustomersSmall() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default().get("assets/layout/data/customers-small.json").then(function (res) {
        return res.data.data;
      });
    }
  }, {
    key: "getCustomersMedium",
    value: function getCustomersMedium() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default().get("assets/layout/data/customers-medium.json").then(function (res) {
        return res.data.data;
      });
    }
  }, {
    key: "getCustomersLarge",
    value: function getCustomersLarge() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default().get("assets/layout/data/customers-large.json").then(function (res) {
        return res.data.data;
      });
    }
  }, {
    key: "getCustomersXLarge",
    value: function getCustomersXLarge() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default().get("assets/layout/data/customers-xlarge.json").then(function (res) {
        return res.data.data;
      });
    }
  }]);

  return CustomerService;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "[data-v-204a1f14] .p-datatable-frozen-tbody {\n  font-weight: bold;\n}\n[data-v-204a1f14] .p-datatable-scrollable .p-frozen-column {\n  font-weight: bold;\n}\n[data-v-204a1f14] .p-progressbar {\n  height: .5rem;\n  background-color: #D8DADC;\n}\n[data-v-204a1f14] .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n.p-datatable .p-column-filter[data-v-204a1f14] {\n  display: none;\n}\n.table-header[data-v-204a1f14] {\n  display: flex;\n  justify-content: space-between;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-header {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-paginator {\n  padding: 1rem;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {\n  text-align: left;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n  cursor: auto;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {\n  text-transform: uppercase;\n}\n\n/* Responsive */\n.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title[data-v-204a1f14] {\n  display: none;\n}\n.customer-badge[data-v-204a1f14] {\n  border-radius: 2px;\n  padding: .25em .5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: .3px;\n}\n.customer-badge.status-qualified[data-v-204a1f14] {\n  background: #C8E6C9;\n  color: #256029;\n}\n.customer-badge.status-unqualified[data-v-204a1f14] {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.customer-badge.status-negotiation[data-v-204a1f14] {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.customer-badge.status-new[data-v-204a1f14] {\n  background: #B3E5FC;\n  color: #23547B;\n}\n.customer-badge.status-renewal[data-v-204a1f14] {\n  background: #ECCFFF;\n  color: #694382;\n}\n.customer-badge.status-proposal[data-v-204a1f14] {\n  background: #FFD8B2;\n  color: #805B36;\n}\n.p-progressbar-value.ui-widget-header[data-v-204a1f14] {\n  background: #607d8b;\n}\n@media (max-width: 640px) {\n.p-progressbar[data-v-204a1f14] {\n    margin-top: .5rem;\n}\n}\n.product-image[data-v-204a1f14] {\n  width: 100px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.orders-subtable[data-v-204a1f14] {\n  padding: 1rem;\n}\n.product-badge[data-v-204a1f14] {\n  border-radius: 2px;\n  padding: .25em .5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: .3px;\n}\n.product-badge.status-instock[data-v-204a1f14] {\n  background: #C8E6C9;\n  color: #256029;\n}\n.product-badge.status-outofstock[data-v-204a1f14] {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.product-badge.status-lowstock[data-v-204a1f14] {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.order-badge[data-v-204a1f14] {\n  border-radius: 2px;\n  padding: .25em .5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: .3px;\n}\n.order-badge.order-delivered[data-v-204a1f14] {\n  background: #C8E6C9;\n  color: #256029;\n}\n.order-badge.order-cancelled[data-v-204a1f14] {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.order-badge.order-pending[data-v-204a1f14] {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.order-badge.order-returned[data-v-204a1f14] {\n  background: #ECCFFF;\n  color: #694382;\n}\n@media screen and (max-width: 960px) {\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-thead > tr > th,[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-tfoot > tr > td {\n    display: none !important;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-tbody > tr {\n    border-bottom: 1px solid var(--surface-d);\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n    text-align: left !important;\n    display: block;\n    border: 0 none !important;\n    width: 100% !important;\n    float: left;\n    clear: left;\n    border: 0 none;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n    padding: .4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -.4rem 1rem -.4rem -.4rem;\n    font-weight: bold;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-progressbar {\n    margin-top: .5rem;\n    display: inline-block;\n    width: 60%;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-rating {\n    display: inline-block;\n}\n[data-v-204a1f14] .p-datatable.p-datatable-customers .p-datatable-tbody > tr.p-rowgroup-footer {\n    display: flex;\n}\n}\n.true-icon[data-v-204a1f14] {\n  color: #256029;\n}\n.false-icon[data-v-204a1f14] {\n  color: #C63737;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableDemo_vue_vue_type_style_index_0_id_204a1f14_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableDemo_vue_vue_type_style_index_0_id_204a1f14_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableDemo_vue_vue_type_style_index_0_id_204a1f14_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/TableDemo.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/TableDemo.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TableDemo_vue_vue_type_template_id_204a1f14_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableDemo.vue?vue&type=template&id=204a1f14&scoped=true */ "./resources/js/components/TableDemo.vue?vue&type=template&id=204a1f14&scoped=true");
/* harmony import */ var _TableDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableDemo.vue?vue&type=script&lang=js */ "./resources/js/components/TableDemo.vue?vue&type=script&lang=js");
/* harmony import */ var _TableDemo_vue_vue_type_style_index_0_id_204a1f14_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss */ "./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss");




;
_TableDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _TableDemo_vue_vue_type_template_id_204a1f14_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_TableDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-204a1f14"
/* hot reload */
if (false) {}

_TableDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/TableDemo.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TableDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/TableDemo.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/TableDemo.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TableDemo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/TableDemo.vue?vue&type=template&id=204a1f14&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/TableDemo.vue?vue&type=template&id=204a1f14&scoped=true ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableDemo_vue_vue_type_template_id_204a1f14_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableDemo_vue_vue_type_template_id_204a1f14_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TableDemo.vue?vue&type=template&id=204a1f14&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=template&id=204a1f14&scoped=true");


/***/ }),

/***/ "./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableDemo_vue_vue_type_style_index_0_id_204a1f14_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/TableDemo.vue?vue&type=style&index=0&id=204a1f14&scoped=true&lang=scss");


/***/ })

}]);