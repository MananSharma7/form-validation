import React from 'react';

const EmailInput = ({ value, onChange, error }) => (
    <div className="ui form">
        <div className="field">
            <label>Email</label>
            <input placeholder="Email Address" type="text" value={value} onChange={onChange} />
            {error &&
                <div class="ui pointing red basic label">
                    {error}
                </div>
            }
        </div>
    </div>
);

export default EmailInput;
