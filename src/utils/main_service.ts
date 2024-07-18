import type { DefaultType } from "./constant"
export type Data = {
    taskCode: string,
    taskName: string,
    desc: String,
    dueDate?: Date,
    priority: string,
    status: string
}

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

