<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="card flex justify-content-center">
    <Button label="Update" @click="onOpenDialog()" severity="danger"/>
    <Dialog :visible="visible" header="Edit Profile" :style="{ width: '25rem' }">
      <template #closeicon>
        <Button plain text @click="visible = false">X</Button>
      </template>
      <form @submit.prevent="updateTask">
        <div class="flex flex-column gap-4">
          <FloatLabel>
            <InputText id="taskCode" v-model="task.taskCode" disabled="true" />
            <label for="taskCode">Code</label>
          </FloatLabel>
          <FloatLabel>
            <InputText id="taskName" v-model="task.taskName" />
            <label for="taskName">Name</label>
          </FloatLabel>
          <div class="card flex justify-center">
            <FloatLabel>
              <Select
                v-model="task.priority"
                :options="Constant.PRIORITY"
                placeholder="Choose Priority"
                class="w-full md:w-56"
              />
              <label>Prioriy</label>
            </FloatLabel>
          </div>
          <div class="card flex justify-center">
            <FloatLabel>
              <Select
                v-model="task.status"
                :options="Constant.STATUS"
                placeholder="Status"
                class="w-full md:w-56"
              />
              <label>Satus</label>
            </FloatLabel>
          </div>
          <FloatLabel>
            <Textarea v-model="task.desc" rows="5" cols="30" />
            <label>Description</label>
          </FloatLabel>
          <FloatLabel>
            <DatePicker v-model="task.dueDate" />
            <label>Due Date</label>
          </FloatLabel>
          <Button label="Submit" type="submit" />
          <Button label="Cancel" type="button" @click="visible=false" severity="danger" />
        </div>
      </form>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import type { Data } from '@/utils/main_service'
import Constant from '@/utils/Constant'
import { ref } from 'vue'
const props = defineProps<{
  items: Data[]
  index: number
}>()
const task = ref<Data>()

const visible = ref(false)
const updateTask = () => {
  props.items[props.index] = task.value
  console.log(props.items.values)
  visible.value = false
}
const onOpenDialog = () => {
  task.value = { ...props.items[props.index] }
  visible.value = true
}
</script>
