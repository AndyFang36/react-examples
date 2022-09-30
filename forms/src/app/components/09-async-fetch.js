import React from 'react';
import isEmail from 'validator/lib/isEmail';
import InputGroup from './components/InputGroup';
import Select from './components/Select';

export default class extends React.Component {
    static displayName = '09-async-fetch';

    state = {
        fields: {
            name: '',
            email: '',
            course: null,
            department: null
        },
        fieldErrors: {},
        people: []
    };

    onFormSubmit = (evt) => {
        const people = this.state.people;
        const person = this.state.fields;

        evt.preventDefault();

        if (this.validate()) return false;

        this.setState({
            people: people.concat(person),
            fields: {
                name: '',
                email: '',
                course: null,
                department: null
            }
        });
    }

    onInputChange = ({name, value, error}) => {
        const fields = Object.assign({}, this.state.fields);
        const fieldErrors = Object.assign({}, this.state.fieldErrors);

        fields[name] = value;
        fieldErrors[name] = error;

        this.setState({fields, fieldErrors});
    }

    validate = () => {
        const person = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

        return !!(!person.name || !person.email || !person.department || !person.course || errMessages.length);
    }

    render = () => {
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

                    <Select
                        department={this.state.fields.department}
                        course={this.state.fields.course}
                        onChange={this.onInputChange}
                    />

                    <br/>

                    <input type="submit" disabled={this.validate()}/>
                </form>

                <hr/>

                <div>
                    <h3>People</h3>
                    <ul>
                        {this.state.people.map(({name, email, department, course}, i) =>
                            (<li key={i}>{[name, email, department, course].join(' - ')}</li>)
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}