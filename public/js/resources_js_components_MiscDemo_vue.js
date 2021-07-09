(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_MiscDemo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MiscDemo.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MiscDemo.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      value: 0
    };
  },
  interval: null,
  methods: {
    startProgress: function startProgress() {
      var _this = this;

      this.interval = setInterval(function () {
        var newValue = _this.value + Math.floor(Math.random() * 10) + 1;

        if (newValue >= 100) {
          newValue = 100;
        }

        _this.value = newValue;
      }, 2000);
    },
    endProgress: function endProgress() {
      clearInterval(this.interval);
      this.interval = null;
    }
  },
  mounted: function mounted() {
    this.startProgress();
  },
  beforeUnmount: function beforeUnmount() {
    this.endProgress();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MiscDemo.vue?vue&type=template&id=8603724c&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MiscDemo.vue?vue&type=template&id=8603724c&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-8603724c");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-8603724c");

var _hoisted_1 = {
  "class": "p-grid misc-layout"
};
var _hoisted_2 = {
  "class": "p-col-12"
};
var _hoisted_3 = {
  "class": "card"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "ProgressBar", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "p-grid"
};
var _hoisted_6 = {
  "class": "p-col"
};
var _hoisted_7 = {
  "class": "p-col"
};
var _hoisted_8 = {
  "class": "p-col-12 p-lg-6"
};
var _hoisted_9 = {
  "class": "card"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, "Badge", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Numbers", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "badges"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Positioned Badge", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "pi pi-bell p-mr-4 p-text-secondary",
  style: {
    "font-size": "2rem"
  }
};
var _hoisted_15 = {
  "class": "pi pi-calendar p-mr-4 p-text-secondary",
  style: {
    "font-size": "2rem"
  }
};
var _hoisted_16 = {
  "class": "pi pi-envelope p-text-secondary",
  style: {
    "font-size": "2rem"
  }
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Inline Button Badge", -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Sizes", -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "badges"
};
var _hoisted_20 = {
  "class": "card"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, "Avatar", -1
/* HOISTED */
);

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Avatar Group", -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Label - Circle", -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Icon - Badge", -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "card"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, "ScrollTop", -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. ", -1
/* HOISTED */
);

var _hoisted_28 = {
  "class": "p-col-12 p-lg-6"
};
var _hoisted_29 = {
  "class": "card"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, "Tag", -1
/* HOISTED */
);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Tags", -1
/* HOISTED */
);

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Pills", -1
/* HOISTED */
);

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Icons", -1
/* HOISTED */
);

var _hoisted_34 = {
  "class": "card"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, "Chip", -1
/* HOISTED */
);

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Basic", -1
/* HOISTED */
);

var _hoisted_37 = {
  "class": "p-d-flex p-ai-center p-flex-column p-flex-sm-row"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Icon", -1
/* HOISTED */
);

var _hoisted_39 = {
  "class": "p-d-flex p-ai-center p-flex-column p-flex-sm-row"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Image", -1
/* HOISTED */
);

var _hoisted_41 = {
  "class": "p-d-flex p-ai-center p-flex-column p-flex-sm-row"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Styling", -1
/* HOISTED */
);

var _hoisted_43 = {
  "class": "p-d-flex p-ai-center p-flex-column p-flex-sm-row"
};
var _hoisted_44 = {
  "class": "card"
};

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", null, "Skeleton", -1
/* HOISTED */
);

var _hoisted_46 = {
  "class": "custom-skeleton p-p-4"
};
var _hoisted_47 = {
  "class": "p-d-flex p-mb-3"
};
var _hoisted_48 = {
  "class": "p-d-flex p-jc-between p-mt-3"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ProgressBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ProgressBar");

  var _component_Badge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Badge");

  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");

  var _component_Avatar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Avatar");

  var _component_AvatarGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AvatarGroup");

  var _component_ScrollTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ScrollTop");

  var _component_ScrollPanel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ScrollPanel");

  var _component_Tag = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Tag");

  var _component_Chip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Chip");

  var _component_Skeleton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Skeleton");

  var _directive_badge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("badge");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ProgressBar, {
    value: $data.value
  }, null, 8
  /* PROPS */
  , ["value"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ProgressBar, {
    value: 50,
    showValue: false
  })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [_hoisted_10, _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Badge, {
    value: 2,
    "class": "p-mr-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Badge, {
    value: 8,
    severity: "success",
    "class": "p-mr-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Badge, {
    value: 4,
    severity: "info",
    "class": "p-mr-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Badge, {
    value: 12,
    severity: "warning",
    "class": "p-mr-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Badge, {
    value: 3,
    severity: "danger"
  })]), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", _hoisted_14, null, 512
  /* NEED_PATCH */
  ), [[_directive_badge, 2]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", _hoisted_15, null, 512
  /* NEED_PATCH */
  ), [[_directive_badge, '10+', void 0, {
    danger: true
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", _hoisted_16, null, 512
  /* NEED_PATCH */
  ), [[_directive_badge, void 0, void 0, {
    danger: true
  }]]), _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    label: "Emails",
    badge: "8",
    "class": "p-mr-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    label: "Messages",
    icon: "pi pi-users",
    "class": "p-button-warning",
    badge: "8",
    badgeClass: "p-badge-danger"
  }), _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Badge, {
    value: 2,
    "class": "p-mr-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Badge, {
    value: 4,
    size: "large",
    severity: "warning",
    "class": "p-mr-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Badge, {
    value: 6,
    size: "xlarge",
    severity: "success",
    "class": "p-mr-2"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [_hoisted_21, _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AvatarGroup, {
    "class": "p-mb-3"
  }, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Avatar, {
        image: "assets/layout/images/avatar/amyelsner.png",
        size: "large",
        shape: "circle"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Avatar, {
        image: "assets/layout/images/avatar/asiyajavayant.png",
        size: "large",
        shape: "circle"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Avatar, {
        image: "assets/layout/images/avatar/onyamalimba.png",
        size: "large",
        shape: "circle"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Avatar, {
        image: "assets/layout/images/avatar/ionibowcher.png",
        size: "large",
        shape: "circle"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Avatar, {
        image: "assets/layout/images/avatar/xuxuefeng.png",
        size: "large",
        shape: "circle"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Avatar, {
        label: "+2",
        shape: "circle",
        size: "large",
        style: {
          'background-color': '#9c27b0',
          'color': '#ffffff'
        }
      })];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Avatar, {
    label: "P",
    "class": "p-mr-2",
    size: "xlarge",
    shape: "circle"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Avatar, {
    label: "V",
    "class": "p-mr-2",
    size: "large",
    style: {
      'background-color': '#2196F3',
      'color': '#ffffff'
    },
    shape: "circle"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Avatar, {
    label: "U",
    "class": "p-mr-2",
    style: {
      'background-color': '#9c27b0',
      'color': '#ffffff'
    },
    shape: "circle"
  }), _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Avatar, {
    icon: "pi pi-user",
    "class": "p-mr-2",
    size: "xlarge"
  }, null, 512
  /* NEED_PATCH */
  ), [[_directive_badge, 4, void 0, {
    success: true
  }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ScrollPanel, {
    style: {
      width: '250px',
      height: '200px'
    }
  }, {
    "default": _withId(function () {
      return [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ScrollTop, {
        target: "parent",
        "class": "custom-scrolltop",
        threshold: 100,
        icon: "pi pi-arrow-up"
      })];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_29, [_hoisted_30, _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tag, {
    "class": "p-mr-2",
    value: "Primary"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tag, {
    "class": "p-mr-2",
    severity: "success",
    value: "Success"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tag, {
    "class": "p-mr-2",
    severity: "info",
    value: "Info"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tag, {
    "class": "p-mr-2",
    severity: "warning",
    value: "Warning"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tag, {
    severity: "danger",
    value: "Danger"
  }), _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tag, {
    "class": "p-mr-2",
    value: "Primary",
    rounded: true
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tag, {
    "class": "p-mr-2",
    severity: "success",
    value: "Success",
    rounded: true
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tag, {
    "class": "p-mr-2",
    severity: "info",
    value: "Info",
    rounded: true
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tag, {
    "class": "p-mr-2",
    severity: "warning",
    value: "Warning",
    rounded: true
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tag, {
    severity: "danger",
    value: "Danger",
    rounded: true
  }), _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tag, {
    "class": "p-mr-2",
    icon: "pi pi-user",
    value: "Primary"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tag, {
    "class": "p-mr-2",
    icon: "pi pi-check",
    severity: "success",
    value: "Success"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tag, {
    "class": "p-mr-2",
    icon: "pi pi-info-circle",
    severity: "info",
    value: "Info"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tag, {
    "class": "p-mr-2",
    con: "pi pi-exclamation-triangle",
    severity: "warning",
    value: "Warning"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tag, {
    icon: "pi pi-times",
    severity: "danger",
    value: "Danger"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_34, [_hoisted_35, _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Chip, {
    label: "Action",
    "class": "p-mr-2 p-mb-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Chip, {
    label: "Comedy",
    "class": "p-mr-2 p-mb-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Chip, {
    label: "Mystery",
    "class": "p-mr-2 p-mb-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Chip, {
    label: "Thriller",
    removable: true,
    "class": "p-mb-2"
  })]), _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Chip, {
    label: "Apple",
    icon: "pi pi-apple",
    "class": "p-mr-2 p-mb-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Chip, {
    label: "Facebook",
    icon: "pi pi-facebook",
    "class": "p-mr-2 p-mb-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Chip, {
    label: "Google",
    icon: "pi pi-google",
    "class": "p-mr-2 p-mb-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Chip, {
    label: "Microsoft",
    icon: "pi pi-microsoft",
    removable: true,
    "class": "p-mb-2"
  })]), _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Chip, {
    label: "Amy Elsner",
    image: "assets/layout/images/avatar/amyelsner.png",
    "class": "p-mr-2 p-mb-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Chip, {
    label: "Asiya Javayant",
    image: "assets/layout/images/avatar/asiyajavayant.png",
    "class": "p-mr-2 p-mb-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Chip, {
    label: "Onyama Limba",
    image: "assets/layout/images/avatar/onyamalimba.png",
    "class": "p-mr-2 p-mb-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Chip, {
    label: "Xuxue Feng",
    image: "assets/layout/images/avatar/xuxuefeng.png",
    removable: true,
    "class": "p-mb-2"
  })]), _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Chip, {
    label: "Action",
    "class": "p-mr-2 p-mb-2 custom-chip"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Chip, {
    label: "Comedy",
    "class": "p-mr-2 p-mb-2 custom-chip"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Chip, {
    label: "Onyama Limba",
    image: "assets/layout/images/avatar/onyamalimba.png",
    "class": "p-mr-2 p-mb-2 custom-chip"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Chip, {
    label: "Xuxue Feng",
    image: "assets/layout/images/avatar/xuxuefeng.png",
    removable: true,
    "class": "p-mb-2 custom-chip"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Skeleton, {
    shape: "circle",
    size: "4rem",
    "class": "p-mr-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Skeleton, {
    width: "10rem",
    "class": "p-mb-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Skeleton, {
    width: "5rem",
    "class": "p-mb-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Skeleton, {
    height: ".5rem"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Skeleton, {
    width: "100%",
    height: "150px"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Skeleton, {
    width: "4rem",
    height: "2rem"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Skeleton, {
    width: "4rem",
    height: "2rem"
  })])])])])]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MiscDemo.vue?vue&type=style&index=0&id=8603724c&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MiscDemo.vue?vue&type=style&index=0&id=8603724c&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".badges .p-badge[data-v-8603724c], .badges .p-tag[data-v-8603724c] {\n  margin-right: .5rem;\n}\n.p-button[data-v-8603724c] {\n  margin-right: .5rem;\n}\n.p-overlay-badge[data-v-8603724c] {\n  margin-right: 2rem;\n}\n[data-v-8603724c] .custom-scrolltop {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 4px;\n  background-color: var(--primary-color);\n}\n[data-v-8603724c] .custom-scrolltop .p-scrolltop-icon {\n  font-size: 1rem;\n  color: var(--primary-color-text);\n}\n[data-v-8603724c] .custom-scrolltop:hover {\n  background-color: var(--primary-color);\n}\n[data-v-8603724c] .custom-skeleton {\n  border: 1px solid var(--surface-d);\n  border-radius: 4px;\n}\n[data-v-8603724c] .custom-skeleton ul {\n  list-style: none;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MiscDemo.vue?vue&type=style&index=0&id=8603724c&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MiscDemo.vue?vue&type=style&index=0&id=8603724c&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MiscDemo_vue_vue_type_style_index_0_id_8603724c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MiscDemo.vue?vue&type=style&index=0&id=8603724c&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MiscDemo.vue?vue&type=style&index=0&id=8603724c&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MiscDemo_vue_vue_type_style_index_0_id_8603724c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MiscDemo_vue_vue_type_style_index_0_id_8603724c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/MiscDemo.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/MiscDemo.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MiscDemo_vue_vue_type_template_id_8603724c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MiscDemo.vue?vue&type=template&id=8603724c&scoped=true */ "./resources/js/components/MiscDemo.vue?vue&type=template&id=8603724c&scoped=true");
/* harmony import */ var _MiscDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MiscDemo.vue?vue&type=script&lang=js */ "./resources/js/components/MiscDemo.vue?vue&type=script&lang=js");
/* harmony import */ var _MiscDemo_vue_vue_type_style_index_0_id_8603724c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MiscDemo.vue?vue&type=style&index=0&id=8603724c&lang=scss&scoped=true */ "./resources/js/components/MiscDemo.vue?vue&type=style&index=0&id=8603724c&lang=scss&scoped=true");




;
_MiscDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _MiscDemo_vue_vue_type_template_id_8603724c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_MiscDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-8603724c"
/* hot reload */
if (false) {}

_MiscDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/MiscDemo.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_MiscDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/MiscDemo.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/MiscDemo.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MiscDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MiscDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MiscDemo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MiscDemo.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/MiscDemo.vue?vue&type=template&id=8603724c&scoped=true":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/MiscDemo.vue?vue&type=template&id=8603724c&scoped=true ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MiscDemo_vue_vue_type_template_id_8603724c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MiscDemo_vue_vue_type_template_id_8603724c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MiscDemo.vue?vue&type=template&id=8603724c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MiscDemo.vue?vue&type=template&id=8603724c&scoped=true");


/***/ }),

/***/ "./resources/js/components/MiscDemo.vue?vue&type=style&index=0&id=8603724c&lang=scss&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/MiscDemo.vue?vue&type=style&index=0&id=8603724c&lang=scss&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MiscDemo_vue_vue_type_style_index_0_id_8603724c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MiscDemo.vue?vue&type=style&index=0&id=8603724c&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MiscDemo.vue?vue&type=style&index=0&id=8603724c&lang=scss&scoped=true");


/***/ })

}]);