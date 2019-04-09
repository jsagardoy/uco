import * as React from 'react';

import { OperationEntity } from '../../model/operation';
import { TableHeaderComponent, TableBodyComponent } from './';
import { Table, TableHeader, TableBody } from 'material-ui/Table';
import { colors } from '../../common';
import { css } from 'emotion';
import { TableHead } from '@material-ui/core';




interface Props {
    type: boolean, //true for openOperations false for closed Operations
    operationList: Array<OperationEntity>,
    onClickRow: (id: number) => void,
    onToggle: (operation: OperationEntity) => void,
}

export const OpenTableComponent: React.StatelessComponent<Props> = (props: Props) => {
    //styles
        const headerStyles = css `
            background-color: ${colors.GREEN};
            color: ${colors.YELLOW};

        `;
    //end Styles

    return (

        <Table className='table table-striped table-hover'>
            <TableHeader className={headerStyles}>
                <TableHeaderComponent />
            </TableHeader>
            <TableBody>
                <TableBodyComponent operationList={props.operationList}
                    type={props.type}
                    onClickRow={props.onClickRow}
                    onToggle={props.onToggle} />
            </TableBody>
        </Table>
    );
}

