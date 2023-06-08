import React from 'react';

const NameInput = ({ value, onChange, error }) => (
    <div className="ui form">
        <div className="field">
            <label>Name</label>
            <input placeholder="Full Name" type="text" value={value} onChange={onChange} />
            {error &&
                <div class="ui pointing red basic label">
                    {error}
                </div>
            }
        </div>
    </div>
);

export default NameInput;
