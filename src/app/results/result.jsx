import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

export class Result extends React.Component {
    handleDrag = event => {
        event.preventDefault();
        if (this.props.onDragStart) {
            this.props.onDragStart();
        }
    };

    render() {
        return (
            <TableRow draggable="true" onDragStart={this.handleDrag}>
                {this.props.columns.map(column => {
                    let value = this.props.result.data[column];
                    return <TableRowColumn key={column}>{value}</TableRowColumn>;
                })}
            </TableRow>
        );
    }
}