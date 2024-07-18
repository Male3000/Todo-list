export type DefaultType={
    key:string,
    display:string
}

export default {
    STATUS:<DefaultType[]>[
        {
            key:"TODO",
            display:"To-do"
        },
        {
            key:"INPROGRESS",
            display:"In-Progress"
        },
        {
            key:"DONE",
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






