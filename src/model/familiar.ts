export interface FamiliarEntity{
    idFamiliar: number;
    nameFamiliar: string;
    familiarPics?: [{img:{data:string,contentType:string}}];
    familiarAddress?: string;
    addressLink?:string;
    related?: string;
}