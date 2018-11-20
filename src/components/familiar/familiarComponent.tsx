import * as React from 'react';
<<<<<<< HEAD
import { FamiliarEntity } from '../../model';
=======
import { FamiliarEntity } from '../../model/familiar';
import { GalleryComponent } from '../helperComponent';
import { LocationOn } from '@material-ui/icons';
<<<<<<< HEAD
=======
>>>>>>> no message
>>>>>>> master


import {dataType, fileSelectedHandler, handleChange} from '../../common';
import { FamiliarFormComponent } from '../form';
import { StateFamiliar } from '.';
import Button from '@material-ui/core/Button';

interface Props{
    familiar: FamiliarEntity;
    showFamiliar: boolean;
    notEditable:boolean;
    addNew:boolean;
    index?:number;
    savingNew: (fieldId: string,element:any)=>void;
    onToggle: (fieldId:string) => void;
    removeFromList:(fieldId:string,index:number)=>void;
}


<<<<<<< HEAD
=======
<<<<<<< HEAD
export class FamiliarComponent extends React.Component<Props,StateFamiliar> {
    constructor(props:Props){
        super(props);
        this.state={familiar:this.props.familiar}
    }
    fileSelectedHandler = (fieldName:string,value:File,group:string, fileName:string) => { 
        
        fileSelectedHandler(fieldName, value, group, fileName,this.state.familiar,(data)=>{
            let newState:StateFamiliar={
                ...this.state,
                familiar:data
            }
            this.setState(newState);
        })
    }
    
=======
>>>>>>> master
                <GalleryComponent imagesList={props.familiar.familiarPics}/>
            </div> 
        </div>
)
>>>>>>> no message

    handleChange = (fieldName:string, value:any, group:string) =>{
        this.setState(handleChange(fieldName,value,group,this.state));
    }
    render(){
        return(<div id='familiars' className='familiars'>
            {
            this.props.showFamiliar ?
                <li>
                    <FamiliarFormComponent familiar={this.state.familiar} 
                                            notEditable={this.props.notEditable}
                                            savingNew={this.props.savingNew}
                                            handleChange={this.handleChange}
                                            handlefileSelectorChange={this.fileSelectedHandler}
                                            addNew={this.props.addNew}
                    />
                    <Button onClick={(e)=>this.props.removeFromList('familiars',this.props.index)}>Eliminar familiar</Button>
                </li>
                :
                <>
                </>
             }
    </div>
    );
    }
    
    }
