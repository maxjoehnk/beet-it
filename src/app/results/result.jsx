import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';

export class Result extends React.Component {
    handleDrag = event => {
        event.preventDefault();
        if (this.props.onDragStart) {
            this.props.onDragStart();
        }
    };

    handlePlayButton = () => {
        if (this.props.onPlayTrack) {
            this.props.onPlayTrack(this.props.result);
        }
    };

    render() {
        return (
            <TableRow draggable="true" onDragStart={this.handleDrag}>
                <TableRowColumn>
                    <IconButton iconClassName="mdi mdi-play-circle" onTouchTap={this.handlePlayButton}/>
                </TableRowColumn>
                {this.props.columns.map(column => {
                    let value = this.props.result.data[column];
                    return <TableRowColumn key={column}>{value}</TableRowColumn>;
                })}
            </TableRow>
        );
    }
}
