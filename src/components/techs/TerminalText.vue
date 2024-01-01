<template>
    <div class="line-in-terminal">
        <ul>
            <li><img class="folder" src="/images/folder.svg" width="12" height="10" alt="Logo de una carpeta" /> <span class="blue">~</span><span class="green">/</span>var/<span class="green">professional</span>/skills/<span class="blue">{{ folder }}<span class="blink">_</span></span></li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    props: {
        folder: {
            type: String,
            required: true
        }
    }
})
</script>