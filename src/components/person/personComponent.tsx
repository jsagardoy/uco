

import * as React from 'react';
import { PeopleEntity, removeElementFromArray } from '../../model';


import { fileSelectedHandler, handleChange } from '../../common';
import { PersonFormComponent } from '../form';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import {Save,Edit,Cancel,Delete } from '@material-ui/icons';


interface Props {
    person: PeopleEntity;
    showPerson: boolean;
    addNew: boolean;
    index?:number;
    onToggle: (fieldId: string) => void;
    removeFromList: (fieldId: string, index: number) => void;
}

interface State {
    person:PeopleEntity;
}

export class PersonComponent extends React.Component<Props, State> {
    prevState: State;
    constructor(props: Props) {
        super(props);
        this.state = { person: this.props.person };
        this.prevState=this.state;
    }
    fileSelectedHandler = (fieldName: string, value: File, group: string, fileName: string) => {

        fileSelectedHandler(fieldName, value, group, fileName, this.state.person, (data) => {
            let newState: State = {
                ...this.state,
                person: data
            }
            this.setState(newState);
        })
    }


    handleChange = (fieldName: string, value: any, group: string) => {
        this.setState(handleChange(fieldName, value, group, this.state));
    }

    onEdit = () => {
        let element: PeopleEntity = this.state.person;
        element.editable = !element.editable;
        let newState: State = {
            ...this.state,
            person :element
        }
        this.setState(newState);
    }
    
    onSave = (value: PeopleEntity, ) => {

        let element: PeopleEntity = {
            ...value,
            editable: !this.state.person.editable,
        }
        let element2;
        if (this.state.person.picsLinks[0].img.data === null) {

            const newPerson = {
                ...this.state.person,
                picsLinks: removeElementFromArray(this.state.person.picsLinks, (item) => item.img.data == null)
            }
            element2 = {
                ...element,
                picsLinks: newPerson.picsLinks
            }
        }
        else {
            element2 = {
                ...element
            }
        }

        const newState: State = {
            ...this.state,
            person: element2
        }
        this.setState(newState);
        this.prevState = newState;//update content for prevState with the saved data
        //aquí debería llamar a la API parar guardarlo y hacer sacar una tarjetita diciendo que OK o Fail
    }

    onCancel = () => {
            if(this.props.addNew)
                this.props.removeFromList('person', this.props.index)
            else{
                const newState:State = {...this.prevState};
                newState.person.editable=false;
                this.setState(newState);
            }  
    }

    render() {
        return (<div id='person' className='person'>
            {
                this.props.showPerson ?
                    <Card className='person.card'>
                        <CardActionArea>
                        {
                        (this.state.person.picsLinks[0]===null||this.state.person.picsLinks[0].img.data===null)?
                        null
                        :
                            <CardMedia component="img"
                                image={this.state.person.picsLinks[0].img.data}
                                title={this.state.person.namePerson}
                            />
                        }
                            <CardContent>
                                        <PersonFormComponent
                                            person={this.state.person}
                                            handleChange={this.handleChange}
                                            handlefileSelectorChange={this.fileSelectedHandler}
                                            editable={this.state.person.editable}
                                        />
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {
                                this.state.person.editable ?
                                    <>
                                        <Button onClick={() => this.onSave(this.state.person)}>
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
                                        <Button onClick={(e) => this.props.removeFromList('people', this.props.index)}>
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