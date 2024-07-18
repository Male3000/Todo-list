<template>
    <div class="flex flex-column gap-4 relative">
        <FloatLabel>
            <InputText :id="label" :disabled="disable" :required="required" :name="label"
            v-model="internalValue" />
            <label :for="label">{{label}}</label>
        </FloatLabel>
    <div style="position: absolute; top: 2.2rem; color: red">{{ errorMessage }}</div>
</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const props=defineProps<{
    label:string,
    validate?:boolean
    disable ?:boolean
    required?:boolean
    modelValue?:any
}>()
const internalValue = ref(props.modelValue);
import { useField } from 'vee-validate';
// const { value, errorMessage } = useField(props.label, {validateOnMount:false});
const { value, errorMessage } = useField(props.label, {
    initialValues:props.modelValue
});

const emit=defineEmits<{
    (e: 'update:modelValue', value:any):void
}>()

watch(internalValue ,(newValue)=>{
    emit('update:modelValue', newValue)
    value.value=newValue
})

</script>

<style>

</style>