export type DefaultType={
    key:string,
    display:string
}

export default {
    STATUS:<DefaultType[]>[
        {
            key:"todo",
            display:"To do"
        },
        {
            key:"inProgress",
            display:"In Progress"
        },
        {
            key:"done",
            display:"Done"
        },
    ],

    PRIORITY:<DefaultType[]>[
        {
            key:"low",
            display:"Low"
        },
        {
            key:"meduim",
            display:"Meduim"
        },
        {
            key:"high",
            display:"High"
        },
    ]
}






