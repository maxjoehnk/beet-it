import React from 'react';
import { Table, TableHeader, TableRow, TableBody, TableHeaderColumn } from 'material-ui/Table';
import { Result } from './result';
import capitalize from 'lodash/capitalize';

export class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [
                'title',
                'artist',
                'album'
            ]
        };
    }

    render() {
        return (
            <Table selectable={false}>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                        {this.state.columns.map(column => {
                            return <TableHeaderColumn key={column}>{capitalize(column)}</TableHeaderColumn>;
                        })}
                    </TableRow>
                </TableHeader>
                <TableBody showRowHover>
                    {this.props.results.map(result => {
                        let { columns } = this.state;
                        return <Result result={result} columns={columns}/>;
                    })}
                </TableBody>
            </Table>
        );
    }
}