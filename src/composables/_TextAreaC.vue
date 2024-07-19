<template>
    <div>
        <FloatLabel>
            <Textarea :id="label" :disabled="disable" :required="required" rows="5" cols="30"
            v-model="internalValue" ></Textarea>
            <label :for="label">{{label}}</label>
        </FloatLabel>
  </div>
</template>
<script setup lang="ts">
import Textarea from 'primevue/textarea';
import { ref, watch } from 'vue';
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
const internalValue=ref(props.modelValue)
watch(internalValue,(newValue)=>{
    emit('update:modelValue', newValue)
})
</script>



