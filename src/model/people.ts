import { CompanyEntity } from './company';
import { VehicleEntity } from './vehicle';
import {FamiliarEntity} from './familiar';
import { RutineEntity } from './rutine';
import { LinkEntity } from './link';

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
    rutines?: RutineEntity [];
    links?: LinkEntity[];
    familiars?: FamiliarEntity[];
}