<template>
    <section class="container">
        <div class="soft_skills">

            <div class="soft_skills_title">
                {{ lang.skills }}
            </div>

            <div class="soft_skills_lines">

                <div class="words">
                    <span>{{ lang.resp }}</span>
                    <span>{{ lang.dec }}</span>
                    <span>{{ lang.team }}</span>
                    <span>{{ lang.pro }}</span>
                    <span>{{ lang.eng }}</span>
                </div>

            </div>

        </div>
    </section>
    <div class="child-page-listing" style="margin-top: 150px ;margin-bottom: 150px ;">

<h2>Projects</h2>

<div class="grid-container">

  <article id="3685" class="location-listing">

    <a class="location-title" href="https://miraelmenu.com/">
        MiraElMenu           </a>

    <div class="location-image">
      <a href="https://miraelmenu.com/">
          <img width="300" height="169" src="/images/miraelmenu.png" alt="miraelmenu page">    </a>

    </div>

  </article>

  <article id="3688" class="location-listing">

    <a class="location-title" href="#">
        Exchange de criptomonedas            </a>

    <div class="location-image">
      <a href="#">
          <img width="300" height="169" src="/images/binance.jpeg" alt="Exchange page">  </a>

    </div>

  </article>

  <article id="3691" class="location-listing">

    <a class="location-title" href="https://vatomlm.com/">
        VATOMLM            </a>

    <div class="location-image">
      <a href="https://vatomlm.com/">
          <img width="300" height="169" src="/images/vatomlm.png" alt="Vatomlm Page">  </a>

    </div>

  </article>

  <article id="3694" class="location-listing">

    <a class="location-title" href="https://farmaciabs.com/login">
        Farmacia Barrio Sucre</a>

    <div class="location-image">
      <a href="https://farmaciabs.com/login">
          <img width="300" height="169" src="/images/fbs.png" alt="Farmacia fbs">  </a>

    </div>

  </article>

  <article id="3697" class="location-listing">

    <a class="location-title" href="">
        Shop           </a>

    <div class="location-image">
      <a href="#">
          <img width="300" height="169" src="/images/desktop-preview.jpg" alt="Shop page">    </a>

    </div>

  </article>

 

</div>
<!-- end grid container -->

</div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/runtime-core'
import { useStore } from "vuex"
import { useLang } from "../utils/langs"
import soft_skills from '../langs/soft_skills'

export default defineComponent({
   
    setup() {
        const { getters } = useStore();
        const lang = computed(() => {
            return useLang(soft_skills, getters.lang)
        })

        return {
            lang,

        };
    },
   

})
</script>
<style scoped>
img {
  width: 100%; /* need to overwrite inline dimensions */
  height: auto;
}
h2 {
  margin-bottom: .5em;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
  width:80%;
  margin: 0 auto;
}
.child-page-listing{
    text-align: center;
}

/* hover styles */
.location-listing {
  position: relative;
}

.location-image {
  line-height: 0;
  overflow: hidden;
}

.location-image img {
  filter: blur(0px);
  transition: filter 0.3s ease-in;
  transform: scale(1.1);
}

.location-title {
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: none;
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity .5s;
  background: rgba(90,0,10,0.4);
  color: white;
  
  /* position the text in t’ middle*/
  display: flex;
  align-items: center;
  justify-content: center;
}

.location-listing:hover .location-title {
  opacity: 1;
}

.location-listing:hover .location-image img {
  filter: blur(2px);
}


/* for touch screen devices */
@media (hover: none) { 
  .location-title {
    opacity: 1;
  }
  .location-image img {
    filter: blur(2px);
  }
}
</style>