(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_CalendarDemo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CalendarDemo.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CalendarDemo.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _service_EventService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/EventService */ "./resources/js/service/EventService.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    var _this = this;

    return {
      eventDialog: false,
      clickedEvent: null,
      changedEvent: {
        title: '',
        start: null,
        end: '',
        allDay: null
      },
      options: {
        plugins: [(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1___default()), (_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2___default()), (_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3___default())],
        defaultDate: '2019-01-01',
        header: {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        editable: true,
        eventClick: function eventClick(e) {
          _this.eventDialog = true;
          _this.clickedEvent = e.event;
          _this.changedEvent.title = _this.clickedEvent.title;
          _this.changedEvent.start = _this.clickedEvent.start;
          _this.changedEvent.end = _this.clickedEvent.end;
        }
      },
      events: null
    };
  },
  eventService: null,
  created: function created() {
    this.eventService = new _service_EventService__WEBPACK_IMPORTED_MODULE_0__.default();
  },
  mounted: function mounted() {
    var _this2 = this;

    this.eventService.getEvents().then(function (data) {
      return _this2.events = data;
    });
  },
  methods: {
    findIndexById: function findIndexById(id) {
      var index = -1;

      for (var i = 0; i < this.events.length; i++) {
        if (this.events[i].id === id) {
          index = i;
          break;
        }
      }

      return index;
    },
    save: function save() {
      this.eventDialog = false;
      this.clickedEvent.setProp('title', this.changedEvent.title);
      this.clickedEvent.setStart(this.changedEvent.start);
      this.clickedEvent.setEnd(this.changedEvent.end);
      this.clickedEvent.setAllDay(this.changedEvent.allDay);
      this.changedEvent = {
        title: '',
        start: null,
        end: '',
        allDay: null
      };
    },
    reset: function reset() {
      this.changedEvent.title = this.clickedEvent.title;
      this.changedEvent.start = this.clickedEvent.start;
      this.changedEvent.end = this.clickedEvent.end;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CalendarDemo.vue?vue&type=template&id=6ef5806c&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CalendarDemo.vue?vue&type=template&id=6ef5806c&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-6ef5806c");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6ef5806c");

var _hoisted_1 = {
  "class": "p-grid"
};
var _hoisted_2 = {
  "class": "p-col-12"
};
var _hoisted_3 = {
  "class": "card"
};
var _hoisted_4 = {
  "class": "p-fluid"
};
var _hoisted_5 = {
  "class": "p-field"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "title"
}, "Title", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "p-field"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "start"
}, "From", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "p-field"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "end"
}, "To", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "p-field-checkbox"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "allday"
}, "All Day", -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FullCalendar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FullCalendar");

  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputText");

  var _component_Calendar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Calendar");

  var _component_Checkbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Checkbox");

  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");

  var _component_Dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dialog");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FullCalendar, {
    events: $data.events,
    options: $data.options
  }, null, 8
  /* PROPS */
  , ["events", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
    visible: $data.eventDialog,
    "onUpdate:visible": _cache[5] || (_cache[5] = function ($event) {
      return $data.eventDialog = $event;
    }),
    style: {
      width: '450px'
    },
    header: "Event Details",
    modal: true,
    closable: true
  }, {
    footer: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        label: "Save",
        icon: "pi pi-check",
        "class": "p-button-text",
        onClick: $options.save
      }, null, 8
      /* PROPS */
      , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        label: "Reset",
        icon: "pi pi-refresh",
        "class": "p-button-text",
        onClick: $options.reset
      }, null, 8
      /* PROPS */
      , ["onClick"])];
    }),
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [_hoisted_6, $data.clickedEvent ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_InputText, {
        key: 0,
        id: "title",
        modelValue: $data.changedEvent.title,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.changedEvent.title = $event;
        }),
        required: "true",
        autofocus: ""
      }, null, 8
      /* PROPS */
      , ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [_hoisted_8, $data.clickedEvent ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Calendar, {
        key: 0,
        id: "start",
        modelValue: $data.changedEvent.start,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.changedEvent.start = $event;
        }),
        showTime: true,
        appendTo: "body"
      }, null, 8
      /* PROPS */
      , ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [_hoisted_10, $data.clickedEvent ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Calendar, {
        key: 0,
        id: "end",
        modelValue: $data.changedEvent.end,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.changedEvent.end = $event;
        }),
        showTime: true,
        appendTo: "body"
      }, null, 8
      /* PROPS */
      , ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Checkbox, {
        id: "allday",
        name: "allday",
        value: "All Day",
        modelValue: $data.changedEvent.allDay,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.changedEvent.allDay = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"]), _hoisted_12])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"])])])]);
});

/***/ }),

/***/ "./resources/js/pages/CalendarDemo.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/CalendarDemo.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CalendarDemo_vue_vue_type_template_id_6ef5806c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarDemo.vue?vue&type=template&id=6ef5806c&scoped=true */ "./resources/js/pages/CalendarDemo.vue?vue&type=template&id=6ef5806c&scoped=true");
/* harmony import */ var _CalendarDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarDemo.vue?vue&type=script&lang=js */ "./resources/js/pages/CalendarDemo.vue?vue&type=script&lang=js");



_CalendarDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _CalendarDemo_vue_vue_type_template_id_6ef5806c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_CalendarDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-6ef5806c"
/* hot reload */
if (false) {}

_CalendarDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/pages/CalendarDemo.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CalendarDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/pages/CalendarDemo.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/CalendarDemo.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CalendarDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CalendarDemo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CalendarDemo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CalendarDemo.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/CalendarDemo.vue?vue&type=template&id=6ef5806c&scoped=true":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/CalendarDemo.vue?vue&type=template&id=6ef5806c&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CalendarDemo_vue_vue_type_template_id_6ef5806c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CalendarDemo_vue_vue_type_template_id_6ef5806c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CalendarDemo.vue?vue&type=template&id=6ef5806c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CalendarDemo.vue?vue&type=template&id=6ef5806c&scoped=true");


/***/ })

}]);