import { FamiliarEntity, CompanyEntity, VehicleEntity } from "../../model";

export const createNewFamiliar = ():FamiliarEntity =>(
    {
        idFamiliar: Math.pow(Math.round(Math.random()*100),2) ,
        nameFamiliar: '',
        notEditable:false,
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

export const createNewVehicle = ():VehicleEntity => (
    {
        idVehicle: Math.pow(Math.round(Math.random()*100),2) ,
        brand: '',
        model: '',
        vehicleType: '',
        plate: '',
        frame: '',
        pic: [{img:{data:null,contentType:null}}],
    }
)