<template>
    <div class="flex flex-column gap-4">
        <FloatLabel>
            <InputText :id="label" :disabled="disable" :required="required"
            v-model="value" />
            <label :for="label">{{label}}</label>
        </FloatLabel>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
const props=defineProps<{
    label:string,
    validate?:boolean
    disable ?:boolean
    required?:boolean
    modelValue?:any
}>()
const emit=defineEmits<{
    (e: 'update:modelValue', value:any):void
}>()
const value=ref()
onMounted(()=>{
    value.value=props.modelValue
})
watch(value,(newValue)=>{
    emit('update:modelValue', value.value)
})
</script>

<style>

</style>template