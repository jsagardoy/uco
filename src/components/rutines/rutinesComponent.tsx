import * as React from 'react';
import { Button } from '@material-ui/core';
import {removeElementFromArray,appendElementToArray} from '../../common'
import { RutineFormComponent } from '../form';

interface Props {
    rutines: Array<string>;
}
interface State {
    rutine:string;
    rutines: Array<string>;
    showComponent:boolean;
}

export class RutinesComponent extends React.Component<Props,State> {
    constructor(props:Props){
        super(props);
        this.state={
                rutines:this.props.rutines, 
                rutine:'',
                showComponent:false,
        };
    }

    
    removeItem = (index) => {
        let newState:State = {...this.state};
        newState.rutines=removeElementFromArray(this.state.rutines,(item)=>item===this.state.rutines[index]);
        this.setState(newState);
    }
    handleSubmit=()=>{
        let newArray:Array<string> = appendElementToArray(this.state.rutines,this.state.rutine);
        let newState={...this.state,
                    rutines:newArray
        };
        this.setState(newState);
    }

    handleChange = (fileName:String,value:any,group:string) =>{
        this.setState({...this.state,
                        rutine:value
        });
    }
  
    addNewRutine = () => (
        this.setState(
            {...this.state,
                showComponent:!this.state.showComponent
            }
        )
    )
  
    render(){
        return(
            <>
            <label className="rutines" htmlFor="rutines">Rutinas</label>
            <ul>
           
                {
                    this.state.rutines.map((rutine,index)=>
                    <li key={rutine}>
                    {rutine} <Button onClick={(e)=>this.removeItem(index)}>-</Button>    
                    </li>
                )
                }
            </ul>
                <Button onClick={(e)=>this.addNewRutine()}>+</Button>
                {this.state.showComponent?
                <RutineFormComponent    rutine={this.state.rutine} 
                                        handleChange={this.handleChange}
                                        handleSubmit={this.handleSubmit}
                />
                :
                null
                }
            </>
        )
    }
                        
}
