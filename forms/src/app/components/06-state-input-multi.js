import React from 'react';

module.exports = class extends React.Component {
    static displayName = '06-state-input-multi';

    state = {
        fields: {
            name: '',
            email: ''
        },
        users: []
    };

    onFormSubmit = (e) => {
        this.setState({
            users: [...this.state.users, this.state.fields],
            fields: {
                name: '',
                email: ''
            }  // 提交后清空字段
        });
        e.preventDefault();
    };

    handleInputChange = (evt) => {
        const fields = Object.assign({}, this.state.fields);
        fields[evt.target.name] = evt.target.value;
        this.setState({fields});
    };

    render() {
        return (
            <div>
                <h1>Sign Up Sheet</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" placeholder="Name" name="name" value={this.state.fields.name} onChange={this.handleInputChange}/>
                    <input type="email" placeholder="Email" name="email" value={this.state.fields.email} onChange={this.handleInputChange}/>
                    <input type="submit"/>
                </form>
                <div>
                    <h3>People</h3>
                    <ul>
                        {this.state.users.map(
                            ({name, email}, i) => (<li key={i}>{name} ({email})</li>)
                        )}
                    </ul>
                </div>
            </div>
        );
    }
};
