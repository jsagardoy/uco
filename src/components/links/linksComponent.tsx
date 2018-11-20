import * as React from 'react';
import { Button } from '@material-ui/core';
import {removeElementFromArray,appendElementToArray} from '../../common'
import { LinkFormComponent } from '../form';

/* interface Props{
    links: Array<string>;
}

export const LinksFormComponent:React.StatelessComponent<Props> = (props:Props) =>(
    <div id="links" className='links'>
        <label className="col-10" htmlFor="links">Relaciones</label>
        <ul className="linksList">
        {
            props.links.map((link)=> 
            <li key={link}>
                {link}
            </li>)
        }
        </ul>
    </div>
) */

interface Props {
    links: Array<string>;
}
interface State {
    link:string;
    links: Array<string>;
    showComponent:boolean;
}

export class LinksComponent extends React.Component<Props,State> {
    constructor(props:Props){
        super(props);
        this.state={
                links:this.props.links, 
                link:'',
                showComponent:false,
        };
    }

    
    removeItem = (index) => {
        let newState:State = {...this.state};
        newState.links=removeElementFromArray(this.state.links,(item)=>item===this.state.links[index]);
        this.setState(newState);
    }
    handleSubmit=()=>{
        let newArray:Array<string> = appendElementToArray(this.state.links,this.state.link);
        let newState={...this.state,
                    links:newArray
        };
        this.setState(newState);
    }

    handleChange = (fileName:String,value:any,group:string) =>{
        this.setState({...this.state,
                        link:value
        });
    }
  
    addNewLink = () => (
        this.setState(
            {...this.state,
                showComponent:!this.state.showComponent
            }
        )
    )
  
    render(){
        return(
            <>
            <label className="links" htmlFor="links">Rutinas</label>
            <ul>
           
                {
                    this.state.links.map((link,index)=>
                    <li key={link}>
                    {link} <Button onClick={(e)=>this.removeItem(index)}>-</Button>    
                    </li>
                )
                }
            </ul>
                <Button onClick={(e)=>this.addNewLink()}>+</Button>
                {this.state.showComponent?
                <LinkFormComponent    link={this.state.link} 
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
