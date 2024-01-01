<template>
    <section class="container">
        <div class="about">
            <div class="about__presentation">
                <h4 v-html="say_hello"></h4>
                <h1>Jose R. Rodriguez</h1>
                <h1 class="js-web-developer DevOps/SRE">{{ lang.develop }}</h1>
            </div>
            
            <div class="about__profile">
                <div class="about__stats">

                    <ul>
                        <li>
                            <div class="stat">
                                <div class="quantity">
                                    {{ years_of_experience }}
                                </div>
                                <div class="subtitle">
                                    {{ lang.years_exp }}
                                </div>
                            </div>
                        </li>
                       <!--  <li>
                            <div class="stat">
                                <div class="quantity">
                                    {{ certifications_success }}+
                                </div>
                                <div class="subtitle">
                                    {{ lang.certifications_success }}
                                </div>
                            </div>
                        </li> -->
                        <li>
                            <div class="stat">
                                <div class="quantity">
                                    34+
                                </div>
                                <div class="subtitle">
                                    {{ lang.course_finished }}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="about__photo">
                    <figure>
                        <link rel="preload" href="/images/profile.jpg" as="image">
                        <img id="me_video" style="border-radius: 12px; margin-top: 100px;"  width="360" height="auto" poster="/video/profile.jpg"  src="/video/profile.jpg" >
                    </figure>
                    <small v-html="love_code"></small>
                </div>
                <div class="about__education">
                    <div class="box">
                        <span class="title">{{ lang.about_me }}</span>
                        <p v-html="lang.am_sre_devops"></p>
                        <p><span v-html="lang.live_in"></span> <strong>{{ years_old }} {{ lang.years }}</strong></p>
                    </div>
                   <!--  <div class="box education">
                        <span class="title">{{ lang.studies }}</span>
                        <figure>
                            <img src="/images/unir.svg" alt="UNIR La Universidad de Internet" title="UNIR La Universidad de Internet" width="168" height="39" />
                        </figure>
                        <span class="subtitle"><a href="certificates/experto-universitario-en-cloud-computing-arquitecturas-y-soluciones-aws-y-azure.pdf" target="_blank">{{ lang.college_expert_cloud }}</a></span>
                    </div>
                    <div class="box education second_educ">
                        <figure>
                            <img src="/images/unir.svg" alt="UNIR La Universidad de Internet" title="UNIR La Universidad de Internet" width="168" height="39" />
                        </figure>
                        <span class="subtitle"><a href="certificates/experto-universitario-en-devops-cloud.pdf" target="_blank">{{ lang.college_expert_devops }}</a></span>
                    </div>   -->                  
                </div>

            </div>


           <!--  <div class="lets-talk">
                <a href="mailto:">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 3.5L5 17.5" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19 13.77V3.5H8.73" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>{{ lang.chat }}</span>  
                </a>
                <div class="border"></div>
            </div> -->

        </div>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, Ref, watch } from '@vue/runtime-core'
import { useStore } from "vuex"
import { useLang } from "../utils/langs"
import { useWriter } from "../utils/writer"
import { useIncreaser } from "../utils/increaser"
import about_me from '../langs/about_me'
import projects from "../data/projects"
import certificates from "../data/certificates"

export default defineComponent({
    setup() {
        const { getters } = useStore();
        const from = 2021
        const now = new Date()
        const years : Ref<number> = ref(0)
        const certifications_success: Ref<number> = ref(0)
        const course_finished: Ref<number> = ref(0)
        const say_hello : Ref<string> = ref("")
        const love_code : Ref<string> = ref("")
        
        const actual_lang = computed(() : 'es'|'en' => {
			return getters.lang
		});
        const lang = computed(() => {
            return useLang(about_me, getters.lang)
        })
        const years_old = computed(() => { 
            const birthday = new Date("2000/04/06 21:00:00")
            let edad = now.getFullYear() - birthday.getFullYear()
            const monthDifference = now.getMonth() - birthday.getMonth()

            if (monthDifference < 0 || monthDifference === 0 && now.getDate() < birthday.getDate()) {
                edad--
            }

            return edad
        })
        const years_of_experience = computed(() => {
            if (years.value > 10) {
                return years.value
            }
            
            return '0' + years.value
        })

        function textAnimations() {
            useWriter(say_hello, lang.value.hi, true)
            useWriter(love_code, lang.value.love_coding, true)
        }

        function safariLoadVideo() {
            const video = document.getElementById('me_video') as HTMLVideoElement || null

            if (video != null) {
                video.play()
            }
        }

        onMounted(() => {
            useIncreaser(years, now.getFullYear() - from)
            useIncreaser(certifications_success, projects[actual_lang.value].length, 25)
            useIncreaser(course_finished, certificates.length, 20)
            textAnimations()
            safariLoadVideo()
        })

        watch(lang, () => {
            textAnimations()
        })

        return {
            years_of_experience,
            certifications_success,
            course_finished,
            years_old,
            lang,
            say_hello,
            love_code
        };
    },
})
</script>