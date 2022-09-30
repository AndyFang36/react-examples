import React from 'react';
import isEmail from 'validator/lib/isEmail';
import InputGroup from './components/InputGroup';

class Eight extends React.Component {
    static displayName = '08-field-component-form';

    state = {
        fields: {name: '', email: ''},
        fieldErrors: {},
        people: []
    };

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.validate = this.validate.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange = ({name, value, error}) => {
        const fields = Object.assign({}, this.state.fields);
        const fieldErrors = Object.assign({}, this.state.fieldErrors);

        fields[name] = value;
        fieldErrors[name] = error;

        this.setState({fields, fieldErrors});
    }

    validate = () => {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);
        // 有一个不符合就禁用提交按钮
        return (fields.name === "") || (fields.email === "") || (errMessages.length > 0);
    }

    onFormSubmit = (evt) => {
        const people = this.state.people;
        const person = this.state.fields;

        evt.preventDefault();

        if (this.validate()) return false;

        this.setState({
            people: people.concat(person),
            fields: {name: '', email: ''}
        });
    }

    render() {
        return (
            <div>
                <h1>Sign Up Sheet</h1>
                <form onSubmit={this.onFormSubmit}>
                    <InputGroup
                        placeholder="Name"
                        name="name"
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                        validate={val => (val ? false : 'Name Required')}
                    />
                    <br/>
                    <InputGroup
                        placeholder="Email"
                        name="email"
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                        validate={val => (isEmail(val) ? false : 'Invalid Email')}
                    />
                    <br/>
                    <input type="submit" disabled={this.validate()}/>
                </form>
                <hr/>
                <section>
                    <h3>People</h3>
                    <ul>
                        {this.state.people.map(
                            ({name, email}, i) => (<li key={i}>{name} ({email})</li>)
                        )}
                    </ul>
                </section>
            </div>
        );
    }
}

export default Eight;