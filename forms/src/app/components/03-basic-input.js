import React from 'react';
import isEmail from 'validator/lib/isEmail';
import InputGroup from "./components/InputGroup";

export default class extends React.Component {
    static displayName = "03-basic-input";

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    state = {
        fields: {name: '', email: '',},
        fieldErrors: {},
        people: [],
    };

    /** 提交表单 */
    onFormSubmit = (evt) => {
        const people = [...this.state.people];
        const person = this.state.fields;

        evt.preventDefault();

        if (this.validate()) return false;  // 验证表单

        this.setState({
            people: people.concat(person),  // 添加用户
            fields: {name: '', email: '',}  // 清空文本字段，以便为更多的输入做准备！
        });
    };

    /** 输入改变时调用 */
    onInputChange = ({name, value, error}) => {
        const fields = Object.assign({}, this.state.fields);
        const fieldErrors = Object.assign({}, this.state.fieldErrors);

        fields[name] = value;
        fieldErrors[name] = error;

        this.setState({fields, fieldErrors});
    };

    /** 验证 */
    validate = () => {
        const person = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

        return !!(!person.name || !person.email || errMessages.length);
    };

    render() {
        return (
            <div>
                <h1>Sign Up Sheet</h1>
                <form id="signUp" name="signUp" onSubmit={this.onFormSubmit}>
                    <InputGroup
                        placeholder='Name'
                        name='name'
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                        validate={val => (val ? false : 'Name Required')}
                    />
                    <br/>
                    <InputGroup
                        placeholder='Email'
                        name='email'
                        type='email'
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                        validate={val => (isEmail(val) ? false : 'Invalid Email')}
                    />

                    <br/>

                    <input type='submit' disabled={this.validate()}/>
                </form>
                <br/>
                <div>
                    <h3>People</h3>
                    <ul>
                        {this.state.people.map(({name, email}, i) => (
                            <li key={i}>{name} ({email})</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}