<template>
    <section class="container">
        <div class="professional_skills">

            <div class="terminal">

                <div class="barra_title">
                    <div class="actions">
                        <div class="close"></div>
                        <div class="mini"></div>
                        <div class="maxim"></div>
                    </div>

                    <div class="title"><span class="no-mobile">📁</span> /var/professional/skills <span class="no-mobile">~ zsh</span> </div>
                </div>

                <div class="switch">
                    <div class="js-front-tab" @click="tab = 'public_cloud'" :class="{ 'selected' : tab == 'public_cloud'}">{{ lang.cloud_publica }}</div> 
                    <div @click="tab = 'my_tech'" :class="{ 'selected' : tab == 'my_tech'}">{{ lang.tech }}</div>
                    <div class="js-tools-tab" @click="tab = 'tools'" :class="{ 'selected' : tab == 'tools'}">{{ lang.tools }}</div>
                    <div @click="tab = 'db'" :class="{ 'selected' : tab == 'db'}">{{ lang.db }}</div>
                </div>
                
                <TerminalText :folder="tab" />

                <div class="tabs_content">
                    <Transition mode="out-in">
                        <CloudPublicTab v-show="tab == 'public_cloud'" />
                    </Transition>

                    <Transition mode="out-in">
                        <TechTab v-show="tab == 'my_tech'" />  
                    </Transition>

                    <Transition mode="out-in">  
                        <ToolsTab v-show="tab == 'tools'" />
                    </Transition>

                    <Transition mode="out-in">    
                        <DataBasesTab v-show="tab == 'db'" />
                    </Transition>
                </div>
                

            </div>
            

        </div>
    </section>
   
</template>

<script lang="ts">
import { defineComponent, Ref, ref, computed } from '@vue/runtime-core'
import { useStore } from "vuex"
import { useLang } from "../utils/langs"
import CloudPublicTab from "./techs/CloudPublicTab.vue"
import DataBasesTab from "./techs/DataBasesTab.vue"
import TechTab from "./techs/TechTab.vue"
import ToolsTab from "./techs/ToolsTab.vue"
import professional_skills from '../langs/professional_skills'
import TerminalText from './techs/TerminalText.vue'

export default defineComponent({
    components: {
        CloudPublicTab,
        DataBasesTab,
        TechTab,
        ToolsTab,
        TerminalText
    },
    setup() {
        const tab : Ref<string> = ref("public_cloud")
        const { getters } = useStore();
        const lang = computed(() => {
            return useLang(professional_skills, getters.lang)
        })

        return {
            tab,
            lang
        };
    },
})
</script>