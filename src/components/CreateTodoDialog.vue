<template>
  <div class="card flex justify-content-center">
    <div>
      <Button label="Create" @click="onOpenDialog()" severity="primary" />
    </div>
    <Dialog :visible="visible" header="Edit Profile" :style="{ width: '25rem' }">
      <template #closeicon>
        <Button plain text @click="visible = false">X</Button>
      </template>
      <form @submit.prevent="createTask">
        <div class="flex flex-column gap-4 card">
          <InputTextC v-model="task.taskName" label="Name" />
          <InputTextC v-model="task.taskCode" label="Name" />
          <TextareaC v-model="task.desc" label="Description" />
          <DateC v-model="task.dueDate" label="date" />
          <SelectTextC
            v-model="task.priority"
            label="Priority"
            optionValue="key"
            optionLabel="display"
            :options="constant.PRIORITY"
            class="w-10"
          />
          <Button label="Submit" type="submit"></Button>
          <Button label="Cancel" type="button" @click="visible = false" severity="danger"></Button>
        </div>
      </form>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import type { Data } from '@/utils/main_service'
import constant from '@/utils/constant'
import { ref } from 'vue'
import InputTextC from '@/composables/_InputTextC.vue'
import SelectTextC from '@/composables/_SelectTextC.vue'
import TextareaC from '@/composables/_TextAreaC.vue'
import DateC from '@/composables/_DateC.vue'
import { useTodoTaskStore } from '@/stores/todo.task.store'
const taskStore = useTodoTaskStore()
const defaultTaskVlue: Data = {
  taskCode: '',
  taskName: '',
  desc: '',
  dueDate: undefined,
  priority: '',
  status: constant.STATUS[0].key
}
const task = ref<Data>(defaultTaskVlue)
const visible = ref(false)

const createTask = () => {
  taskStore.addTask({ ...task.value })
  console.log(task.value);
  
  task.value = defaultTaskVlue

  onCloseDialog()
}
const onCloseDialog = () => {
  visible.value = false
}
const onOpenDialog = () => {
  task.value = {...defaultTaskVlue}
  visible.value = true
}
</script>
