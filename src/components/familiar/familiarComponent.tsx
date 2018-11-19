import * as React from 'react';
import { FamiliarEntity } from '../../model';


import {dataType, fileSelectedHandler, handleChange} from '../../common';
import { FamiliarFormComponent } from '../form';
import { StateFamiliar } from '.';

interface Props{
    familiar: FamiliarEntity;
    showFamiliar: boolean;
    notEditable:boolean;
    addNew:boolean;
    savingNew: (fieldId: string,element:any)=>void;
    onToggle: (string) => void;
}


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
                </li>
                :
                <>
                </>
             }
    </div>
    );
    }
    
    }
