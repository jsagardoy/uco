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
import {Save,Edit,Cancel,Delete } from '@material-ui/icons'
import { TextField } from '@material-ui/core';

interface Props {
    familiar: FamiliarEntity;
    showFamiliar: boolean;
    addNew: boolean;
    index?:number;
    savingNew: (fieldId: string, element: any) => void;
    onToggle: (fieldId: string) => void;
    removeFromList: (fieldId: string, index: number) => void;
}


export class FamiliarComponent extends React.Component<Props, StateFamiliar> {
    prevState: StateFamiliar;
    constructor(props: Props) {
        super(props);
        this.state = { familiar: this.props.familiar }
        this.prevState=this.state;
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

    onEdit = () => {
        let element: FamiliarEntity = this.state.familiar;
        element.notEditable = !element.notEditable;
        let newState: StateFamiliar = {
            ...this.state,
            familiar :element
        }
        this.setState(newState);
    }
    
    onSave = (value: FamiliarEntity) => {

        let element:FamiliarEntity= {
            ...value,
            notEditable: !this.state.familiar.notEditable
        }
        const newState: StateFamiliar = {
            ...this.state,
            familiar:element
        }
        
        this.setState(newState);
        this.prevState=newState;//update content for prevState with the saved data
        //aquí debería llamar a la API parar guardarlo y hacer sacar una tarjetita diciendo que OK o Fail
    }

    onCancel = () => {
            if(this.props.addNew)
                this.props.removeFromList('familiars', this.props.index)
            else{
                const newState:StateFamiliar = {...this.prevState};
                newState.familiar.notEditable=false;
                this.setState(newState);
            }  
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
                                        <FamiliarFormComponent
                                            familiar={this.state.familiar}
                                            savingNew={this.props.savingNew}
                                            handleChange={this.handleChange}
                                            handlefileSelectorChange={this.fileSelectedHandler}
                                            addNew={this.props.addNew}
                                        />
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {
                            this.state.familiar.notEditable ?
                                        <>
                                            <Button onClick={() => this.onSave(this.state.familiar)}> 
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
                                            <Button onClick={(e) => this.props.removeFromList('familiars', this.props.index)}>
                                               <Delete />
                                            </Button>
                                        </>
                            }
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
