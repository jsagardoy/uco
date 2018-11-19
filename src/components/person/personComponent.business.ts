import { FamiliarEntity, CompanyEntity } from "../../model";

export const createNewFamiliar = ():FamiliarEntity =>(
    {
        idFamiliar: Math.pow(Math.round(Math.random()*100),2) ,
        nameFamiliar: '',
        familiarPics: [{img:{data:null,contentType:null}}],
        familiarAddress: '',
        addressLink:'',
        related: ''
    }
)
export const createNewCompany = ():CompanyEntity =>(
    {   
        idCompany: Math.pow(Math.round(Math.random()*100),2) ,
        nameCompany: '',
        cif: '',
        address: '',
        map: '',
    }
)