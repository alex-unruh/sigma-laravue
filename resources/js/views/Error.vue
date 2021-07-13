<template>
  <div>
    <inertia-head title="Error" />
    <div style="text-align: center">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
import Layout from "@/layout/App";

export default {
  layout: Layout,
  name: "Error",
  props: {
    status: Number,
  },
  computed: {
    title() {
      return {
        503: "503: Service Unavailable",
        500: "500: Server Error",
        404: "404: Page Not Found",
        403: "403: Forbidden",
      }[this.status];
    },
    description() {
      return {
        503: "pageError.503",
        500: "pageError.500",
        404: "pageError.404",
        403: "pageError.403",
      }[this.status];
    },
  },
};
</script>

