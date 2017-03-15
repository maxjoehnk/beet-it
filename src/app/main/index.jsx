import React from 'react';
import { Results } from '../results';
import { ipcRenderer } from 'electron';
import TextField from 'material-ui/TextField';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
        ipcRenderer.on('results', (event, results) => {
            this.setState({ results });
        });
    }

    componentDidMount() {
        this.query();
    }

    query(query) {
        ipcRenderer.send('query', query);
    }

    handleUpdateQuery = event => {
        this.query(event.target.value);
        this.setState({
            query: event.target.value
        });
    };

    render() {
        return (
            <div>
                <TextField fullWidth
                           floatingLabelText="Query"
                           value={this.state.query}
                           onChange={this.handleUpdateQuery}/>
                <Results results={this.state.results}/>
            </div>
        );
    }
}