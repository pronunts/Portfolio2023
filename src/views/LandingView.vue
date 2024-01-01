<template>
	<main class="LandingView_Layout">
		<AboutMe />
		<MyExperience />
		<SoftSkills />
	</main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import AboutMe from "../components/AboutMe.vue"
import MyExperience from "../components/MyExperience.vue"
import SoftSkills from "../components/SoftSkills.vue"

export default defineComponent({
	components: {
		AboutMe,
		MyExperience,
		SoftSkills,
	}
});
</script>