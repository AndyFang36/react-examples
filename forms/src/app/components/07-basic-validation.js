import React from 'react';
import isEmail from 'validator/lib/isEmail';

class Seven extends React.Component {
    static displayName = '07-basic-validation';

    state = {
        fields: {
            name: '',
            email: ''
        },
        fieldErrors: {},
        users: []
    };

    onInputChange = (e) => {
        const fields = Object.assign({}, this.state.fields);
        fields[e.target.name] = e.target.value;
        this.setState({fields});
    }

    validate = (user) => {
        const errors = {};
        if (!user.name) errors.name = 'Name Required!';
        if (!user.email) errors.email = 'Email Required!';
        if (user.email && !isEmail(user.email)) errors.email = 'Invalid Email!';
        return errors;
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const users = [...this.state.users];
        const user = this.state.fields;
        const fieldErrors = this.validate(user);
        this.setState({fieldErrors});
        /* 有错误字段则禁止提交 */
        if (Object.keys(fieldErrors).length) return false;

        this.setState({
            users: users.concat(user),
            fields: {
                name: '',
                email: ''
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Sign Up Sheet</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input placeholder="Name" name="name" value={this.state.fields.name} onChange={this.onInputChange}/>
                    <output style={{color: 'red'}}>{this.state.fieldErrors.name}</output>
                    <br/>
                    <input placeholder="Email" name="email" value={this.state.fields.email} onChange={this.onInputChange}/>
                    <output style={{color: 'red'}}>{this.state.fieldErrors.email}</output>
                    <br/>
                    <input type="submit"/>
                </form>
                <div>
                    <h3>People</h3>
                    <ul>
                        {
                            this.state.users.map(
                                ({name, email}, i) => (<li key={i}>{name} ({email})</li>)
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Seven;