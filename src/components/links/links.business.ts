import { LinkEntity } from "../../model";

export const createEmptyLink = ():LinkEntity =>(
    {
        data:'',
        notEditable:true,
    }
)