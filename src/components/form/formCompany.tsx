import * as React from 'react';
import { CompanyEntity } from '../../model/company';
import { LocationOn } from '@material-ui/icons';
import { Input } from './common';

interface Props {
  company: CompanyEntity;
  addNew: boolean;
  handleChange: (fieldName: string, value: any, group: string) => void;
}

export const CompanyFormComponent: React.StatelessComponent<Props> = (props: Props) => (
  <>
    {props.addNew ? (
      <div>
        <Input
          name="nameCompany"
          editable={props.company.editable}
          value={props.company.nameCompany}
          placeholder={props.company.nameCompany}
          label="Nombre"
          group="company"
          onChange={props.handleChange}
        />
        <Input
          name="cif"
          editable={props.company.editable}
          value={props.company.cif}
          placeholder={props.company.cif}
          label="CIF"
          group="company"
          onChange={props.handleChange}
        />
        <Input
          name="address"
          editable={props.company.editable}
          value={props.company.address}
          placeholder={props.company.address}
          label="Dirección"
          group="company"
          onChange={props.handleChange}
        />
        <Input
          name="map"
          editable={props.company.editable}
          value={props.company.map}
          placeholder={props.company.map}
          label="URL Ubicación de la empresa"
          group="company"
          onChange={props.handleChange}
        />
      </div>
    ) : (
      <div>
        <Input
          name="nameCompany"
          editable={props.company.editable}
          value={props.company.nameCompany}
          placeholder={props.company.nameCompany}
          label="Nombre"
          group="company"
          onChange={props.handleChange}
        />
        <Input
          name="cif"
          editable={props.company.editable}
          value={props.company.cif}
          placeholder={props.company.cif}
          label="CIF"
          group="company"
          onChange={props.handleChange}
        />
        <Input
          name="address"
          editable={props.company.editable}
          value={props.company.address}
          placeholder={props.company.address}
          label="address"
          group="company"
          onChange={props.handleChange}
        />
        <a target="_blank" href={props.company.map}>
          {' '}
          <LocationOn />
          Ubicación{' '}
        </a>
      </div>
    )}
  </>
);
