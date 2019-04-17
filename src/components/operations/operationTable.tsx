import * as React from 'react';
import { OpenTableComponent } from './';
import { OperationEntity } from '../../model/operation';
import Paper from '@material-ui/core/Paper';
import { css } from 'emotion';

interface Props {
    operationList: Array<OperationEntity>;
    onClickRow: (id: number) => void;
    onToggle: (newOperation: OperationEntity) => void;
}

export const OperationTableComponent: React.StatelessComponent<Props> = (props: Props) => {

    // Styles
    const paperStyles = css`
        margin-bottom: 5%;
    `;
    // End Styles
    return (
        <>
            <Paper className={paperStyles}>
                <OpenTableComponent type={true}
                    operationList={props.operationList}
                    onClickRow={props.onClickRow}
                    onToggle={props.onToggle}
                />
            </Paper>
            <Paper>
                <OpenTableComponent type={false}
                    operationList={props.operationList}
                    onClickRow={props.onClickRow}
                    onToggle={props.onToggle}
                />
            </Paper>
        </>
    );


};
