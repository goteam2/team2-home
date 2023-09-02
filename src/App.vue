<script setup>
// import simpleParallax from 'simple-parallax-js';
import { onMounted, ref, watch } from "vue";
import logoSVG from "@/components/logoSVG.vue";

import NavBtn from "@/components/NavBtn.vue";

import FavBtn from "@/components/FavBtn.vue";
import MenuBtn from "@/components/MenuBtn.vue";
import DarkLightMode from "@/components/DarkLightMode.vue";
import LoadingIcon from "@/components/LoadingIcon.vue";

const DISPLAY_MODE = ref("dark");
let top = 0;
let isMobile = window.innerWidth < 768 ? true : false;
const menuOpen = ref(false);

function applyTheme() {
  if (typeof window !== "undefined") {
    if (DISPLAY_MODE.value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
}
const toggleTheme = () => {
  if (DISPLAY_MODE.value === "dark") {
    DISPLAY_MODE.value = "light";
  } else {
    DISPLAY_MODE.value = "dark";
  }
  applyTheme();
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

onMounted(() => {
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? (DISPLAY_MODE.value = "dark")
    : (DISPLAY_MODE.value = "light");
  applyTheme();
});
</script>

<template>
  <div class="main-wrapper w-full max-w-screen-xl dark:text-white text-black">
    <div
      class="header-wrap | justify-self-center | border-b-2 border-black dark:border-white"
    >
      <header class="grid grid-cols-12 | w-full h-full |text-slate-900">
        <logoSVG
          alt="logo"
          class="xl:col-span-6 col-span-4 self-center fill-black max-w-full dark:fill-white | h-16"
        />
        <div
          class="list-none xl:col-span-6 col-span-8 flex justify-end text-center font-nimbus font-black uppercase text-4xl self-center w-full"
        >
          <LoadingIcon class="self-center mx-2" />
          <FavBtn class="self-center mx-2" />

          <DarkLightMode
            class="self-center mx-2"
            :display-mode="DISPLAY_MODE"
            @click="toggleTheme"
          />
          <MenuBtn class="self-center mx-2 xl:hidden" @click="toggleMenu" />
          <NavBtn link="#" class="hidden xl:flex"> Hire Us </NavBtn>
        </div>
      </header>
    </div>

    <main class="grid grid-cols-12 gap-x-0 | h-full | relative">
      <aside
        id="navMenu"
        class="xl:col-span-2 xl:border-r-2 bg-white dark:bg-black border-black dark:border-white transition-all duration-150"
        :class="
          isMobile
            ? ' ' + isMobile && menuOpen
              ? 'absolute block w-64 h-full left-0 top:0 border-r-2'
              : 'absolute opacity-0 -left-64'
            : ''
        "
      >
        <div
          class="list-none text-start text-xl | font-nimbus font-black uppercase self-center | h-full | flex flex-col items-around"
        >
          <NavBtn class="" animate link="#"> About </NavBtn>
          <NavBtn class="" animate link="#"> Work </NavBtn>
          <NavBtn class="" animate link="#"> Hire Us </NavBtn>
        </div>
      </aside>

      <div
        id="mtn-image"
        class="xl:col-span-4 xl:border-r-2 border-black dark:border-white"
        style=""
      >
        <!-- <div class="sticky-block w-full"></div> -->

        <img src="mtn-image.webp" class="h-full w-auto" />
      </div>

      <article class="xl:col-span-6 | flex items-center | h-full px-32">
        <h2 class="text-2xl">A CREATIVE AGENCY</h2>
        <div class="grid grid-cols-12">
          <div class="col-span-4 h-full bg-red-700"></div>
        </div>
      </article>
    </main>
    <footer
      class="bg-black | w-full px-4 pt-4 pb-2 | flex items-center justify-center | border-2 border-transparent dark:border-white"
    >
      <img src="/t2-logo-full.svg" />
    </footer>
  </div>
</template>

<style scoped lang="scss">
.main-wrapper {
  margin: 0 auto;
  height: 800px;
  max-height: 100vh;
}
.header-wrap {
  height: var(--header-wrap-height);
  display: flex;
  align-items: center;
  width: 100%;
}

#mtn-image {
  & img {
  }
}
</style>
