<template>
  <div>
    <section style="text-align:center; font-size:2.5rem">~~~Todo List~~~</section>
    <section>
      <CreateTodoDialog @create-task="handleCreateTask" />
      <TableComponent :data="items" @deletedIndex="handleDeleteItem" @to-update="handleRoutingToUpdate" />
    </section>
  </div>
</template>
<script setup lang="ts">
import CreateTodoDialog from '@/components/CreateTodoDialog.vue'
import TableComponent from '@/components/TableComponent.vue'
import router from '@/router'
import { useTodoTaskStore } from '@/stores/todo.task.store'
import type { Data } from '@/utils/main_service';
const taskStore=useTodoTaskStore();
const items=taskStore.getAllTasks
const handleDeleteItem=(index:number)=>{
    taskStore.deleteTaskByIndex(index)
}
const handleRoutingToUpdate=(index:number)=>{
  taskStore.setTaskIndexToUpdate(index);
  router.push({path:`/update/${index}`});
}
const handleCreateTask=(task:Data)=>{
  taskStore.addTask(task);
}
</script>
