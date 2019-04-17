import * as React from 'react';
import { PeopleEntity } from '../../model';

import { fileSelectedHandler, handleChange, removeElementFromArray } from '../../common';
import { PersonFormComponent } from '../form';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Save, Edit, Cancel, Delete } from '@material-ui/icons';
import { toast } from 'react-toastify';
import { css } from 'emotion';


interface Props {
    person: PeopleEntity;
    showPerson: boolean;
    addNew: boolean;
    index?: number;
    onToggle: (fieldId: string) => void;
    removeFromList: (fieldId: string, index: number) => void;
    updateState: (fieldId: string, state: any, idField: string) => void;
}

interface State {
    person: PeopleEntity;
}

export class PersonComponent extends React.Component<Props, State> {
    prevState: State;
    constructor(props: Props) {
        super(props);
        this.state = { person: this.props.person };
        this.prevState = this.state;
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
            person: element
        }
        this.setState(newState);
    }

    onSave = (value: PeopleEntity, ) => {
        let newState: State = {
            ...this.state
        }

        let element: PeopleEntity = {
            ...value,
            editable: !this.state.person.editable,
        }
        let element2;
        // ESTO TENGO QUE CAMBIARLO A UN UPDATE EN LUGAR DE ANDAR ELMINANDO EL VACIO
        if (this.state.person.addressLink.length > 1 && (this.state.person.addressPic[0].img.data == null || this.state.person.addressPic[0] === null)) {
            const newPerson = {
                ...this.state.person,
                addressPic: removeElementFromArray(this.state.person.addressPic, (item) => item.img.data == null)
            }
            element2 = {
                ...element,
                addressPic: newPerson.addressPic
            }

            newState.person = element2;
        }
        if (this.state.person.picsLinks.length > 1 && (this.state.person.picsLinks[0].img.data === null || this.state.person.picsLinks[0] === null)) {

            const newPerson = {
                ...newState.person,
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

        newState = {
            ...this.state,
            person: element2
        }
        this.setState(newState);
        this.prevState = newState;//update content for prevState with the saved data
        this.props.updateState('person', newState.person, 'idPerson');
        toast.success('Guardado');
    }

    onCancel = () => {
        if (this.props.addNew)
            this.props.removeFromList('person', this.props.index)
        else {
            const newState: State = { ...this.prevState };
            newState.person.editable = false;
            this.setState(newState);
        }
    }

    //styles
    divStyle = css`
            width:80%;
            margin-left:10%;
    `;

    imgStyle = css`
            padding-top: 2%;
            padding-bottom: 0%;
            display: block;
            margin: auto;  
            max-width: 200px;
            border-radius:20%;
    `;
    
    cardContentStyle = css`
        padding-top: 0px;
    `;
    //end styles
    render() {
        const props = 'img';
        return (
            <div className={this.divStyle}>
                <div id='person' className='person'>
                    {
                        this.props.showPerson ?
                            <Card className='person.card'>
                                <CardActionArea>
                                    {
                                        (this.state.person.picsLinks[0] === null || this.state.person.picsLinks[0].img.data === null) ?
                                            null
                                            :
                                            <CardMedia 
                                                className={this.imgStyle}
                                                image={this.state.person.picsLinks[0].img.data}
                                                title={this.state.person.namePerson}
                                                component={'img' as 'div'}
                                            />
                                    }
                                    <CardContent className={this.cardContentStyle}>
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

            </div>
        );
    }

}