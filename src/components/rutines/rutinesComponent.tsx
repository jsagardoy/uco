import * as React from 'react';

import { RutineEntity } from '../../model';

import { removeElementFromArray, appendElementToArray, updateElementFromArray, colors } from '../../common'
import { RutineFormComponent } from '../form';
import {
        ListItem,
        ListItemSecondaryAction,
        List
        } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { createEmptyRutine } from '.';
import { Edit, Save, Cancel, Delete, Add } from '@material-ui/icons';
import { toast } from 'react-toastify';
import { css } from 'emotion';
import { ButtonComponent } from '../Common';

interface Props {
    rutines: Array<RutineEntity>
    updateState: (fieldId: string, state: any) => void;
}
interface State {
    rutines: Array<RutineEntity>;
    showRutine: boolean;
}

export class RutinesComponent extends React.Component<Props, State> {
    prevState: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            rutines: this.props.rutines,
            showRutine: false,
        };
        this.prevState = this.state;
    }
    removeItem = (index) => {
        if (index === -1)
            index = this.state.rutines.length || 0
        let newState: State = { ...this.state };
        newState.rutines = removeElementFromArray(this.state.rutines, (item) => item === this.state.rutines[index]);
        this.setState(newState);
    }
    handleSubmit = (index: number) => {
        if (index === -1)
            index = this.state.rutines.length || 0
        let newArray: Array<RutineEntity> = appendElementToArray(this.state.rutines, this.state.rutines[index]);
        newArray[index].editable = false;
        let newState = {
            ...this.state,
            rutines: newArray
        };

        this.setState(newState);

    }
    handleChange = (index: number) => (fieldName: string, value: any, group: string) => {
        if (index === -1) {
            index = this.state.rutines.length || 0

        }
        let element: RutineEntity = {
            ...this.state[fieldName][index],
            data: value,

        }
        if (element.editable === null)
            element.editable = true;

        element.editable = true;
        let newList = updateElementFromArray(this.state[fieldName], element, (item) => item === this.state[fieldName][index])

        let newState = {
            ...this.state,
            [fieldName]: newList
        }
        this.setState(newState);
    }
    addNewRutine = () => {
        const element = createEmptyRutine();
        let newList = appendElementToArray(this.state.rutines, element)

        this.setState(
            {
                rutines: newList,
            }
        )
    }
    onEdit = (index: number) => {
        if (index === -1)
            index = this.state.rutines.length || 0

        let element: RutineEntity = this.state.rutines[index];
        element.editable = !element.editable;
        let newState: State = {
            ...this.state,
        }
        newState.rutines[index] = element;

        this.setState(newState);
    }
    saveRutine = (index: number, value: RutineEntity) => {
        let newState: State = {
            ...this.state,
        }
        newState.rutines[index].editable = !this.state.rutines[index].editable;
        this.setState(newState);
        this.prevState = newState;//update content for prevState with the saved data
        this.props.updateState('rutines', newState.rutines);
        toast.success('Guardado');
    }
    onCancel = (index: number) => {
        if (this.state.rutines.length > this.prevState.rutines.length) {
            this.removeItem(index);
        }
        else {
            const newState: State = { ...this.prevState };
            newState.rutines[index].editable = false;
            this.setState(newState);
        }


    }
    onClickButton = () =>{
      this.setState({...this.state,
              showRutine: !this.state.showRutine
      })
    }

    //styles
    wrapperStyles = css`
        margin-left: 10%;
        margin-right: 10%;
    `;
    divStyles = css`
        width:100%;
        border: 1px solid;
        border-radius: 8px;
        border-color: ${colors.GREEN};
        background-color: white;
    `;
    h2Styled = css`
        width: 100%;
        margin-top: 2%;
        margin-bottom: 0.5%;
        text-align: center;
        background-color: ${colors.GREEN};
        color: ${colors.YELLOW};
    `;

    listStyle = css`
        padding: 0px;
    `;

    //end Styles

    render() {
        //const newRutine: RutineEntity = createEmptyRutine();
        let styleDiv:React.CSSProperties=null;
        return (
            <div className={this.wrapperStyles}>
                <h2 className={this.h2Styled} onClick={this.onClickButton}>Rutinas</h2>
                {this.state.showRutine?
                <div className={this.divStyles}>
                    {
                        this.state.rutines.map((rutine: RutineEntity, index: number) =>

                            <List key={index} dense={true}>
                                <ListItem >
                                    {rutine.editable ?
                                        <RutineFormComponent key={index}
                                            rutine={rutine}
                                            onChange={this.handleChange(index)}
                                            editable={this.state.rutines[index].editable}
                                        />
                                        :
                                        rutine.data
                                    }
                                </ListItem>
                                <ListItemSecondaryAction >
                                    {
                                        rutine.editable ?
                                            <>
                                                <Button onClick={(e) => this.saveRutine(index, rutine)}> <Save /></Button>
                                                <Button onClick={(e) => this.onCancel(index)}><Cancel /></Button>
                                            </>
                                            :
                                            <>
                                                <Button onClick={(e) => this.onEdit(index)}><Edit /></Button>
                                                <Button onClick={(e) => this.removeItem(index)}> <Delete /></Button>
                                            </>

                                    }
                                </ListItemSecondaryAction>
                            </List>


                        )

                    }
                    <ButtonComponent text='Añadir una rutina' onClick={(e) => this.addNewRutine()}><Add /></ButtonComponent>
                </div>
                :
                null
                }
            </div>
        )
    }

}
