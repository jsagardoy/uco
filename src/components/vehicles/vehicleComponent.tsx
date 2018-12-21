import * as React from 'react';
import { VehicleEntity, removeElementFromArray } from '../../model';
import { fileSelectedHandler, handleChange } from '../../common/handlers';

import { VehicleFormComponent } from '../form/formVehicle';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { Save, Edit, Cancel, Delete } from '@material-ui/icons';

interface Props {
    vehicle: VehicleEntity;
    showVehicle: boolean;
    addNew: boolean;
    index?: number;
    onToggle: (string) => void;
    removeFromList: (fieldId: string, index: number) => void;
    updateState:(fieldId:string, state:any, idPerson:string) =>void;
}

interface State {
    vehicle: VehicleEntity;
}

export class VehicleComponent extends React.Component<Props, State> {
    prevState: State;

    constructor(props: Props) {
        super(props);
        this.state = { vehicle: this.props.vehicle };
        this.prevState = this.state;
    }

    fileSelectedHandler = (fieldName: string, value: File, group: string, fileName: string) => {

        fileSelectedHandler(fieldName, value, group, fileName, this.state.vehicle, (data) => {
            let newState: State = {
                ...this.state,
                vehicle: data
            }
            console.log(data);
            this.setState(newState);
        })
    }

    handleChange = (fieldName: string, value: any, group: string) => {
        this.setState(handleChange(fieldName, value, group, this.state));
    }

    onEdit = () => {
        let element: VehicleEntity = this.state.vehicle;
        element.editable = !element.editable;
        let newState: State = {
            ...this.state,
            vehicle: element
        }
        this.setState(newState);
    }

    onSave = (value: VehicleEntity, ) => {
        let newState: State = {
            ...this.state
        }

        let element: VehicleEntity = {
            ...value,
            editable: !this.state.vehicle.editable,
        }
        let element2;
       
        if (this.state.vehicle.pic.length >1 &&(this.state.vehicle.pic[0].img.data === null ||this.state.vehicle.pic[0] === null)) {

            const newPerson = {
                ...newState.vehicle,
                picsLinks: removeElementFromArray(this.state.vehicle.pic, (item) => item.img.data == null)
            }
            element2 = {
                ...element,
                pics: newPerson.pic
            }
        }
        else {
            element2 = {
                ...element
            }
        }

         newState= {
            ...this.state,
            vehicle: element2
        }
        this.setState(newState);
        this.prevState = newState;//update content for prevState with the saved data
        //aquí debería llamar a la API parar guardarlo y hacer sacar una tarjetita diciendo que OK o Fail
        this.props.updateState('vehicles', newState.vehicle, 'idVehicle');
    }


    onCancel = () => {
        if (this.props.addNew)
            this.props.removeFromList('vehicles', this.props.index)
        else {
            const newState: State = { ...this.prevState };
            newState.vehicle.editable = false;
            this.setState(newState);
        }
    }
    render() {
        return (

            this.props.showVehicle ?

                <Card className='vehicle.card'>
                    <CardActionArea>
                        {
                            (this.state.vehicle.pic[0]==null||this.state.vehicle.pic[0].img.data==null)?
                                null
                                :
                                <CardMedia component="img"
                                    image={this.state.vehicle.pic[0].img.data}
                                    title={this.state.vehicle.model}
                                />
                        }
                        <CardContent>
                            <VehicleFormComponent
                                vehicle={this.state.vehicle}
                                handleChange={this.handleChange}
                                handlefileSelectorChange={this.fileSelectedHandler}
                                addNew={this.props.addNew}
                            />
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {
                            this.state.vehicle.editable ?
                                <>
                                    <Button onClick={() => this.onSave(this.state.vehicle)}>
                                        <Save />
                                    </Button>
                                    <Button onClick={(e) => this.onCancel()}>
                                        <Cancel />
                                    </Button>
                                </>
                                :
                                <>
                                    <Button onClick={(e) => this.onEdit()}>
                                        <Edit />
                                    </Button>
                                    <Button onClick={(e) => this.props.removeFromList('vehicles', this.props.index)}>
                                        <Delete />
                                    </Button>
                                </>
                        }
                    </CardActions>
                </Card>
                :
                <>
                </>
        )
    }
}

