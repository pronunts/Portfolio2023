<template>
    <section id="posts" class="container">
        <div class="certificates">
            <h1>{{ lang.posts }}</h1>
            <p>{{ lang.all }}</p>

        <div class="list-of-certificates">
            <div class="certified" v-for="c, i in list_of_posts" :key="i">
                <figure>
                    <img :src="c.image" width="99" height="99" alt="Logo de la certificación" />
                </figure>
                <div class="certified_content">
                    <div class="certified_data">
                        <div class="title">{{ c.title }}</div>
                        <div class="certifier">{{ c.content }}</div>
                    </div>
                    <div class="certified_time">
                        <span class="date">{{ c.date }}</span>
                        <a :href="c.url" target="_blank">{{ lang.see }}</a>
                    </div>
                </div>
            </div>
        </div>

            
            <div class="load_more" v-show="can_load_more">
                <button class="button" @click="loadMore">{{ lang.load_more }}</button>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, computed } from '@vue/runtime-core'
import { useStore } from "vuex"
import { useLang } from "../utils/langs"
import posts from "../data/posts"
import posts_list from '../langs/posts_lists'

const MAX_POSTS_SHOWN_BY_DEFAULT = 5
const POSTS_FOR_EACH_CLICK = 4

export default defineComponent({
    setup() {
        const { getters } = useStore();
        const len : Ref<number> = ref(MAX_POSTS_SHOWN_BY_DEFAULT) // max posts by default
        const list_of_posts = computed(() => {
            return posts.slice(0, len.value)
        })
        const can_load_more = computed(() => {
            return len.value < posts.length
        })
        const lang = computed(() => {
            return useLang(posts_list, getters.lang)
        })

        function loadMore() {
            if (can_load_more.value) {
                len.value = len.value + POSTS_FOR_EACH_CLICK
            }
        }

        return {
            list_of_posts,
            can_load_more,
            lang,
            loadMore
        };
    },
})
</script>