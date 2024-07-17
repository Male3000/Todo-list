import type { Data } from "@/utils/main_service";
import { defineStore } from "pinia";
export const useTodoTaskStore=defineStore("todoTaskStore",{
    state:()=>({
        items:<Data[]>[],
        index:-1
    }),
    actions:{
        addTask(task:Data):void{
            this.items.push(task);
            console.log(this.items);
            
        },
        deleteTaskByIndex(index:number):void{
            this.items.splice(index, 1);
        },
        updateTask(index:number, newTask:Data):void{
            this.items[index]=newTask;
        },
        // setIndexOfTaskToUpdate(index:number)
    },
    getters: {
        getAllTasks: (state) => {
          return state.items;
        },
        getTaskByIndex: (state) => {
          return (index: number): Data | undefined => state.items[index];
        },
      },
      
})



