<template>
  <div>
    <form @submit="createTask">
      <div class="flex flex-column gap-4">
        <FloatLabel>
          <InputText id="taskCode" v-model="task.taskCode" required="true" />
          <label for="taskCode">Code</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="taskName" v-model="task.taskName" />
          <label for="taskName">Name</label>
        </FloatLabel>
        <FloatLabel>
          <Select
            v-model="task.priority"
            :options="Constant.PRIORITY"
            placeholder="Choose Priority"
            class="w-full md:w-56"
          />
          <label>Priority</label>
        </FloatLabel>
        <FloatLabel>
          <Select
            disabled
            v-model="task.status"
            :options="Constant.STATUS"
            placeholder="choose status"
            class="w-full md:w-56"
          />
          <label>Status</label>
        </FloatLabel>
        <FloatLabel>
          <Textarea v-model="task.desc" rows="5" cols="30" />
          <label>Description</label>
        </FloatLabel>
        <FloatLabel>
          <DatePicker v-model="task.dueDate" />
          <label>Due Date</label>
        </FloatLabel>
        <Button label="Submit" type="submit" />
        <Button label="Cancel" type="button" severity="danger" @click="handleCancelCreation()" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import DatePicker from 'primevue/datepicker'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import FloatLabel from 'primevue/floatlabel'
import { ref } from 'vue'
import type { Data } from '@/utils/main_service'
import Constant from '@/utils/Constant'
import { useRoute } from 'vue-router'
import router from '@/router'
import Button from 'primevue/button'
import Textarea from 'primevue/textarea'
const task = ref<Data>({
  taskCode: '',
  taskName: '',
  desc: '',
  dueDate: undefined,
  priority: '',
  status: Constant.STATUS[0]
})
const route = useRoute()

console.log(route.query.data as String)

const createTask = (e: { preventDefault: () => void }): void => {
  e.preventDefault()
  const rawString = route.query.data as string
  const data: Data[] = JSON.parse(rawString)
  data.push(task.value)
  router.push({ path: '/', query: { data: JSON.stringify(data) } })
}
const handleCancelCreation = () => {
  const rawString = route.query.data as string
  const data: Data[] = JSON.parse(rawString)
  router.push({ path: '/', query: { data: JSON.stringify(data) } })
}
</script>
