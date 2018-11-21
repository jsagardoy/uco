import * as React from 'react';
import { FamiliarEntity } from '../../model';


import { dataType, fileSelectedHandler, handleChange } from '../../common';
import { FamiliarFormComponent } from '../form';
import { StateFamiliar } from '.';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

interface Props {
    familiar: FamiliarEntity;
    showFamiliar: boolean;
    notEditable: boolean;
    addNew: boolean;
    index?: number;
    savingNew: (fieldId: string, element: any) => void;
    onToggle: (fieldId: string) => void;
    removeFromList: (fieldId: string, index: number) => void;
}


export class FamiliarComponent extends React.Component<Props, StateFamiliar> {
    constructor(props: Props) {
        super(props);
        this.state = { familiar: this.props.familiar }
    }
    fileSelectedHandler = (fieldName: string, value: File, group: string, fileName: string) => {

        fileSelectedHandler(fieldName, value, group, fileName, this.state.familiar, (data) => {
            let newState: StateFamiliar = {
                ...this.state,
                familiar: data
            }
            this.setState(newState);
        })
    }


    handleChange = (fieldName: string, value: any, group: string) => {
        this.setState(handleChange(fieldName, value, group, this.state));
    }
    render() {
        return (<div id='familiars' className='familiars'>
            {
                this.props.showFamiliar ?
                    <Card className='familiar.card'>
                        <CardActionArea>
                            <CardMedia component="img"
                                image={this.state.familiar.familiarPics[0].img.data}
                                title={this.state.familiar.nameFamiliar}
                            />
                            <CardContent>
                                <FamiliarFormComponent familiar={this.state.familiar}
                                    notEditable={this.props.notEditable}
                                    savingNew={this.props.savingNew}
                                    handleChange={this.handleChange}
                                    handlefileSelectorChange={this.fileSelectedHandler}
                                    addNew={this.props.addNew}
                                />
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button onClick={(e) => this.props.removeFromList('familiars', this.props.index)}>Eliminar familiar</Button>
                        </CardActions>
                    </Card>

                    :
                    <>
                    </>
            }
        </div>
        );
    }

}
