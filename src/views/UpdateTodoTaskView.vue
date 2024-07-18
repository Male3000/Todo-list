<template>
  <div>
    <form @submit.prevent="updateTask">
      <div class="flex flex-column gap-4 card">
        <InputTextC v-model="task.taskName" label="Code" />
        <InputTextC v-model="task.taskCode" label="Name" />
        <TextareaC v-model="task.desc" label="Description" />
        <SelectTextC
          v-model="task.priority"
          label="Priority"
          optionValue="key"
          optionLabel="display"
          :options="constant.PRIORITY"
          class="w-10"
        />
        <SelectTextC
          v-model="task.status"
          label="Status"
          optionValue="key"
          optionLabel="display"
          :options="constant.STATUS"
          class="w-10"
        />
        <DateC 
        v-model="task.dueDate"
          label="Date"
          optionValue="key"
          optionLabel="display"
          class="w-10"
          />
        <Button label="Submit" type="submit" />
        <Button label="Cancel" type="button" @click="onRouteBack" severity="danger" />
      </div>
    </form>
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
import {useTodoTaskStore} from '../stores/todo.task.store'
import router from '@/router'
const taskStore=useTodoTaskStore()
const task=ref<Data>({...taskStore.getTaskToUpdate});
const updateTask=()=>{
  taskStore.updateTask(task.value)
  onRouteBack()
}
const onRouteBack=()=>{
  router.push('/')
}
</script>
