import type { Data } from "@/utils/main_service";
import { defineStore } from "pinia";
export const useTodoTaskStore = defineStore("todoTaskStore", {
    state: () => ({
        items: <Data[]>[],
        index: -1
    }),
    actions: {
        addTask(task: Data): void {
            this.items.push(task);
        },
        deleteTaskByIndex(index: number): void {
            this.items.splice(index, 1);
        },
        updateTask(newTask: Data): void {
            this.items[this.index] = newTask;
        },
        setTaskIndexToUpdate(index: number): void {
            this.index = index;
        },
    },
    getters: {
        getAllTasks: (state): Data[] => {
            return state.items;
        },
        getTaskByIndex: (state) => {
            return (index: number): Data | undefined => state.items[index];
        },
        getTaskToUpdate: (state): Data => {
            return state.items[state.index];
        }
    },

})



