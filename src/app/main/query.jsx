import React from 'react';
import TextField from 'material-ui/TextField';
import { Subject } from '@reactivex/rxjs';

export class Query extends React.Component {

    constructor(props) {
        super(props);
        this.observable = new Subject();
    }

    componentDidMount() {
        this.observable
            .debounceTime(500)
            .subscribe(value => {
                if (this.props.onChange) {
                    this.props.onChange(value);
                }
            });
    }

    handleChange = event => {
        this.observable.next(event.target.value);
    };

    render() {
        return (
            <TextField fullWidth
                       floatingLabelText="Query"
                       onChange={this.handleChange}
                       style={{margin: 8}}/>
        );
    }
}
