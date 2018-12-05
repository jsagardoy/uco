import { LinkEntity } from "../../model";

export const createEmptyLink = ():LinkEntity =>(
    {
        data:'',
        editable:true,
    }
)