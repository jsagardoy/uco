import * as React from 'react';
import { FamiliarEntity } from '../../model/familiar';
import { LocationOn } from '@material-ui/icons';
import {GalleryComponent} from '../../common';

interface Props{
    familiar:FamiliarEntity;
}

export const FamiliarComponent: React.StatelessComponent<Props> = (props:Props) =>(
        <div className = "card">
            <div className="card-header">
                <h3> {props.familiar.nameFamiliar}</h3>
            </div>
            <div className="card-body">
                <label className="col-10" htmlFor="familiarName">Nombre</label>
                <input type="text" id="name" className="form-control" placeholder={props.familiar.nameFamiliar}/>

                <label className="col-10" htmlFor="familiarAddress">Dirección</label>
                <input type="text" id="familiarAddress" className="form-control" placeholder={props.familiar.familiarAddress}/>
                <a target="_blank" href={props.familiar.addressLink}><LocationOn/> Ubicación</a> 


                <label className="col-10" htmlFor="related">Tipo de relación</label>
                <input type="text" id="related" className="form-control" placeholder={props.familiar.related}/>

              <GalleryComponent list={props.familiar.familiarPics}/> 
            </div> 
        </div>
)

