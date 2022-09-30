import React from 'react';
import isEmail from 'validator/lib/isEmail';
import InputGroup from './components/InputGroup';
import Select from './components/Select';
import SubmitButton from "./components/SubmitButton";

let apiClient;

export default class extends React.Component {
    static displayName = '10-remote-persist';

    state = {
        fields: {
            name: '',
            email: '',
            department: null,
            course: null
        },
        fieldErrors: {},
        people: [],
        _loading: false,
        _saveStatus: 'READY'
    };

    constructor(props) {
        super(props);
        console.log("constructor() called")
    }

    componentDidMount() {
        this.setState({_loading: true});
        apiClient.loadPeople().then(people => {
            this.setState({_loading: false, people: people});
        });
    }

    handleFormSubmit = (event) => {
        const person = this.state.fields;

        event.preventDefault();

        if (this.validate()) return;

        const people = [...this.state.people, person];

        this.setState({_saveStatus: 'SAVING'});
        apiClient
            .savePeople(people)
            .then(() => {
                this.setState({
                    people: people,
                    fields: {
                        name: '',
                        email: '',
                        department: null,
                        course: null
                    },
                    _saveStatus: 'SUCCESS'
                });
            })
            .then(() => {
                setTimeout(() => {
                    this.setState({_saveStatus: 'READY'})
                }, 1000)
            })
            .catch(err => {
                console.error(err);
                this.setState({_saveStatus: 'ERROR'});
            });
    }

    onInputChange = ({name, value, error}) => {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;

        fields[name] = value;
        fieldErrors[name] = error;

        this.setState({fields, fieldErrors, _saveStatus: 'READY'});
    }

    validate = () => {
        const person = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

        if (!person.name) return true;
        if (!person.email) return true;
        if (!person.course) return true;
        if (!person.department) return true;
        return !!errMessages.length;
    }

    render() {
        if (this.state._loading) {
            return <img alt="loading" src="http://localhost:3000/img/loading.gif"/>;
        }

        return (
            <div>
                <h1>Sign Up Sheet</h1>
                <form onSubmit={this.handleFormSubmit}>
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
                        validate={value => (isEmail(value) ? false : 'Invalid Email')}
                    />
                    <br/>
                    <Select
                        department={this.state.fields.department}
                        course={this.state.fields.course}
                        onChange={this.onInputChange}
                    />
                    <br/>
                    <SubmitButton _saveStatus={this.state._saveStatus} validate={this.validate}/>
                </form>
                <hr/>
                <div>
                    <h3>People</h3>
                    <ul>
                        {
                            this.state.people.map(
                                ({name, email, department, course}, i) =>
                                    (<li key={i}>{[name, email, department, course].join(' - ')}</li>)
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

apiClient = {
    /** 从本地获取用户 */
    loadPeople: function () {
        return {
            then: function (cb) {
                setTimeout(() => {
                    cb(JSON.parse(localStorage.people || '[]'));
                }, 1000);
            }
        };
    },

    /** 保存用户到本地 */
    savePeople: function (people) {
        const success = !!(this.count++ % 2);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!success) return reject({success});

                localStorage.people = JSON.stringify(people);
                return resolve({success});
            }, 1000);
        });
    },

    count: 1
};