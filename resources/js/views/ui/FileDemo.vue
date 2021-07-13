<template>
  <inertia-head title="File Demo" />
  <div class="p-grid">
    <div class="p-col-12">
      <div class="card">
        <h5>Advanced</h5>
        <FileUpload
          name="demo[]"
          url="./upload.php"
          @upload="onUpload"
          :multiple="true"
          accept="image/*"
          :maxFileSize="1000000"
        />

        <h5>Basic</h5>
        <FileUpload
          mode="basic"
          name="demo[]"
          url="./upload.php"
          accept="image/*"
          :maxFileSize="1000000"
          @upload="onUpload"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Layout from "@/layout/App";
export default {
  layout: Layout,
  methods: {
    onUpload() {
      this.$toast.add({
        severity: "info",
        summary: "Success",
        detail: "File Uploaded",
        life: 3000,
      });
    },
  },
};
</script>

<style scoped></style>
