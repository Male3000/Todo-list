<template>
    <div>
        <DataTable :value="data" tableStyle="min-width: 70rem">
            <Column field="taskCode" header="Code"></Column>
            <Column field="taskName" header="Name"></Column>
            <Column field="desc" header="Description">
                <template #body="{index}">
                    <div class="truncated-text" >
                        {{ data[index].desc }}
                    </div>
                </template>
            </Column>
            <Column field="dueDate" header="Due Date"></Column>
            <Column field="priority" header="Priority"></Column>
            <Column field="status" header="Status"></Column>
            <Column header="Action">
                <template #body="{ index }">
                    <div class="flex gap-4">
                        <Button @click="confirmDeleteDialog(); selectedIdex=index">Delete</Button>
                        <UpdateTodoDialog :items="data" :index="index"/>
                    </div>
                </template>
            </Column>
        </DataTable>
        <Toast />
        <ConfirmDialog></ConfirmDialog>
    </div>
</template>
<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import { ref } from 'vue';
import ConfirmDialog from "primevue/confirmdialog";
import Toast from "primevue/toast";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

import UpdateTodoDialog from"./UpdateTodoDialog.vue"

const selectedIdex=ref(-1);
defineProps(['data']);
const emit=defineEmits(['deletedIndex']);
const confirm = useConfirm();
const toast = useToast();

const confirmDeleteDialog = () => {
    confirm.require({
        message: 'Do you want to delete this record?',
        header: 'Danger Zone',
        icon: 'pi pi-info-circle',
        rejectLabel: 'Cancel',
        acceptLabel: 'Delete',
        rejectClass: 'p-button-secondary p-button-outlined',
        acceptClass: 'p-button-danger',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
            emit('deletedIndex', selectedIdex.value)
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};

</script>
<style>
.truncated-text {
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
