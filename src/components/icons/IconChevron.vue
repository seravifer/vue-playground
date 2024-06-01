<script setup lang="ts">
defineProps<{
  fill?: string;
  height?: number | string;
  width?: number | string;
}>();
</script>

<template>
  <svg :width="width ?? 16" :height="height ?? 16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.3857 2.61432C10.5988 2.82733 10.5988 3.1727 10.3857 3.38571L5.77143 8.00001L10.3857 12.6143C10.5988 12.8273 10.5988 13.1727 10.3857 13.3857C10.1727 13.5987 9.82736 13.5987 9.61435 13.3857L4.61435 8.38571C4.40134 8.1727 4.40134 7.82733 4.61435 7.61432L9.61435 2.61432C9.82736 2.40131 10.1727 2.40131 10.3857 2.61432Z"
      :fill="fill ?? 'currentColor'"
    />
  </svg>
</template>
