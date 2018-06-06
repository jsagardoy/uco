import * as React from 'react';
import {PeopleEntity} from '../../model';

interface Props {
    person: PeopleEntity;
    editable:boolean
}

export const PersonComponent: React.StatelessComponent<Props> = (props:Props) => {
    return(
        <form>
            <fieldset disabled={props.editable}>
                <div className='form-group'>
                    <label  className="col-2" htmlFor="name">Nombre</label>
                    <input type="text" className="form-control" id="name" placeholder={props.person.name}/>
                </div>
                <div className='form-group'>
                    <label className="col-10" htmlFor="aka">Alias</label>
                    <input type="text" className="form-control" id="aka" placeholder={props.person.aka}/>
                </div>
                <div className='form-group'>
                    <label  className ="col-12"  htmlFor="personPic">Imágenes</label>
                   
                    {
                         props.person.picsLinks.map ((image) =>
                            <img key={image} className=".img-fluid img-thumbnail float-left" id="personPic" src={image}/>
                         )
                    }
                    
                </div>
            </fieldset>
        </form>
    );
}
