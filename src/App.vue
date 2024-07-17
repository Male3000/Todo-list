<script setup lang="ts">
import {RouterView } from 'vue-router'
</script>

<template>
    <div>
        <RouterView/>
    </div>
</template>
<!-- <template>
    <div>
        <DropDownC v-model="text" label="12121212212"/>
        <div>
            {{ text }}
        </div>
        
    </div>
</template>
<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ref } from 'vue';
import DropDownC from './composables/_SelectTextC.vue';
const text=ref<string>('')


</script> -->


