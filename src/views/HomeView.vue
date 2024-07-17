<template>
  <div>
    <section style="text-align:center; font-size:2.5rem">~~~Todo List~~~</section>
    <section>
      <Button @click="$router.push({ path: '/create', query: { data: JSON.stringify(items) } })">
        Create a Task
      </Button>
      <TableComponent :data="items" @deletedIndex="handleDeleteItem"/>
    </section>
  </div>
</template>
<script setup lang="ts">
import TableComponent from '@/components/TableComponent.vue'
import router from '@/router'
import { service, type Data } from '@/utils/main_service'
import Button from 'primevue/button'
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const items = ref<Data[]>()

onMounted(async() => {   
  items.value = service.getQueryFromRoute()
  await router.push({query:{}})
})
const handleDeleteItem=(index:number)=>{
    items.value?.splice(index,1);
}

</script>
