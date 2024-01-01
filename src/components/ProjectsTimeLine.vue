<template>
    <section id="projects" class="container projects-border">
        <div class="projects">
            <h1>{{ lang.projects }}</h1>
            <p>{{ lang.a_line }}</p>

            <div class="shields">
                <div class="shield">
                    <img :src="'/images/shield_azure.svg'" alt="Azure Shield" width="104" height="auto" />
                    <div class="number-shield">{{ all_projects_with_azure }}</div>
                </div>
                <div class="shield">
                    <img :src="'/images/shield_aws.svg'" alt="AWS Shield" width="104" height="auto" />
                    <div class="number-shield">{{ all_projects_with_aws }}</div>
                </div>
                <div class="shield">
                    <img :src="'/images/shield_gcp.svg'" alt="GCP Shield" width="104" height="auto" />
                    <div class="number-shield">{{ all_projects_with_gcp }}</div>
                </div> 
                <div class="shield">
                    <img :src="'/images/shield_oracle.svg'" alt="Oracle Shield" width="104" height="auto" />
                    <div class="number-shield">{{ all_projects_with_oracle }}</div>
                </div>                      
                <div class="shield">
                    <img :src="'/images/shield_alibabacloud.svg'" alt="Alibaba Cloud Shield" width="104" height="auto" />
                    <div class="number-shield">{{ all_projects_with_alibabacloud }}</div>
                </div>                            
            </div>

  
            <div class="time_line">

                <div class="time_line_section" v-for="p, i in list_of_projects" :key="i">
                    <Project :p="p" />
                </div>

            </div>

            <div class="load_more" v-show="can_load_more">
                <button class="button" @click="loadMore">{{ lang.load_more }}</button>
            </div>
            
        </div>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref } from '@vue/runtime-core'
import projects from "../data/projects"
import Project from "./projects/Project.vue"
import { useStore } from "vuex"
import { useLang } from "../utils/langs"
import projects_time_line from '../langs/projects_time_line'

const MAX_PROJECTS_SHOWN_BY_DEFAULT = 6
const PROJECTS_FOR_EACH_CLICK = 4

export default defineComponent({
    components: {
        Project
    },
    setup() {
        const { getters } = useStore();
        const len : Ref<number> = ref(MAX_PROJECTS_SHOWN_BY_DEFAULT)
        
        const actual_lang = computed(() : 'es'|'en' => {
			return getters.lang
		});
        const lang = computed(() => {
            return useLang(projects_time_line, actual_lang.value)
        })
        const list_of_projects = computed(() => {
            return projects[actual_lang.value].slice(0, len.value)
        })
        const can_load_more = computed(() => {
            return len.value < projects[actual_lang.value].length
        })
        const all_projects_with_azure = computed(() => {
            return projects[actual_lang.value].filter((p : any) => {
                return p.techs.includes('azure')
            }).length;
        });
        const all_projects_with_aws = computed(() => {
            return projects[actual_lang.value].filter((p : any) => {
                return p.techs.includes('aws')
            }).length;
        });  
        const all_projects_with_gcp = computed(() => {
            return projects[actual_lang.value].filter((p : any) => {
                return p.techs.includes('gcp')
            }).length;
        });           
        const all_projects_with_oracle = computed(() => {
            return projects[actual_lang.value].filter((p : any) => {
                return p.techs.includes('oracle')
            }).length;
        });                    
        const all_projects_with_alibabacloud = computed(() => {
            return projects[actual_lang.value].filter((p : any) => {
                return p.techs.includes('alibabacloud')
            }).length;
        });    

        function loadMore() {
            if (can_load_more.value) {
                len.value = len.value + PROJECTS_FOR_EACH_CLICK
            }
        }

        return {
            all_projects_with_azure,
            all_projects_with_aws,
            all_projects_with_gcp,
            all_projects_with_oracle,
            all_projects_with_alibabacloud,
            list_of_projects,
            can_load_more,
            lang,
            loadMore
        };
    },
})
</script>