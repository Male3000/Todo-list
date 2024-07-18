<template>
    <div class="relative">
        <FloatLabel>
            <DropDown id="label" :disabled="disable" :required="required" :options="options" :name="label"
            v-model="internalValue" :optionLabel="optionLabel" :optionValue="optionValue" :class="class" />
            <label :for="label">{{label}}</label>
        </FloatLabel>
    <div style="position: absolute; top: 2.2rem; color: red">{{ errorMessage }}</div>

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
const internalValue = ref(props.modelValue);
import { useField } from 'vee-validate';
const { value, errorMessage } = useField(()=>props.label);
const emit=defineEmits<{
    (e: 'update:modelValue', value:any):void
}>()
watch(internalValue ,(newValue)=>{
    emit('update:modelValue', newValue)
    value.value=newValue
})
</script>

<style>

</style>template