import * as React from 'react';

import { RutineEntity } from '../../model';

import { removeElementFromArray, appendElementToArray, updateElementFromArray } from '../../common'
import { RutineFormComponent } from '../form';
import { Button, CardActionArea, Card, CardContent, CardActions } from '@material-ui/core';
import { createEmptyRutine } from '.';
import { Edit, Save, Cancel, Delete } from '@material-ui/icons';

interface Props {
    rutines: Array<RutineEntity>
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
        newArray[index].editable=false;
        let newState = {
            ...this.state,
            rutines: newArray
        };
        
        this.setState(newState);

    }
    handleChange = (index: number) => (fieldName: string, value: any, group: string) => {
        if (index === -1){
            index = this.state.rutines.length || 0

            }
        let element:RutineEntity = {
                ...this.state[fieldName][index],
                data: value,
                
            }
            if (element.editable===null)
                element.editable=true;

        element.editable=true;
        let newList = updateElementFromArray(this.state[fieldName], element, (item) => item === this.state[fieldName][index])
        
        let newState = {
            ...this.state,
            [fieldName]: newList
        }
        this.setState(newState);
    }

    addNewRutine = () => {
        const element = createEmptyRutine();
        let newList = appendElementToArray(this.state.rutines,element)
        
        this.setState(
            {
                rutines:newList,
                showRutine: !this.state.showRutine,
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
        if (index === -1)
            index = this.state.rutines.length || 0
        let element = {
            data: value.data,
            editable: !this.state.rutines[index].editable
        }
        let newList = updateElementFromArray(this.state.rutines, element, (item) => item === this.state.rutines[index])

        let newState = {
            ...this.state,
            rutines: newList,
        }
        
        this.setState(newState);
        this.prevState=newState;//update content for prevState with the saved data
        //aquí debería llamar a la API parar guardarlo
    }

    onCancel = (index: number) => {
        if (this.state.rutines.length>this.prevState.rutines.length){
            this.removeItem(index);
        }
        else{
            const newState:State = {...this.prevState};
            newState.rutines[index].editable=false;
            this.setState(newState);
        }

    }

    render() {
        const newRutine: RutineEntity = createEmptyRutine();
        return (
            <div>
                <label className="rutines" htmlFor="rutines">Rutinas</label>
                {
                    this.state.rutines.map((rutine: RutineEntity, index: number) =>

                        <Card key={index}>
                            <CardActionArea>
                                <CardContent>
                                    {rutine.editable ?
                                        <RutineFormComponent key={index}
                                            rutine={rutine}
                                            onChange={this.handleChange(index)}
                                            editable={this.state.rutines[index].editable}
                                            
                                        />
                                        :
                                        rutine.data
                                    }

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {
                                    rutine.editable ?
                                        <>
                                            <Button onClick={() => this.saveRutine(index, rutine)}> <Save /></Button>
                                            <Button onClick={(e) => this.onCancel(index)}><Cancel /></Button>
                                        </>
                                        :
                                        <>
                                            <Button onClick={(e) => this.onEdit(index)}><Edit /></Button>
                                            <Button onClick={(e) => this.removeItem(index)}> <Delete /></Button>
                                        </>

                                }
                            </CardActions>
                        </Card>
                    )

                }
                <Button onClick={(e) => this.addNewRutine()}>Añadir una rutina</Button>
            </div>
        )
    }

}
