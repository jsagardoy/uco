import { FamiliarEntity, CompanyEntity, VehicleEntity, PeopleEntity, LinkEntity, RutineEntity } from "../../model";
import { createEmptyRutine } from "../rutines";
import { createEmptyLink } from "../links";

export const createNewFamiliar = ():FamiliarEntity =>(
    {
        idFamiliar: Math.pow(Math.round(Math.random()*100),2) ,
        nameFamiliar: '',
        editable:true,
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
        editable:true,
    }
)

export const createNewVehicle = ():VehicleEntity => (
    {
        idVehicle: Math.pow(Math.round(Math.random()*100),2) ,
        brand: '',
        editable: true,
        model: '',
        vehicleType: '',
        plate: '',
        frame: '',
        pic: [{img:{data:null,contentType:null}}],
    }
)

export const createNewLink =():LinkEntity=>(
     createEmptyLink()
)

export const createNewRutine =():RutineEntity=>(
    createEmptyRutine()
)

export const createNewPerson = (): PeopleEntity => {

    let newVehicles: Array<VehicleEntity> = [createNewVehicle()];
    let newCompanies: Array<CompanyEntity> = [createNewCompany()];
    let newRutines: Array<RutineEntity> = [createNewRutine()];
    let newLinks: Array<LinkEntity> = [createNewLink()];
    let newFamiliars: Array<FamiliarEntity> = [createNewFamiliar()];

    return {
        idPerson: Math.pow(Math.round(Math.random() * 100), 2),
        namePerson: '',
        aka: '',
        picsLinks: [{ img: { data: null, contentType: null } }],
        address: '',
        addressLink: '',
        addressPic: [{ img: { data: null, contentType: null } }],
        vehicles: newVehicles,
        companies: newCompanies,
        rutines: newRutines,
        links: newLinks,
        familiars: newFamiliars,
        editable: true,
    }
}