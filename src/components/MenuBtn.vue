<template>
  <div
    role="button"
    class="rounded-full border-black dark:border-white border p-2 | hover:bg-black | dark:hover:bg-white group"
    @click="clicked = !clicked"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-6 h-6"
      :class="
        clicked
          ? ' fill-red-400'
          : ' fill-transparent stroke-black dark:stroke-white group-hover:stroke-white dark:group-hover:stroke-black'
      "
    >
      <path
        fill-rule="evenodd"
        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";

const clicked = ref(false);
</script>
