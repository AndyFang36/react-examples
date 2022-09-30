import React from 'react';

module.exports = class extends React.Component {
    static displayName = "05-state-input";

    state = {
        name: '',
        names: [],
    };

    onFormSubmit = (evt) => {
        const names = [...this.state.names, this.state.name];
        this.setState({names: names, name: ''});
        evt.preventDefault();
    }

    onNameChange = (e) => {
        this.setState({name: e.target.value});
    }

    render() {
        return (
            <div>
                <h1>Sign Up Sheet</h1>

                <form onSubmit={this.onFormSubmit}>
                    <input placeholder='Name' value={this.state.name} onChange={this.onNameChange}/>
                    <input type='submit'/>
                </form>

                <div>
                    <h3>Names</h3>
                    <ul>
                        {this.state.names.map((name, i) => <li key={i}>{name}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
};