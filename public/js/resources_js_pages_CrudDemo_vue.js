(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_CrudDemo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CrudDemo.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CrudDemo.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _service_ProductService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/ProductService */ "./resources/js/service/ProductService.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      products: null,
      productDialog: false,
      deleteProductDialog: false,
      deleteProductsDialog: false,
      product: {},
      selectedProducts: null,
      filters: {},
      submitted: false,
      statuses: [{
        label: 'INSTOCK',
        value: 'instock'
      }, {
        label: 'LOWSTOCK',
        value: 'lowstock'
      }, {
        label: 'OUTOFSTOCK',
        value: 'outofstock'
      }]
    };
  },
  productService: null,
  created: function created() {
    this.productService = new _service_ProductService__WEBPACK_IMPORTED_MODULE_0__.default();
  },
  mounted: function mounted() {
    var _this = this;

    this.productService.getProducts().then(function (data) {
      return _this.products = data;
    });
  },
  methods: {
    formatCurrency: function formatCurrency(value) {
      if (value) return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      return;
    },
    openNew: function openNew() {
      this.product = {};
      this.submitted = false;
      this.productDialog = true;
    },
    hideDialog: function hideDialog() {
      this.productDialog = false;
      this.submitted = false;
    },
    saveProduct: function saveProduct() {
      this.submitted = true;

      if (this.product.name.trim()) {
        if (this.product.id) {
          this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
          this.products[this.findIndexById(this.product.id)] = this.product;
          this.$toast.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Product Updated',
            life: 3000
          });
        } else {
          this.product.id = this.createId();
          this.product.code = this.createId();
          this.product.image = 'product-placeholder.svg';
          this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
          this.products.push(this.product);
          this.$toast.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Product Created',
            life: 3000
          });
        }

        this.productDialog = false;
        this.product = {};
      }
    },
    editProduct: function editProduct(product) {
      this.product = _objectSpread({}, product);
      this.productDialog = true;
    },
    confirmDeleteProduct: function confirmDeleteProduct(product) {
      this.product = product;
      this.deleteProductDialog = true;
    },
    deleteProduct: function deleteProduct() {
      var _this2 = this;

      this.products = this.products.filter(function (val) {
        return val.id !== _this2.product.id;
      });
      this.deleteProductDialog = false;
      this.product = {};
      this.$toast.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Product Deleted',
        life: 3000
      });
    },
    findIndexById: function findIndexById(id) {
      var index = -1;

      for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id === id) {
          index = i;
          break;
        }
      }

      return index;
    },
    createId: function createId() {
      var id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (var i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      return id;
    },
    exportCSV: function exportCSV() {
      this.$refs.dt.exportCSV();
    },
    confirmDeleteSelected: function confirmDeleteSelected() {
      this.deleteProductsDialog = true;
    },
    deleteSelectedProducts: function deleteSelectedProducts() {
      var _this3 = this;

      this.products = this.products.filter(function (val) {
        return !_this3.selectedProducts.includes(val);
      });
      this.deleteProductsDialog = false;
      this.selectedProducts = null;
      this.$toast.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Products Deleted',
        life: 3000
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CrudDemo.vue?vue&type=template&id=aa573f6c&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CrudDemo.vue?vue&type=template&id=aa573f6c&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-aa573f6c");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-aa573f6c");

var _hoisted_1 = {
  "class": "p-grid crud-demo"
};
var _hoisted_2 = {
  "class": "p-col-12"
};
var _hoisted_3 = {
  "class": "card"
};
var _hoisted_4 = {
  "class": "table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", {
  "class": "p-m-0"
}, "Manage Products", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "p-input-icon-left"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-search"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Code", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Name", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Image", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Price", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Category", -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Rating", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "p-column-title"
}, "Status", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "p-field"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "name"
}, "Name", -1
/* HOISTED */
);

var _hoisted_17 = {
  key: 0,
  "class": "p-invalid"
};
var _hoisted_18 = {
  "class": "p-field"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "description"
}, "Description", -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "p-field"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "inventoryStatus",
  "class": "p-mb-3"
}, "Inventory Status", -1
/* HOISTED */
);

var _hoisted_22 = {
  key: 0
};
var _hoisted_23 = {
  key: 1
};
var _hoisted_24 = {
  key: 2
};
var _hoisted_25 = {
  "class": "p-field"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "class": "p-mb-3"
}, "Category", -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "p-formgrid p-grid"
};
var _hoisted_28 = {
  "class": "p-field-radiobutton p-col-6"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "category1"
}, "Accessories", -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "p-field-radiobutton p-col-6"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "category2"
}, "Clothing", -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "p-field-radiobutton p-col-6"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "category3"
}, "Electronics", -1
/* HOISTED */
);

var _hoisted_34 = {
  "class": "p-field-radiobutton p-col-6"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "category4"
}, "Fitness", -1
/* HOISTED */
);

var _hoisted_36 = {
  "class": "p-formgrid p-grid"
};
var _hoisted_37 = {
  "class": "p-field p-col"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "price"
}, "Price", -1
/* HOISTED */
);

var _hoisted_39 = {
  "class": "p-field p-col"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "quantity"
}, "Quantity", -1
/* HOISTED */
);

var _hoisted_41 = {
  "class": "confirmation-content"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-exclamation-triangle p-mr-3",
  style: {
    "font-size": "2rem"
  }
}, null, -1
/* HOISTED */
);

var _hoisted_43 = {
  key: 0
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Are you sure you want to delete ");

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("?");

var _hoisted_46 = {
  "class": "confirmation-content"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-exclamation-triangle p-mr-3",
  style: {
    "font-size": "2rem"
  }
}, null, -1
/* HOISTED */
);

var _hoisted_48 = {
  key: 0
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Toast = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Toast");

  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");

  var _component_FileUpload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FileUpload");

  var _component_Toolbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Toolbar");

  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputText");

  var _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Column");

  var _component_Rating = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Rating");

  var _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataTable");

  var _component_Textarea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Textarea");

  var _component_Dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dropdown");

  var _component_RadioButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RadioButton");

  var _component_InputNumber = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputNumber");

  var _component_Dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dialog");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Toast), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Toolbar, {
    "class": "p-mb-4"
  }, {
    left: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        label: "New",
        icon: "pi pi-plus",
        "class": "p-button-success p-mr-2",
        onClick: $options.openNew
      }, null, 8
      /* PROPS */
      , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        label: "Delete",
        icon: "pi pi-trash",
        "class": "p-button-danger",
        onClick: $options.confirmDeleteSelected,
        disabled: !$data.selectedProducts || !$data.selectedProducts.length
      }, null, 8
      /* PROPS */
      , ["onClick", "disabled"])];
    }),
    right: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FileUpload, {
        mode: "basic",
        accept: "image/*",
        maxFileSize: 1000000,
        label: "Import",
        chooseLabel: "Import",
        "class": "p-mr-2 p-d-inline-block"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        label: "Export",
        icon: "pi pi-upload",
        "class": "p-button-help",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $options.exportCSV($event);
        })
      })];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    ref: "dt",
    value: $data.products,
    selection: $data.selectedProducts,
    "onUpdate:selection": _cache[3] || (_cache[3] = function ($event) {
      return $data.selectedProducts = $event;
    }),
    dataKey: "id",
    paginator: true,
    rows: 10,
    filters: $data.filters,
    paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
    rowsPerPageOptions: [5, 10, 25],
    currentPageReportTemplate: "Showing {first} to {last} of {totalRecords} products",
    responsiveLayout: "scroll"
  }, {
    header: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        modelValue: $data.filters['global'],
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.filters['global'] = $event;
        }),
        placeholder: "Search..."
      }, null, 8
      /* PROPS */
      , ["modelValue"])])])];
    }),
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        selectionMode: "multiple",
        headerStyle: "width: 3rem"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "code",
        header: "Code",
        sortable: true
      }, {
        body: _withId(function (slotProps) {
          return [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.code), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "name",
        header: "Name",
        sortable: true
      }, {
        body: _withId(function (slotProps) {
          return [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.name), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        header: "Image"
      }, {
        body: _withId(function (slotProps) {
          return [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
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
          return [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCurrency(slotProps.data.price)), 1
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
          return [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCurrency(slotProps.data.category)), 1
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
          return [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Rating, {
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
          return [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
            "class": 'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.data.inventoryStatus), 3
          /* TEXT, CLASS */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, null, {
        body: _withId(function (slotProps) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
            icon: "pi pi-pencil",
            "class": "p-button-rounded p-button-success p-mr-2",
            onClick: function onClick($event) {
              return $options.editProduct(slotProps.data);
            }
          }, null, 8
          /* PROPS */
          , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
            icon: "pi pi-trash",
            "class": "p-button-rounded p-button-warning",
            onClick: function onClick($event) {
              return $options.confirmDeleteProduct(slotProps.data);
            }
          }, null, 8
          /* PROPS */
          , ["onClick"])];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value", "selection", "filters"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
    visible: $data.productDialog,
    "onUpdate:visible": _cache[13] || (_cache[13] = function ($event) {
      return $data.productDialog = $event;
    }),
    style: {
      width: '450px'
    },
    header: "Product Details",
    modal: true,
    "class": "p-fluid"
  }, {
    footer: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        label: "Cancel",
        icon: "pi pi-times",
        "class": "p-button-text",
        onClick: $options.hideDialog
      }, null, 8
      /* PROPS */
      , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        label: "Save",
        icon: "pi pi-check",
        "class": "p-button-text",
        onClick: $options.saveProduct
      }, null, 8
      /* PROPS */
      , ["onClick"])];
    }),
    "default": _withId(function () {
      return [$data.product.image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("img", {
        key: 0,
        src: 'assets/demo/images/product/' + $data.product.image,
        alt: $data.product.image,
        "class": "product-image"
      }, null, 8
      /* PROPS */
      , ["src", "alt"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        id: "name",
        modelValue: $data.product.name,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.product.name = $event;
        }),
        modelModifiers: {
          trim: true
        },
        required: "true",
        autofocus: "",
        "class": {
          'p-invalid': $data.submitted && !$data.product.name
        }
      }, null, 8
      /* PROPS */
      , ["modelValue", "class"]), $data.submitted && !$data.product.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("small", _hoisted_17, "Name is required.")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Textarea, {
        id: "description",
        modelValue: $data.product.description,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $data.product.description = $event;
        }),
        required: "true",
        rows: "3",
        cols: "20"
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {
        id: "inventoryStatus",
        modelValue: $data.product.inventoryStatus,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $data.product.inventoryStatus = $event;
        }),
        options: $data.statuses,
        optionLabel: "label",
        placeholder: "Select a Status"
      }, {
        value: _withId(function (slotProps) {
          return [slotProps.value && slotProps.value.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
            "class": 'product-badge status-' + slotProps.value.value
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.value.label), 3
          /* TEXT, CLASS */
          )])) : slotProps.value && !slotProps.value.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
            "class": 'product-badge status-' + slotProps.value.toLowerCase()
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.value), 3
          /* TEXT, CLASS */
          )])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.placeholder), 1
          /* TEXT */
          ))];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue", "options"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RadioButton, {
        id: "category1",
        name: "category",
        value: "Accessories",
        modelValue: $data.product.category,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
          return $data.product.category = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"]), _hoisted_29]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RadioButton, {
        id: "category2",
        name: "category",
        value: "Clothing",
        modelValue: $data.product.category,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          return $data.product.category = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"]), _hoisted_31]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RadioButton, {
        id: "category3",
        name: "category",
        value: "Electronics",
        modelValue: $data.product.category,
        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
          return $data.product.category = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"]), _hoisted_33]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RadioButton, {
        id: "category4",
        name: "category",
        value: "Fitness",
        modelValue: $data.product.category,
        "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
          return $data.product.category = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"]), _hoisted_35])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputNumber, {
        id: "price",
        modelValue: $data.product.price,
        "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
          return $data.product.price = $event;
        }),
        mode: "currency",
        currency: "USD",
        locale: "en-US"
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputNumber, {
        id: "quantity",
        modelValue: $data.product.quantity,
        "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
          return $data.product.quantity = $event;
        }),
        integeronly: ""
      }, null, 8
      /* PROPS */
      , ["modelValue"])])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
    visible: $data.deleteProductDialog,
    "onUpdate:visible": _cache[15] || (_cache[15] = function ($event) {
      return $data.deleteProductDialog = $event;
    }),
    style: {
      width: '450px'
    },
    header: "Confirm",
    modal: true
  }, {
    footer: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        label: "No",
        icon: "pi pi-times",
        "class": "p-button-text",
        onClick: _cache[14] || (_cache[14] = function ($event) {
          return $data.deleteProductDialog = false;
        })
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        label: "Yes",
        icon: "pi pi-check",
        "class": "p-button-text",
        onClick: $options.deleteProduct
      }, null, 8
      /* PROPS */
      , ["onClick"])];
    }),
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_41, [_hoisted_42, $data.product ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.name), 1
      /* TEXT */
      ), _hoisted_45])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
    visible: $data.deleteProductsDialog,
    "onUpdate:visible": _cache[17] || (_cache[17] = function ($event) {
      return $data.deleteProductsDialog = $event;
    }),
    style: {
      width: '450px'
    },
    header: "Confirm",
    modal: true
  }, {
    footer: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        label: "No",
        icon: "pi pi-times",
        "class": "p-button-text",
        onClick: _cache[16] || (_cache[16] = function ($event) {
          return $data.deleteProductsDialog = false;
        })
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        label: "Yes",
        icon: "pi pi-check",
        "class": "p-button-text",
        onClick: $options.deleteSelectedProducts
      }, null, 8
      /* PROPS */
      , ["onClick"])];
    }),
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_46, [_hoisted_47, $data.product ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_48, "Are you sure you want to delete the selected products?")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"])])])]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CrudDemo.vue?vue&type=style&index=0&id=aa573f6c&scoped=true&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CrudDemo.vue?vue&type=style&index=0&id=aa573f6c&scoped=true&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".table-header[data-v-aa573f6c] {\n  display: flex;\n  justify-content: space-between;\n}\n.product-image[data-v-aa573f6c] {\n  width: 100px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.p-dialog .product-image[data-v-aa573f6c] {\n  width: 150px;\n  margin: 0 auto 2rem auto;\n  display: block;\n}\n.confirmation-content[data-v-aa573f6c] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.product-badge[data-v-aa573f6c] {\n  border-radius: 2px;\n  padding: .25em .5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: .3px;\n}\n.product-badge.status-instock[data-v-aa573f6c] {\n  background: #C8E6C9;\n  color: #256029;\n}\n.product-badge.status-outofstock[data-v-aa573f6c] {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.product-badge.status-lowstock[data-v-aa573f6c] {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n[data-v-aa573f6c] .p-toolbar {\n  flex-wrap: wrap;\n}\n[data-v-aa573f6c] .p-toolbar .p-button {\n  margin-bottom: .25rem;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CrudDemo.vue?vue&type=style&index=0&id=aa573f6c&scoped=true&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CrudDemo.vue?vue&type=style&index=0&id=aa573f6c&scoped=true&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDemo_vue_vue_type_style_index_0_id_aa573f6c_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CrudDemo.vue?vue&type=style&index=0&id=aa573f6c&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CrudDemo.vue?vue&type=style&index=0&id=aa573f6c&scoped=true&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDemo_vue_vue_type_style_index_0_id_aa573f6c_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDemo_vue_vue_type_style_index_0_id_aa573f6c_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/pages/CrudDemo.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/CrudDemo.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CrudDemo_vue_vue_type_template_id_aa573f6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrudDemo.vue?vue&type=template&id=aa573f6c&scoped=true */ "./resources/js/pages/CrudDemo.vue?vue&type=template&id=aa573f6c&scoped=true");
/* harmony import */ var _CrudDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CrudDemo.vue?vue&type=script&lang=js */ "./resources/js/pages/CrudDemo.vue?vue&type=script&lang=js");
/* harmony import */ var _CrudDemo_vue_vue_type_style_index_0_id_aa573f6c_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CrudDemo.vue?vue&type=style&index=0&id=aa573f6c&scoped=true&lang=scss */ "./resources/js/pages/CrudDemo.vue?vue&type=style&index=0&id=aa573f6c&scoped=true&lang=scss");




;
_CrudDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _CrudDemo_vue_vue_type_template_id_aa573f6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_CrudDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-aa573f6c"
/* hot reload */
if (false) {}

_CrudDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/pages/CrudDemo.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CrudDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/pages/CrudDemo.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/CrudDemo.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CrudDemo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CrudDemo.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/CrudDemo.vue?vue&type=template&id=aa573f6c&scoped=true":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/CrudDemo.vue?vue&type=template&id=aa573f6c&scoped=true ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDemo_vue_vue_type_template_id_aa573f6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDemo_vue_vue_type_template_id_aa573f6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CrudDemo.vue?vue&type=template&id=aa573f6c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CrudDemo.vue?vue&type=template&id=aa573f6c&scoped=true");


/***/ }),

/***/ "./resources/js/pages/CrudDemo.vue?vue&type=style&index=0&id=aa573f6c&scoped=true&lang=scss":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/CrudDemo.vue?vue&type=style&index=0&id=aa573f6c&scoped=true&lang=scss ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDemo_vue_vue_type_style_index_0_id_aa573f6c_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CrudDemo.vue?vue&type=style&index=0&id=aa573f6c&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CrudDemo.vue?vue&type=style&index=0&id=aa573f6c&scoped=true&lang=scss");


/***/ })

}]);