<template>
  <component
    :is="link ? 'a' : 'button'"
    :href="link ? link : undefined"
    class="nav-btn | flex | p-6 border-2 border-transparent hover:border-black hover:text-white dark:hover:text-black dark:hover:border-white ease-in-out hover:bg-black dark:hover:bg-white | focus-within:opacity-80"
  >
    <span :class="animate ? 'animate' : ''">
      <slot></slot>
    </span>
  </component>
</template>

<script setup>
const props = defineProps({
  link: {
    type: String,
    required: false,
  },
  animate: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.nav-btn {
  transition: background-color 0.28s, border-color 0.12s, color 0.6s;
  :hover {
    transition: background-color 0.12s, border-color 0.12s, color 0.12s;
  }
  & span {
  }
  &:hover span.animate {
    transform: translate(20%, 0);
    animation: centerBtn 0.1s ease-out forwards;
  }
  @keyframes centerBtn {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(20px, 0);
      //   margin: 0;
    }
  }
}
</style>
