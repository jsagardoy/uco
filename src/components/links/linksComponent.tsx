import * as React from 'react';

import { LinkEntity } from '../../model';

import { removeElementFromArray, appendElementToArray, updateElementFromArray } from '../../common'
import { LinkFormComponent } from '../form';
import { Button, CardActionArea, Card, CardContent, CardActions } from '@material-ui/core';
import { createEmptyLink } from '.';
import { Save, Cancel, Edit, Delete } from '@material-ui/icons';

interface Props {
    links: Array<LinkEntity>
}
interface State {
    links: Array<LinkEntity>;
    showlink: boolean;
}

export class LinksComponent extends React.Component<Props, State> {
    prevState: State;
    
    constructor(props: Props) {
        super(props);
        this.state = {
            links: this.props.links,
            showlink: false,
        };
       this.prevState = this.state;
    }
    
    
    removeItem = (index) => {
        if (index === -1)
            index = this.state.links.length || 0
        let newState: State = { ...this.state };
        newState.links = removeElementFromArray(this.state.links, (item) => item === this.state.links[index]);
        this.setState(newState);
    }
    handleSubmit = (index: number) => {
        if (index === -1)
            index = this.state.links.length || 0
        let newArray: Array<LinkEntity> = appendElementToArray(this.state.links, this.state.links[index]);
        newArray[index].editable=false;
        let newState = {
            ...this.state,
            links: newArray
        };
        
        this.setState(newState);

    }
    handleChange = (index: number) => (fieldName: string, value: any, group: string) => {
        if (index === -1){
            index = this.state.links.length || 0

            }
        let element:LinkEntity = {
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

    addNewlink = () => {
        const element = createEmptyLink();
        let newList = appendElementToArray(this.state.links,element)
        
        this.setState(
            {
                links:newList,
                showlink: !this.state.showlink,
            }
        )
    }
    onEdit = (index: number) => {
        if (index === -1)
            index = this.state.links.length || 0

        let element: LinkEntity = {...this.state.links[index]}
        element.editable = !element.editable;
        let newState: State = {
            ...this.state,
        }
        newState.links[index] = element;

        this.setState(newState);
    }
    savelink = (index: number, value: LinkEntity) => {
        if (index === -1)
            index = this.state.links.length || 0
        let element = {
            data: value.data,
            editable: !this.state.links[index].editable
        }
        let newList = updateElementFromArray(this.state.links, element, (item) => item === this.state.links[index])

        let newState = {
            ...this.state,
            links: newList,
        }
        
        this.setState(newState);
        this.prevState=newState;//update content for prevState with the saved data
        //aquí debería llamar a la API parar guardarlo
    }

    onCancel = (index: number) => {
        if (this.state.links.length>this.prevState.links.length){
            this.removeItem(index);
        }else{
            const newState:State = {...this.prevState};
            newState.links[index].editable=false;
            this.setState(newState);
        }

    }

    render() {
        const newlink: LinkEntity = createEmptyLink();
        return (
            <div>
                <label className="links" htmlFor="links">Conexiones</label>
                {
                    this.state.links.map((link: LinkEntity, index: number) =>

                        <Card key={index}>
                            <CardActionArea>
                                <CardContent>
                                    {link.editable ?
                                        <LinkFormComponent key={index}
                                            link={link}
                                            onChange={this.handleChange(index)}
                                        />
                                        :
                                        link.data
                                    }

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {
                                    link.editable ?
                                        <>
                                            <Button onClick={() => this.savelink(index, link)}> <Save /></Button>
                                            <Button onClick={(e) => this.onCancel(index)}><Cancel /></Button>
                                        </>
                                        :
                                        <>
                                            <Button onClick={(e) => this.onEdit(index)}><Edit /></Button>
                                            <Button onClick={(e) => this.removeItem(index)}><Delete /></Button>
                                        </>

                                }
                            </CardActions>
                        </Card>
                    )

                }
                <Button onClick={(e) => this.addNewlink()}>Añadir una Conexión</Button>
            </div>
        )
    }

}
