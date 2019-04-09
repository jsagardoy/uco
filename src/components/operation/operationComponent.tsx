import * as React from 'react';
import { OperationEntity } from "../../model";
import { handleChange, colors } from '../../common';
import { FormOperationComponent } from '../form';
import { Button } from '@material-ui/core';
import { Save, Cancel } from '@material-ui/icons';
import { css } from 'emotion';

interface Props {
    operation: OperationEntity;
    showComponent: boolean;
    onSave: (operation:OperationEntity) => void;
    onCancel: ()=>void;
}

interface State {
    operation: OperationEntity;
}

export class OperationComponent extends React.Component<Props, State> {
    prevState: State;
    constructor(props: Props) {
        super(props);
        this.state = { operation: this.props.operation };
        this.prevState=this.state;
    }

    handleChange = (fieldName: string, value: any, group: string) => {
        this.setState(handleChange(fieldName, value, group, this.state));
    }
    //Styles
    buttonStyle = css`
        color:${colors.GREEN};
        
    `;
    divStyle = css`
        margin-right:5%;
        float: right;
    `;
    // END Styles
    render(){
        if(this.props.showComponent){
            return(
                    <>
                        <FormOperationComponent operation={this.state.operation}
                                                editable={true}
                                                handleChange={this.handleChange}
                        />
                        <div className={this.divStyle}>
                            <Button onClick={(e) => this.props.onSave(this.state.operation)}>
                                <Save className={this.buttonStyle}/>
                            </Button>
                            <Button onClick={(e) => this.props.onCancel ()}>
                                <Cancel className={this.buttonStyle}/>
                            </Button>
                        </div>
                    </>
                )
        }
        
    }
}