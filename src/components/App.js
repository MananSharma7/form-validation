import React, { useState } from 'react';
import InputName from './InputName';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';

const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        // Validate name
        if (!name) {
            errors.name = 'Name is required';
        }

        // Validate email
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }

        // Validate password
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password should be at least 6 characters long';
        }

        setErrors(errors);

        // Return true if there are no errors
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        //prevent to refresh the page after submit the form
        e.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            alert(`Name: ${name} \nEmail: ${email} \nPassword: ${password}`);
            console.log("Form Submitted:", { name, email, password });
        }
    };

    return (
        <div className="ui segment container" style={{ width: "30%", top: "30px" }}>
            <form onSubmit={handleSubmit}>
                <InputName value={name} onChange={(e) => setName(e.target.value)} error={errors.name} />
                <InputEmail value={email} onChange={(e) => setEmail(e.target.value)} error={errors.email} />
                <InputPassword value={password} onChange={(e) => setPassword(e.target.value)} error={errors.password} />
                <button type="submit" className="ui submit button" style={{ marginTop: "10px" }}>Submit</button>
            </form>
        </div >
    );
};

export default App;
