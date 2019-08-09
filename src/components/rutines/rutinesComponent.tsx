import * as React from 'react';

import { RutineEntity } from '../../model';

import { removeElementFromArray, appendElementToArray, updateElementFromArray, colors } from '../../common';
import { RutineFormComponent } from '../form';
import { ListItem, ListItemSecondaryAction, List } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { createEmptyRutine } from '.';
import { Edit, Save, Cancel, Delete, Add } from '@material-ui/icons';
import { toast } from 'react-toastify';
import { css } from 'emotion';
import { ButtonComponent } from '../Common';

interface Props {
  rutines: Array<RutineEntity>;
  updateState: (fieldId: string, state: any) => void;
  showRutines: boolean;
}
interface State {
  rutines: Array<RutineEntity>;
}

export class RutinesComponent extends React.Component<Props, State> {
  public prevState: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      rutines: this.props.rutines,
    };
    this.prevState = this.state;
  }
  public removeItem = index => {
    if (index === -1) {
      index = this.state.rutines.length || 0;
    }
    const newState: State = { ...this.state };
    newState.rutines = removeElementFromArray(this.state.rutines, item => item === this.state.rutines[index]);
    this.setState(newState);
  };
  public handleSubmit = (index: number) => {
    if (index === -1) {
      index = this.state.rutines.length || 0;
    }
    const newArray: Array<RutineEntity> = appendElementToArray(this.state.rutines, this.state.rutines[index]);
    newArray[index].editable = false;
    const newState = {
      ...this.state,
      rutines: newArray,
    };

    this.setState(newState);
  };
  public handleChange = (index: number) => (fieldName: string, value: any, group: string) => {
    if (index === -1) {
      index = this.state.rutines.length || 0;
    }
    const element: RutineEntity = {
      ...this.state[fieldName][index],
      data: value,
    };
    if (element.editable === null) {
      element.editable = true;
    }

    element.editable = true;
    const newList = updateElementFromArray(
      this.state[fieldName],
      element,
      item => item === this.state[fieldName][index]
    );

    const newState = {
      ...this.state,
      [fieldName]: newList,
    };
    this.setState(newState);
  };
  public addNewRutine = () => {
    const element = createEmptyRutine();
    const newList = appendElementToArray(this.state.rutines, element);
    this.setState({
      rutines: newList,
    });
  };
  public onEdit = (index: number) => {
    if (index === -1) {
      index = this.state.rutines.length || 0;
    }

    const element: RutineEntity = this.state.rutines[index];
    element.editable = !element.editable;
    const newState: State = {
      ...this.state,
    };
    newState.rutines[index] = element;

    this.setState(newState);
  };
  public saveRutine = (index: number, value: RutineEntity) => {
    const newState: State = {
      ...this.state,
    };
    newState.rutines[index].editable = !this.state.rutines[index].editable;
    this.setState(newState);
    this.prevState = newState; // update content for prevState with the saved data
    this.props.updateState('rutines', newState.rutines);
    toast.success('Guardado');
  };
  public onCancel = (index: number) => {
    if (this.state.rutines.length > this.prevState.rutines.length) {
      this.removeItem(index);
    } else {
      const newState: State = { ...this.prevState };
      newState.rutines[index].editable = false;
      this.setState(newState);
    }
  };
  // styles
  public wrapperStyles = css`
    margin-left: 10%;
    margin-right: 10%;
  `;
  public divStyles = css`
    width: 100%;
    background-color: white;
  `;
  public h2Styled = css`
    width: 100%;
    margin-top: 2%;
    margin-bottom: 0.5%;
    text-align: center;
    background-color: ${colors.GREEN};
    color: ${colors.YELLOW};
    border-radius: 10px;
  `;

  public listStyle = css`
    padding: 0px;
  `;

  public buttonDivStyle = css`
    width: 100%;
    margin-bottom: 3em;
    margin-right: 2em;
  `;
  // end Styles

  public render() {
    // const newRutine: RutineEntity = createEmptyRutine();
    const styleDiv: React.CSSProperties = null;
    return (
      <>
        <div className={this.divStyles} hidden={!this.props.showRutines}>
          {this.state.rutines.map((rutine: RutineEntity, index: number) => (
            <List key={index} dense={true}>
              <ListItem>
                {rutine.editable ? (
                  <RutineFormComponent
                    key={index}
                    rutine={rutine}
                    onChange={this.handleChange(index)}
                    editable={this.state.rutines[index].editable}
                  />
                ) : (
                  rutine.data
                )}
              </ListItem>
              <ListItemSecondaryAction>
                {rutine.editable ? (
                  <>
                    <Button onClick={e => this.saveRutine(index, rutine)}>
                      {' '}
                      <Save />
                    </Button>
                    <Button onClick={e => this.onCancel(index)}>
                      <Cancel />
                    </Button>
                  </>
                ) : (
                  <>
                    <Button onClick={e => this.onEdit(index)}>
                      <Edit />
                    </Button>
                    <Button onClick={e => this.removeItem(index)}>
                      <Delete />
                    </Button>
                  </>
                )}
              </ListItemSecondaryAction>
            </List>
          ))}
          <div id="buttonDiv" className={this.buttonDivStyle}>
            <ButtonComponent text="Añadir una rutina" onClick={() => this.addNewRutine()}>
              <Add />
            </ButtonComponent>
          </div>
        </div>
      </>
    );
  }
}
