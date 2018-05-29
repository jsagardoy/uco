import { CompanyEntity } from './company';
import { VehicleEntity } from './vehicle';
import {FamiliarEntity} from './familiar';

export interface PeopleEntity {
    id: number;
    name: string;
    aka?: string;
    picsLinks?: string[];
    address?: string;
    addressLink?: string;
    addressPic?: string[];
    vehicles?: VehicleEntity [];
    companies?: CompanyEntity [];
    rutine?: string [];
    links?: string[];
    familiars?: FamiliarEntity[];
}