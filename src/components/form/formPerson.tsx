import * as React from 'react';

import { LocationOn } from '@material-ui/icons';
import { PeopleEntity } from '../../model';

import { GalleryComponent, colors } from '../../common';
import { Input, InputFile } from './common';
import { css } from 'emotion';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

interface Props {
  person: PeopleEntity;
  editable: boolean;
  handleChange: (fieldName: string, value: any, group: string) => void;
  handlefileSelectorChange: (fieldName: string, value: File, group: string, fileName: string) => void;
  showGallery: boolean;
  handleShowGallery: () => void;
  showAddressGallery: boolean;
  handleShowAddressGallery: () => void;
}

// Styles

const h1Styled = css`
  margin-top: 0px;
  width: 100%;
  text-align: center;
  background-color: ${colors.GREEN};
  color: ${colors.YELLOW};
`;

const h2Styled = css`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  text-align: center;
  background-color: ${colors.GREEN};
  color: ${colors.YELLOW};
  border-radius: 10px;
  font-size: 24px;
`;
const linkStyled = css`
  font-size: 20px;
`;
const divStyle = css`
  width: 100%;
  margin-top: 2%;
  padding: auto;
  vertical-align: middle;
`;
const galleryStyle = css`
  margin-top: 2%;
  padding: 10px;
  border: 1px solid;
  border-radius: 8px;
  border-color: ${colors.GREEN};
  background-color: white;
`;
// endStyles

export const PersonFormComponent: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <form className="PersonComponent">
      {props.person.aka ? (
        <h1 className={h1Styled}>{`${props.person.namePerson} - ${props.person.aka}`}</h1>
      ) : (
        <h1 className={h1Styled}>{`${props.person.namePerson} - ${props.person.aka}`}</h1>
      )}
      <div className={galleryStyle}>
        <Input
          name="namePerson"
          editable={props.editable}
          value={props.person.namePerson}
          placeholder={props.person.namePerson}
          label="Nombre"
          group="person"
          onChange={props.handleChange}
        />

        <Input
          name="aka"
          editable={props.editable}
          value={props.person.aka}
          placeholder={props.person.aka}
          label="Alias"
          group="person"
          onChange={props.handleChange}
        />
        <Input
          name="address"
          editable={props.editable}
          value={props.person.address}
          placeholder={props.person.address}
          label="Dirección"
          group="person"
          onChange={props.handleChange}
        />
        {props.editable ? (
          <Input
            name="addressLink"
            editable={props.editable}
            value={props.person.addressLink}
            placeholder={props.person.addressLink}
            label="URL Mapa"
            group="person"
            onChange={props.handleChange}
          />
        ) : (
          <div className={divStyle}>
            <Link
              className={linkStyled}
              underline="hover"
              color="inherit"
              target="_blank"
              href={props.person.addressLink}
            >
              <LocationOn style={{ color: colors.GREEN }} /> Ubicación
            </Link>
          </div>
        )}
      </div>
      <h2 className={h2Styled} onClick={() => props.handleShowGallery()}>
        Fotografías
      </h2>

      <div id="gallery" hidden={!props.showGallery}>
        <div className={galleryStyle}>
          <GalleryComponent list={props.person.picsLinks} />
        </div>
      </div>
      {props.editable ? <InputFile group="person" name="picsLinks" onChange={props.handlefileSelectorChange} /> : null}

      <h2 className={h2Styled} onClick={() => props.handleShowAddressGallery()}>
        Fotografías del Domicilio
      </h2>
      <div className={galleryStyle} hidden={!props.showAddressGallery}>
        <GalleryComponent list={props.person.addressPic} />
        {props.editable ? (
          <InputFile group="person" name="addressPic" onChange={props.handlefileSelectorChange} />
        ) : null}
      </div>
    </form>
  );
};
