<template>
  <div class="stepsdemo-content">
    <i class="pi pi-fw pi-user" />
    <p>Personal Component Content via Child Route</p>
  </div>
</template>

<script>
import Nested from "@/views/ui/MenuDemo";
import Layout from "@/layout/App";
export default {
  layout: [Layout, Nested],
};
</script>
