import { FamiliarEntity, CompanyEntity, VehicleEntity, PeopleEntity, LinkEntity, RutineEntity } from "../../model";
import { createEmptyRutine } from "../rutines";
import { createEmptyLink } from "../links";


const generateNewId=() =>
    Math.pow(Math.round(Math.random() * 100), 2)

export const createNewFamiliar = ():FamiliarEntity =>(
    {
        idFamiliar: generateNewId() ,
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
        idCompany: generateNewId() ,
        nameCompany: '',
        cif: '',
        address: '',
        map: '',
        editable:true,
    }
)

export const createNewVehicle = ():VehicleEntity => (
    {
        idVehicle: generateNewId(),
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
        idPerson: generateNewId(),
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