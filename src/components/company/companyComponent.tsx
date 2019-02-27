import * as React from 'react';
import { CompanyEntity } from '../../model';
import { ExpandMore, ExpandLess, Save, Cancel, Edit, Delete } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { dataType } from '../../common';
import { CompanyFormComponent } from '../form'
import { handleChange } from '../../common/handlers';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { CardActions } from '@material-ui/core';
import {toast} from 'react-toastify';

interface Props {
    company: CompanyEntity;
    showCompany: boolean;
    addNew: boolean;
    index?: number;
    onToggle: (string) => void;
    removeFromList: (fieldId: string, index: number) => void;
    updateState:(fieldId:string, state:any, idPerson:string) =>void;
}

interface State {
    company: CompanyEntity;
}

export class CompanyComponent extends React.Component<Props, State>{
    prevState:State;
    constructor(props: Props) {
        super(props);
        this.state = { company: this.props.company };
        this.prevState=this.state;
    }

    handleChange = (fieldName: string, value: any, group: string) => {
        this.setState(handleChange(fieldName, value, group, this.state));
    }

    onEdit = () => {
        let element: CompanyEntity = this.state.company;
        element.editable = !element.editable;
        let newState: State = {
            ...this.state,
            company :element
        }
        this.setState(newState);
    }
    
    onSave = (value: CompanyEntity, ) => {
        let newState: State = {
            ...this.state
        }

        let element: CompanyEntity = {
            ...value,
            editable: !this.state.company.editable,
        }
        let element2;
              
            element2 = {
                ...element
            }

         newState= {
            ...this.state,
            company: element2
        }
        this.setState(newState);
        this.prevState = newState;//update content for prevState with the saved data
        this.props.updateState('companies', newState.company, 'idCompany');
        toast.success('Guardado');
    }

    onCancel = () => {
            if(this.props.addNew){
                this.props.removeFromList('companies', this.props.index);

            }
            else{
                const newState:State = {...this.prevState};
                newState.company.editable=false;
                this.setState(newState);
            }  
    }


    render() {
        return (
            this.props.showCompany ?

                <Card className='company.card'>
                    <CardActionArea>
                        <CardContent>
                            <CompanyFormComponent 
                                addNew={this.props.addNew}
                                company={this.state.company}
                                handleChange={this.handleChange}
                            />
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {
                            this.state.company.editable ?
                                <>
                                    <Button onClick={() => this.onSave(this.state.company)}>
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
                                    <Button onClick={(e) => this.props.removeFromList('companies', this.props.index)}>
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