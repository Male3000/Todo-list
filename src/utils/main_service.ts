import type { DefaultType } from "./constant"
export type Data = {
    taskCode: string,
    taskName: string,
    desc: String,
    dueDate?: Date,
    priority: string,
    status: string
}
export const testData=<Data[]>[
            {
              taskCode: "TASK001",
              taskName: "Complete Project Report",
              desc: "Write the final project report including all findings and analyses.",
              dueDate: new Date("2024-08-01"),
              priority: "High",
              status: "In Progress"
            },
            {
              taskCode: "TASK002",
              taskName: "Client Meeting",
              desc: "Meeting with the client to discuss project requirements and deliverables.",
              dueDate: new Date("2024-07-20"),
              priority: "Medium",
              status: "Scheduled"
            },
            {
              taskCode: "TASK006",
              taskName: "Team Meeting",
              desc: "Weekly team meeting to discuss progress and blockers.",
              dueDate: new Date("2024-07-19"),
              priority: "High",
              status: "Scheduled"
            },
            {
              taskCode: "TASK007",
              taskName: "Bug Fixing",
              desc: "Scheduled maintenance for server updates and security patches.",
              priority: "Low",
              status: "Scheduled"
            },
            {
              taskCode: "TASK010",
              taskName: "Marketing Campaign",
              desc: "Launch the new marketing campaign for the product.",
              dueDate: new Date("2024-08-05"),
              priority: "High",
              status: "Planned"
            }
          ]

export const service = {
    getObjectByKey: (arr: DefaultType[], value: string): DefaultType => {
        for (const element of arr) {
            if (element.key === value) {
                return element;
            }
        };
        return <DefaultType>{
            key: 'notfound',
            display: ''
        };
    }
}

