<template>
  <div class="card flex justify-content-center">
    <Button type="button" plain text  @click="toggle">Action<i class="pi pi-angle-down"></i></Button>
    <OverlayPanel ref="op">
      <div class="flex flex-column gap-3 w-7rem">
        <Button @click="handleEmittingUpdate"><i class="pi pi-pencil"></i>Update</Button>
        <Button @click="handleEmittingDelete" severity="danger"
          ><i class="pi pi-trash"></i>Delete</Button>
      </div>
    </OverlayPanel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const op = ref()
const toggle = (event: any) => {
  op.value.toggle(event)
}

const emit = defineEmits<{
  (e: 'delete', value: any): void
  (e: 'update', value: any): void
}>()

const handleEmittingDelete = (): void => {
  op.value.hide()
  emit('delete', true)
}
const handleEmittingUpdate = (): void => {
  op.value.hide()
  emit('update', true)
}
</script>
