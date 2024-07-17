<template>
  <div>
    <form @submit="updateTask">
      <div class="flex flex-column gap-4">
        <FloatLabel>
          <InputText id="taskCode" v-model="task.taskCode" />
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

const route = useRoute()

const rawString = route.query.data as string
const index: number = JSON.parse(route.query.index as string)

const data: Data[] = JSON.parse(rawString)
const task = ref<Data>(data[index])

const updateTask = (e: { preventDefault: () => void }): void => {
  e.preventDefault()
  router.push({ path: '/', query: { data: JSON.stringify(data) } })
}
</script>
