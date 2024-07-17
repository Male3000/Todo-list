<template>
  <div>
    <section style="text-align:center; font-size:2.5rem">~~~Todo List~~~</section>
    <section>
      <CreateTodoDialog />
      <TableComponent :data="items" @deletedIndex="handleDeleteItem"/>
    </section>
  </div>
</template>
<script setup lang="ts">
import CreateTodoDialog from '@/components/CreateTodoDialog.vue'
import TableComponent from '@/components/TableComponent.vue'
import router from '@/router'
import { service, type Data } from '@/utils/main_service'
import Button from 'primevue/button'
import { useTodoTaskStore } from '@/stores/todo.task.store'
const taskStore=useTodoTaskStore();
const items=taskStore.getAllTasks
const handleDeleteItem=(index:number)=>{
    taskStore.deleteTaskByIndex(index)
}

</script>
