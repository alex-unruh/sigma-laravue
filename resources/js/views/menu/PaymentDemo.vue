<template>
  <div class="stepsdemo-content">
    <i class="pi pi-fw pi-money-bill" />
    <p>Payment Component Content via Child Route</p>
  </div>
</template>

<script>
import Nested from "@/views/ui/MenuDemo";
import Layout from "@/layout/App";
export default {
  layout: [Layout, Nested],
};
</script>
