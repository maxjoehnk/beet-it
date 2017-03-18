import React from 'react';
import { Results } from '../results';
import { Query } from './query';
import { ipcRenderer } from 'electron';
import LinearProgress from 'material-ui/LinearProgress';
import Paper from 'material-ui/Paper';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
        ipcRenderer.on('results', (event, results) => {
            this.setState({ results, pending: false });
        });
    }

    componentDidMount() {
        this.query();
    }

    query = query => {
        this.setState({ pending: true });
        ipcRenderer.send('query', query);
    };

    handleDragStart = result => {
        ipcRenderer.send('startDrag', result);
    };

    render() {
        return (
            <Paper style={{height: '100vh'}}>
                {this.state.pending && <LinearProgress mode='indeterminate'/>}
                <Query onChange={this.query}/>
                <Results results={this.state.results}
                         onDragStart={this.handleDragStart}/>
            </Paper>
        );
    }
}
