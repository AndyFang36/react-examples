import React from 'react';

module.exports = class extends React.Component {
    static displayName = "04-basic-input";

    state = {names: []};

    onFormSubmit = (evt) => {
        evt.preventDefault();
        const name = this.refs.name.value;
        const names = [...this.state.names, name];
        this.setState({names: names});
        this.refs.name.value = '';
    }

    render() {
        return (
            <div>
                <h1>Sign Up Sheet</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input defaultValue='' placeholder='Name' ref='name'/>
                    <input type='submit'/>
                </form>
                <div>
                    <h3>Names</h3>
                    <ul>
                        {this.state.names.map(
                            (name, index) => (<li key={index}>{name}</li>)
                        )}
                    </ul>
                </div>
            </div>
        );
    }
};