import * as React from 'react';
import { PeopleEntity, VehicleEntity } from '../../model';
import { fileSelectedHandler, handleChange } from '../../common/handlers';

import { VehicleFormComponent } from '../form/formVehicle';
import { dataType, readFile } from '../../common';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

interface Props {
    vehicle: VehicleEntity;
    showVehicle: boolean;
    notEditable: boolean;
    addNew: boolean;
    index?: number;
    savingNew: (fieldId: string, element: any) => void;
    onToggle: (string) => void;
    removeFromList: (fieldId: string, index: number) => void;
}

interface State {
    vehicle: VehicleEntity;
}

export class VehicleComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { vehicle: this.props.vehicle }
    }

    fileSelectedHandler = (fieldName: string, value: File, group: string, fileName: string) => {

        fileSelectedHandler(fieldName, value, group, fileName, this.state.vehicle, (data) => {
            let newState: State = {
                ...this.state,
                vehicle: data
            }
            this.setState(newState);
        })
    }

    handleChange = (fieldName: string, value: any, group: string) => {
        this.setState(handleChange(fieldName, value, group, this.state));
    }
    render() {
        return (

            this.props.showVehicle ?

                <Card className='vehicle.card'>
                    <CardActionArea>
                        <CardMedia component="img"
                            image={this.state.vehicle.pic[0].img.data}
                            title={this.state.vehicle.model}
                        />
                        <CardContent>
                            <VehicleFormComponent vehicle={this.state.vehicle}
                                notEditable={this.props.notEditable}
                                handleChange={this.handleChange}
                                handlefileSelectorChange={this.fileSelectedHandler}
                                addNew={this.props.addNew}
                                savingNew={this.props.savingNew}
                            />
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={(e) => this.props.removeFromList('vehicles', this.props.index)}>Eliminar vehiculo</Button>
                    </CardActions>
                </Card>

                :
                <>
                </>
        )
    }
}

