export interface FamiliarEntity{
    idFamiliar: number;
    notEditable:boolean;
    nameFamiliar: string;
    familiarPics?: [{img:{data:string,contentType:string}}];
    familiarAddress?: string;
    addressLink?:string;
    related?: string;
}