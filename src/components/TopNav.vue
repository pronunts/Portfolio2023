<template>
	<header id="heaven" class="container">
		<nav class="top_nav">
			<ul class="menu">
				<li>
					<a href="#heaven" class="active">{{ lang.about_me }}</a>
				</li>
				<li>
					<a href="#projects">{{ lang.projects }}</a>
				</li>
						
			</ul>

			<div class="net-and-lang">		
				<div class="switch">
					<div @click="changeLang('es')" :class="{ 'selected' : actual_lang == 'es'}">Español</div>
					<div class="js-change-lang-en" @click="changeLang('en')" :class="{ 'selected' : actual_lang == 'en'}">English</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/runtime-core'
import { useStore } from "vuex"
import { useLang } from "../utils/langs"
import top_nav from '../langs/top_nav'

export default defineComponent({
	setup() {
		const { getters, commit } = useStore();
		const actual_lang = computed(() : 'es'|'en' => {
			return getters.lang
		});
		const lang = computed(() => {
            return useLang(top_nav, actual_lang.value)
        })

		function changeLang(l : string) {
			commit('change_language', l)
		}

		return {
			actual_lang,
			lang,
			changeLang
		}
	},
})
</script>