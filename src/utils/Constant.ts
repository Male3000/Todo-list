type StatusType={
    key:string,
    display:string
}

export default {
    STATUS:<StatusType[]>[
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

    PRIORITY:<StatusType[]>[
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






