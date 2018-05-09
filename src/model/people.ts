import { CompanyEntity } from './company';
import { VehicleEntity } from './vehicle';

export interface PeopleEntity {
    id: number;
    name: string;
    address: string;
    vehicles?: VehicleEntity [];
    companies?: CompanyEntity [];
    rutine: string [];
    links: string;
    familiars?: PeopleEntity[];
}