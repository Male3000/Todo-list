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
          <SelectTextC v-model="task.priority" label="Priority" optionalValue="key" optionLabel="display"
           :options="constant.PRIORITY" class="w-10"/>
          <Button label="Submit" type="submit" />
          <Button label="Cancel" type="button" @click="visible = false" severity="danger" />
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
import { useTodoTaskStore } from '@/stores/todo.task.store'
const taskStore=useTodoTaskStore();

const task = ref<Data>({
  taskCode: '',
  taskName: '',
  desc: '',
  dueDate: undefined,
  priority: '',
  status: constant.STATUS[0].key
})
const visible = ref(false)

const createTask = () => {
    taskStore.addTask(task.value);    
    onCloseDialog();
    
}
const onCloseDialog=()=>{
    visible.value=false;
}
const onOpenDialog = () => {
  // task.value = { ...props.items[props.index] }
  visible.value = true
}
</script>
