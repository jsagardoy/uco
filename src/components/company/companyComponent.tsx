import * as React from 'react';
import { CompanyEntity } from '../../model';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import {dataType} from '../../common';
import {CompanyFormComponent} from '../form'
import { handleChange } from '../../common/handlers';

interface Props {
    company: CompanyEntity;
    showCompany: boolean;
    onToggle: (string) => void;
}

interface State {
    company:CompanyEntity;
}

export class CompanyComponent extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state={company:this.props.company}
    }

    handleChange = (fieldName:string, value:any, group:string) =>{
        this.setState(handleChange(fieldName,value,group,this.state));
    }

    render(){
        return(
            this.props.showCompany?
                <li>
                    {
                        <CompanyFormComponent company={this.state.company}
                                              handleChange={this.handleChange}

                        />
                    }
                </li>
            :
                <>
                </>
        )
    }
}