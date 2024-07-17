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
const service={
    getQueryFromRoute():Data[]{
        const route=useRoute()
        const data=ref<Data[]>([]);
        const rawQueryString=route.query.data as string;
        if(!rawQueryString) return data.value;
        data.value=JSON.parse(rawQueryString);
        return data.value;
    },
    // testData():Data[]{
    //     return[
    //         {
    //           taskCode: "TASK001",
    //           taskName: "Complete Project Report",
    //           desc: "Write the final project report including all findings and analyses.",
    //           dueDate: new Date("2024-08-01"),
    //           priority: "High",
    //           status: "In Progress"
    //         },
    //         {
    //           taskCode: "TASK002",
    //           taskName: "Client Meeting",
    //           desc: "Meeting with the client to discuss project requirements and deliverables.",
    //           dueDate: new Date("2024-07-20"),
    //           priority: "Medium",
    //           status: "Scheduled"
    //         },
    //         // {
    //         //   taskCode: "TASK003",
    //         //   taskName: "Code Review",
    //         //   desc: "Review the newly committed code for the recent module.",
    //         //   dueDate: new Date("2024-07-25"),
    //         //   priority: "High",
    //         //   status: "Pending"
    //         // },
    //         // {
    //         //   taskCode: "TASK004",
    //         //   taskName: "Design Mockups",
    //         //   desc: "Create design mockups for the new user interface.",
    //         //   priority: "Low",
    //         //   status: "Completed"
    //         // },
    //         // {
    //         //   taskCode: "TASK005",
    //         //   taskName: "Database Backup",
    //         //   desc: "Perform the regular database backup to ensure data safety.",
    //         //   dueDate: new Date("2024-07-22"),
    //         //   priority: "Medium",
    //         //   status: "Completed"
    //         // },
    //         // {
    //         //   taskCode: "TASK006",
    //         //   taskName: "Team Meeting",
    //         //   desc: "Weekly team meeting to discuss progress and blockers.",
    //         //   dueDate: new Date("2024-07-19"),
    //         //   priority: "High",
    //         //   status: "Scheduled"
    //         // },
    //         // {
    //         //   taskCode: "TASK007",
    //         //   taskName: "Bug Fixing",
    //         //   desc: "Fix critical bugs reported in the latest release.",
    //         //   dueDate: new Date("2024-07-21"),
    //         //   priority: "High",
    //         //   status: "In Progress"
    //         // },
    //         // {
    //         //   taskCode: "TASK008",
    //         //   taskName: "User Testing",
    //         //   desc: "Conduct user testing sessions for the new feature.",
    //         //   dueDate: new Date("2024-07-28"),
    //         //   priority: "Medium",
    //         //   status: "Pending"
    //         // },
    //         // {
    //         //   taskCode: "TASK009",
    //         //   taskName: "Server Maintenance",
    //         //   desc: "Scheduled maintenance for server updates and security patches.",
    //         //   priority: "Low",
    //         //   status: "Scheduled"
    //         // },
    //         // {
    //         //   taskCode: "TASK010",
    //         //   taskName: "Marketing Campaign",
    //         //   desc: "Launch the new marketing campaign for the product.",
    //         //   dueDate: new Date("2024-08-05"),
    //         //   priority: "High",
    //         //   status: "Planned"
    //         // }
    //       ]}

}


export { service };
export type { Data };
