<template>
  <div>
    <form @submit.prevent="updateTask">
      <div class="flex flex-column gap-4 card">
        <InputTextC v-model="task.taskName" label="Name" />
        <InputTextC v-model="task.taskCode" label="Name" />
        <TextareaC v-model="task.desc" label="Description" />
        <SelectTextC
          v-model="task.priority"
          label="Priority"
          optionalValue="key"
          optionLabel="display"
          :options="constant.PRIORITY"
          class="w-10"
        />
        <Button label="Submit" type="submit" />
        <Button label="Cancel" type="button" @click="visible = false" severity="danger" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Data } from '@/utils/main_service'
import constant from '@/utils/constant'
import { onMounted, ref } from 'vue'
import InputTextC from '@/composables/_InputTextC.vue'
import SelectTextC from '@/composables/_SelectTextC.vue'
import TextareaC from '@/composables/_TextAreaC.vue'
import {useTodoTaskStore} from '../stores/todo.task.store'
const taskStore=useTodoTaskStore()
const task=ref<Data>();
// onMounted(()=>{
//     task.value=taskStore.getUpateItem()
// })

</script>
