import { ref } from "vue";
import {  useRoute } from "vue-router";
type Data={
    taskCode:string,
    taskName:string,
    desc:String,
    dueDate?:Date,
    priority:string,
    status:string
}


export type { Data };
