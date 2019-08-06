import * as React from 'react';
import { PeopleEntity } from '../../model';
import { TableRow, TableCell } from '@material-ui/core';
import { css } from 'emotion';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import { colors } from '../../common';

interface Props {
  person: PeopleEntity;
  open: boolean;
  onClickRow: (id: number) => void;
  handleOpen: () => void;
}

const imgStyle = css`
  border-radius: 50%;
  width: 5em;
  height: 5em;
`;
const textStyle = css`
  color: ${colors.YELLOW};
`;

export const PersonRow: React.FC<Props> = (props: Props) => {
  return (
    <TableRow>
      <TableCell align="left" onClick={() => props.onClickRow(props.person.idPerson)}>
        <img className={imgStyle} src={props.person.picsLinks[0].img.data} alt="person portrait" />
      </TableCell>
      <TableCell align="left" onClick={() => props.onClickRow(props.person.idPerson)}>
        {props.person.namePerson}
      </TableCell>
      <TableCell align="left" onClick={() => props.onClickRow(props.person.idPerson)}>
        {props.person.aka}
      </TableCell>

      <TableCell align="left">
        {props.open ? (
          <AutoRotatingCarousel open={props.open} onClose={() => props.handleOpen()} autoplay={false}>
            {props.person.vehicles.map(vehicle => (
              <Slide
                key={vehicle.idVehicle}
                media={<img src={vehicle.pic[0].img.data} />}
                mediaBackgroundStyle={{ backgroundColor: colors.GREEN, color: colors.YELLOW }}
                style={{ backgroundColor: colors.GREEN }}
                title={vehicle.brand}
                subtitle={vehicle.plate}
              />
            ))}
          </AutoRotatingCarousel>
        ) : (
          <img className={imgStyle} src={props.person.vehicles[0].pic[0].img.data} onClick={() => props.handleOpen()} />
        )}
      </TableCell>
    </TableRow>
  );
};
