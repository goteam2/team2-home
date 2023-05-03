<script setup>
// import simpleParallax from 'simple-parallax-js';
import { onMounted, ref } from 'vue';
import sloganSVG from './components/sloganSVG.vue';

let top = 0;
let isMobile = window.innerWidth < 768 ? true : false;

onMounted(()=>{

    if( !isMobile){
        window.addEventListener('scroll', (e)=>{
            let mtnImg = document.getElementById('mtn-image');
            let sloganImgSwap = document.getElementById('slogan-image-swap');
            top = mtnImg.getBoundingClientRect().top;
    
            let opacity = (100/top);
            console.log(top, opacity )
// measure difference between top of screen and main container
            if(top < 250){
                sloganImgSwap.style.opacity = opacity;

                
            }else{
                sloganImgSwap.style.opacity = '0';
                mtnImg.style.mixBlendMode = 'difference';
            }

        })

    }
})
</script>

<template>
    
    <div class="header-wrap | grid-cols-8 justify-self-center w-full max-w-screen-xl fixed z-50 bg-black">

        <header class="grid grid-cols-8 bg-black text-white py-8 border-b-2 border-white">
            
            <img src="logo.svg" alt="logo" class="col-span-4 self-center" />
            <ul class="list-none  col-span-4  grid grid-cols-3 text-center font-nimbus font-black uppercase text-4xl self-center">
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Hire Us</a></li>
            </ul>          
    
        </header>
    </div>

    <div class="subheader-wrap | grid-cols-8 justify-self-center max-w-screen-xl fixed z-40">
        <header class="grid grid-cols-8 bg-black ">
            <img src="header-shape.svg" class="header-symbol | flex col-span-1 items-center self-stretch p-4 bg-black border-r-4 border-b-2 border-y-white" />
            <div class="subheading-wrap | col-span-7 border-b-2 border-y-white py-12 pl-8 flex justify-end">
             <sloganSVG id="slogan-image" class="fill-white stroke-none"/>
            </div>
        </header>
    </div>
    <!-- mountains -->
    <div id="mtn-vector" class="col-span-3 xl:pr-0  z-30 overflow-hidden bg-black">
        <img  src="mtn-vector.webp"  />
    </div>
    <div id="mtn-image" class='col-span-5 xl:pl-4  z-40' style="" >
        <!-- <div class="sticky-block w-full"></div> -->
        <sloganSVG id="slogan-image-swap" class="stroke-none fill-none"/>
        <img src="mtn-image.webp"/>
     </div>

</template>

<style scoped>

</style>
