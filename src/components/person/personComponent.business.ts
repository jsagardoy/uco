import { FamiliarEntity, CompanyEntity, VehicleEntity } from "../../model";
import { Edit, Save } from "@material-ui/icons";
import Button from "@material-ui/core/Button";

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