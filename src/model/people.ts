import { CompanyEntity } from './company';
import { VehicleEntity } from './vehicle';
import {FamiliarEntity} from './familiar';

export interface PeopleEntity {
    idPerson: number;
    namePerson: string;
    aka?: string;
    picsLinks?: [{img:{data:string,contentType:string}}];
    address?: string;
    addressLink?: string;
    addressPic?: [{img:{data:string,contentType:string}}];
    vehicles?: VehicleEntity [];
    companies?: CompanyEntity [];
    rutines?: string [];
    links?: string[];
    familiars?: FamiliarEntity[];
}