<template>
  <div class="card flex justify-content-center">
    <div>
      <Button label="Create" @click="onOpenDialog()" severity="primary" ></Button>
    </div>
    <Dialog :visible="visible" header="Create Task" :style="{ width: '25rem' }">
      <template #closeicon>
        <Button plain text @click="visible = false">X</Button>
      </template>
      <form @submit.prevent="onSubmit">
        <div class="flex flex-column gap-4 card">
          <InputTextC v-model="task.taskCode" label="Code" />
          <InputTextC v-model="task.taskName" label="Name" />
          <TextareaC v-model="task.desc" label="Description" />
          <DateC v-model="task.dueDate" label="Date" />
          <SelectTextC
            v-model="task.priority"
            label="Priority"
            optionValue="key"
            optionLabel="display"
            :options="constant.PRIORITY"
            class="w-10"/>
          <Button label="Submit" type="submit"></Button>
          <Button label="Cancel" type="button" @click="onCloseDialog" severity="danger"></Button>
        </div>
      </form>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import type { Data } from '@/utils/main_service'
import constant from '@/utils/constant'
import { onBeforeMount, onMounted, ref } from 'vue'
import InputTextC from '@/composables/_InputTextC.vue'
import SelectTextC from '@/composables/_SelectTextC.vue'
import TextareaC from '@/composables/_TextAreaC.vue'
import DateC from '@/composables/_DateC.vue'
const emit = defineEmits<{
  (e: 'createTask', value: Data): void
}>()
const defaultTaskVlue: Data = {
  taskCode: '',
  taskName: '',
  desc: '',
  dueDate: undefined,
  priority: '',
  status: constant.STATUS[0].key
}
const task = ref<Data>()
const visible = ref(false)
onMounted(() => {
  task.value = defaultTaskVlue
})
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    Code: yup.string().required(),
    Name: yup.string().required(),
    Priority: yup.string().required(),
    Date: yup.date().required(),
  })
})
const onSubmit = handleSubmit(value=> {
  emit('createTask', task.value)
  console.log(task.value);
  
  task.value = defaultTaskVlue
  onCloseDialog()
  console.log(value)
})

const onCloseDialog = () => {
  visible.value = false
  task.value = {...defaultTaskVlue}
}
const onOpenDialog = () => {
  task.value = {...defaultTaskVlue}
  visible.value = true
}
</script>


