import * as React from 'react';
import { FamiliarEntity, removeElementFromArray } from '../../model';


import { dataType, fileSelectedHandler, handleChange } from '../../common';
import { FamiliarFormComponent } from '../form';
import { StateFamiliar } from '.';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import {Save,Edit,Cancel,Delete } from '@material-ui/icons';


interface Props {
    familiar: FamiliarEntity;
    showFamiliar: boolean;
    addNew: boolean;
    index?:number;
    onToggle: (fieldId: string) => void;
    removeFromList: (fieldId: string, index: number) => void;
    updateState:(fieldId:string, state:any, idPerson:string) =>void;
}


export class FamiliarComponent extends React.Component<Props, StateFamiliar> {
    prevState: StateFamiliar;
    constructor(props: Props) {
        super(props);
        this.state = { familiar: this.props.familiar };
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
        element.editable = !element.editable;
        let newState: StateFamiliar = {
            ...this.state,
            familiar :element
        }
        this.setState(newState);
    }
    
    onSave = (value: FamiliarEntity, ) => {
        let newState: StateFamiliar = {
            ...this.state
        }

        let element: FamiliarEntity = {
            ...value,
            editable: !this.state.familiar.editable,
        }
        let element2;
       
        if (this.state.familiar.familiarPics.length >1 &&(this.state.familiar.familiarPics[0].img.data === null ||this.state.familiar.familiarPics[0] === null)) {

            const newPerson = {
                ...newState.familiar,
                picsLinks: removeElementFromArray(this.state.familiar.familiarPics, (item) => item.img.data == null)
            }
            element2 = {
                ...element,
                pics: newPerson.familiarPics
            }
        }
        else {
            element2 = {
                ...element
            }
        }

         newState= {
            ...this.state,
            familiar: element2
        }
        this.setState(newState);
        this.prevState = newState;//update content for prevState with the saved data
        //aquí debería llamar a la API parar guardarlo y hacer sacar una tarjetita diciendo que OK o Fail
        this.props.updateState('familiars', newState.familiar, 'idFamiliar');
    }

    onCancel = () => {
            if(this.props.addNew)
                this.props.removeFromList('familiars', this.props.index)
            else{
                const newState:StateFamiliar = {...this.prevState};
                newState.familiar.editable=false;
                this.setState(newState);
            }  
    }

    render() {
        return (<div id='familiars' className='familiars'>
            {
                this.props.showFamiliar ?
                    <Card className='familiar.card'>
                        <CardActionArea>
                        {
                        (this.state.familiar.familiarPics[0]==null||this.state.familiar.familiarPics[0].img.data==null)?
                        null
                        :
                            <CardMedia component="img"
                                image={this.state.familiar.familiarPics[0].img.data}
                                title={this.state.familiar.nameFamiliar}
                            />
                        }
                            <CardContent>
                                        <FamiliarFormComponent
                                            familiar={this.state.familiar}
                                            handleChange={this.handleChange}
                                            handlefileSelectorChange={this.fileSelectedHandler}
                                            addNew={this.props.addNew}
                                        />
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {
                                this.state.familiar.editable ?
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
