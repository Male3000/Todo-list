<template>
    <div>
        <FloatLabel>
            <DropDown i:d="label" :disabled="disable" :required="required" :options="options"
            v-model="value" :optionLabel="optionLabel" :optionValue="optionValue" :class="class" />
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
    options?:Array<any>
    optionLabel?:string,
    placeHolder?:string
    optionValue?:string|Function,
    class?:string
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