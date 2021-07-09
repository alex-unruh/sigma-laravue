require("./bootstrap")
import { createApp, h, reactive } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "prismjs/themes/prism-coy.css";
import "@fullcalendar/core/main.min.css";
import "@fullcalendar/daygrid/main.min.css";
import "@fullcalendar/timegrid/main.min.css";
import "./assets/layout/layout.scss";
import "./assets/layout/flags/flags.css";

import router from "./router";
import PrimeVue from "primevue/config";
import AutoComplete from "primevue/autocomplete";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import Badge from "primevue/badge";
import BadgeDirective from "primevue/badgedirective";
import Button from "primevue/button";
import Breadcrumb from "primevue/breadcrumb";
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import Carousel from "primevue/carousel";
import Chart from "primevue/chart";
import Checkbox from "primevue/checkbox";
import Chip from "primevue/chip";
import Chips from "primevue/chips";
import ColorPicker from "primevue/colorpicker";
import Column from "primevue/column";
import ConfirmDialog from "primevue/confirmdialog";
import ConfirmPopup from "primevue/confirmpopup";
import ConfirmationService from "primevue/confirmationservice";
import ContextMenu from "primevue/contextmenu";
import DataTable from "primevue/datatable";
import DataView from "primevue/dataview";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import Dialog from "primevue/dialog";
import Divider from "primevue/divider";
import Dropdown from "primevue/dropdown";
import Fieldset from "primevue/fieldset";
import FileUpload from "primevue/fileupload";
import FullCalendar from "primevue/fullcalendar";
import InlineMessage from "primevue/inlinemessage";
import Inplace from "primevue/inplace";
import InputMask from "primevue/inputmask";
import InputNumber from "primevue/inputnumber";
import InputSwitch from "primevue/inputswitch";
import InputText from "primevue/inputtext";
import Knob from "primevue/knob";
import Galleria from "primevue/galleria";
import Listbox from "primevue/listbox";
import MegaMenu from "primevue/megamenu";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Message from "primevue/message";
import MultiSelect from "primevue/multiselect";
import OrderList from "primevue/orderlist";
import OrganizationChart from "primevue/organizationchart";
import OverlayPanel from "primevue/overlaypanel";
import Paginator from "primevue/paginator";
import Panel from "primevue/panel";
import PanelMenu from "primevue/panelmenu";
import Password from "primevue/password";
import PickList from "primevue/picklist";
import ProgressBar from "primevue/progressbar";
import Rating from "primevue/rating";
import RadioButton from "primevue/radiobutton";
import Ripple from "primevue/ripple";
import SelectButton from "primevue/selectbutton";
import ScrollPanel from "primevue/scrollpanel";
import ScrollTop from "primevue/scrolltop";
import Slider from "primevue/slider";
import Sidebar from "primevue/sidebar";
import Skeleton from "primevue/skeleton";
import SplitButton from "primevue/splitbutton";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import Steps from "primevue/steps";
import TabMenu from "primevue/tabmenu";
import Tag from "primevue/tag";
import TieredMenu from "primevue/tieredmenu";
import Textarea from "primevue/textarea";
import Timeline from "primevue/timeline";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Toolbar from "primevue/toolbar";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Tooltip from "primevue/tooltip";
import ToggleButton from "primevue/togglebutton";
import Tree from "primevue/tree";
import TreeTable from "primevue/treetable";
import TriStateCheckbox from "primevue/tristatecheckbox";

import CodeHighlight from "./AppCodeHighlight";

router.beforeEach(function (to, from, next) {
    window.scrollTo(0, 0);
    next();
});

InertiaProgress.init();

createInertiaApp({
    resolve: (name) => import(`./views/${name}`),
    setup({ el, app, props, plugin }) {
       const vue = createApp({ render: () => h(app, props) })
        .use(plugin)
        .mixin({ methods: { route: window.route } })

        .use(PrimeVue, { ripple: true })
        .use(ConfirmationService)
        .use(ToastService)
        .use(router)

        .directive("tooltip", Tooltip)
        .directive("ripple", Ripple)
        .directive("code", CodeHighlight)
        .directive("badge", BadgeDirective)

        .component("Accordion", Accordion)
        .component("AccordionTab", AccordionTab)
        .component("AutoComplete", AutoComplete)
        .component("Avatar", Avatar)
        .component("AvatarGroup", AvatarGroup)
        .component("Badge", Badge)
        .component("Breadcrumb", Breadcrumb)
        .component("Button", Button)
        .component("Calendar", Calendar)
        .component("Card", Card)
        .component("Carousel", Carousel)
        .component("Chart", Chart)
        .component("Checkbox", Checkbox)
        .component("Chip", Chip)
        .component("Chips", Chips)
        .component("ColorPicker", ColorPicker)
        .component("Column", Column)
        .component("ConfirmDialog", ConfirmDialog)
        .component("ConfirmPopup", ConfirmPopup)
        .component("ContextMenu", ContextMenu)
        .component("DataTable", DataTable)
        .component("DataView", DataView)
        .component("DataViewLayoutOptions", DataViewLayoutOptions)
        .component("Dialog", Dialog)
        .component("Divider", Divider)
        .component("Dropdown", Dropdown)
        .component("Fieldset", Fieldset)
        .component("FileUpload", FileUpload)
        .component("FullCalendar", FullCalendar)
        .component("InlineMessage", InlineMessage)
        .component("Inplace", Inplace)
        .component("InputMask", InputMask)
        .component("InputNumber", InputNumber)
        .component("InputSwitch", InputSwitch)
        .component("InputText", InputText)
        .component("Galleria", Galleria)
        .component("Knob", Knob)
        .component("Listbox", Listbox)
        .component("MegaMenu", MegaMenu)
        .component("Menu", Menu)
        .component("Menubar", Menubar)
        .component("Message", Message)
        .component("MultiSelect", MultiSelect)
        .component("OrderList", OrderList)
        .component("OrganizationChart", OrganizationChart)
        .component("OverlayPanel", OverlayPanel)
        .component("Paginator", Paginator)
        .component("Panel", Panel)
        .component("PanelMenu", PanelMenu)
        .component("Password", Password)
        .component("PickList", PickList)
        .component("ProgressBar", ProgressBar)
        .component("RadioButton", RadioButton)
        .component("Rating", Rating)
        .component("SelectButton", SelectButton)
        .component("ScrollPanel", ScrollPanel)
        .component("ScrollTop", ScrollTop)
        .component("Slider", Slider)
        .component("Sidebar", Sidebar)
        .component("Skeleton", Skeleton)
        .component("SplitButton", SplitButton)
        .component("Splitter", Splitter)
        .component("SplitterPanel", SplitterPanel)
        .component("Steps", Steps)
        .component("TabMenu", TabMenu)
        .component("TabView", TabView)
        .component("TabPanel", TabPanel)
        .component("Tag", Tag)
        .component("Textarea", Textarea)
        .component("TieredMenu", TieredMenu)
        .component("Timeline", Timeline)
        .component("Toast", Toast)
        .component("Toolbar", Toolbar)
        .component("ToggleButton", ToggleButton)
        .component("Tree", Tree)
        .component("TreeTable", TreeTable)
        .component("TriStateCheckbox", TriStateCheckbox);

        vue.config.globalProperties.$appState = reactive({
            inputStyle: "outlined",
        });

        vue.mount(el);

    },
});
