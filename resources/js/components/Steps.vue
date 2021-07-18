<template>
  <div :id="id" :class="containerClass">
    <ul role="tablist">
      <template v-for="(item, index) of model" :key="item.to">
        <li v-if="visible(item)" :class="getItemClass(item)" :style="item.style" role="tab" :aria-selected="isActive(item)" :aria-expanded="isActive(item)">
          <inertia-link @click="onItemClick(event, item, navigate)" class="p-menuitem-link" :href="route(item.to)" v-if="!isItemDisabled(item)" custom preserve-scroll preserve-state>
            <span class="p-steps-number">{{ index + 1 }}</span>
            <span class="p-steps-title">{{ item.label }}</span>
          </inertia-link>
          <span v-else class="p-menuitem-link" role="presentation">
            <span class="p-steps-number">{{ index + 1 }}</span>
            <span class="p-steps-title">{{ item.label }}</span>
          </span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { UniqueComponentId } from "primevue/utils";

export default {
  props: {
    id: {
      type: String,
      default: UniqueComponentId(),
    },
    model: {
      type: Array,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: true,
    },
  },
  data(){
    return {
      active: null
    }
  },
  methods: {
    onItemClick(event, item, navigate) {
      if (item.disabled || this.readonly) {
        event.preventDefault();
        return;
      }

      if (item.command) {
        item.command({
          originalEvent: event,
          item: item,
        });
      }

      this.active = item.to;
    },
    isActive(item) {
      return item.to === this.active;
    },
    getItemClass(item) {
      return [
        "p-steps-item",
        item.class,
        {
          "p-highlight p-steps-current": this.isActive(item),
          "p-disabled": this.isItemDisabled(item),
        },
      ];
    },
    isItemDisabled(item) {
      return item.disabled || (this.readonly && !this.isActive(item));
    },
    visible(item) {
      return typeof item.visible === "function" ? item.visible() : item.visible !== false;
    },
  },
  computed: {
    activeRoute() {
      return this.route().current();
    },
    containerClass() {
      return ["p-steps p-component", { "p-readonly": this.readonly }];
    },
  },
};
</script>

<style>
.p-steps {
  position: relative;
}

.p-steps ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
}

.p-steps-item {
  position: relative;
  display: flex;
  justify-content: center;
  flex: 1 1 auto;
}

.p-steps-item .p-menuitem-link {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  text-decoration: none;
}

.p-steps.p-steps-readonly .p-steps-item {
  cursor: auto;
}

.p-steps-item.p-steps-current .p-menuitem-link {
  cursor: default;
}

.p-steps-title {
  white-space: nowrap;
}

.p-steps-number {
  display: flex;
  align-items: center;
  justify-content: center;
}

.p-steps-title {
  display: block;
}
</style>
