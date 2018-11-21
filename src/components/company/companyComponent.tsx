import * as React from 'react';
import { CompanyEntity } from '../../model';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { dataType } from '../../common';
import { CompanyFormComponent } from '../form'
import { handleChange } from '../../common/handlers';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { CardActions } from '@material-ui/core';

interface Props {
    company: CompanyEntity;
    showCompany: boolean;
    addNewCompany: boolean;
    index?: number;
    onToggle: (string) => void;
    savingNew: (fieldId: string, element: any) => void;
    removeFromList: (fieldId: string, index: number) => void;
}

interface State {
    company: CompanyEntity;
}

export class CompanyComponent extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = { company: this.props.company }
    }

    handleChange = (fieldName: string, value: any, group: string) => {
        this.setState(handleChange(fieldName, value, group, this.state));
    }

    render() {
        return (
            this.props.showCompany ?

                <Card className='company.card'>
                    <CardActionArea>
                        <CardContent>
                            <CompanyFormComponent addNewCompany={this.props.addNewCompany}
                                company={this.state.company}
                                handleChange={this.handleChange}
                                savingNew={this.props.savingNew}
                            />
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={(e) => this.props.removeFromList('companies', this.props.index)}>Eliminar Empresa</Button>
                    </CardActions>
                </Card>
                :
                <>
                </>
        )
    }
}