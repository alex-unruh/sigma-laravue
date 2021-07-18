<template>
  <nav class="p-breadcrumb p-component" aria-label="Breadcrumb">
    <ul>
      <li class="p-breadcrumb-home">
        <inertia-link :href="route(home.target)" class="p-menuitem-link">
          <i :class="home.icon"></i>&nbsp;
        </inertia-link>
      </li>
      <li v-for="(item, index) in model" :key="index" class="p-breadcrumb-chevron pi pi-chevron-right">
        <inertia-link :href="route(item.target)" class="p-menuitem-link">
          <i v-if="item.icon" :class="item.icon"></i>&nbsp;
          <span class="p-menuitem-text">{{ item.label }}</span>
        </inertia-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    model: Array,
    home: Object
  },
  computed: {
    containerClass() {
      return [{ "p-disabled": this.item.disabled }, this.item.class];
    },
    iconClass() {
      return ["p-menuitem-icon", this.item.icon];
    },
  },
};
</script>

<style>
.p-breadcrumb ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.p-breadcrumb .p-menuitem-text {
  line-height: 1;
}

.p-breadcrumb .p-menuitem-link {
  text-decoration: none;
}

li a{
  color: #999;
}
</style>
