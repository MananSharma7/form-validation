import React from 'react';

const PasswordInput = ({ value, onChange, error }) => (
    <div className="ui form">
        <div className="field">
            <label>Password</label>
            <input type="password" value={value} onChange={onChange} />
            {error &&
                <div class="ui pointing red basic label">
                    {error}
                </div>
            }
        </div>
    </div>
);

export default PasswordInput;
