import React from 'react';

const InputCurrent = ({ value, onChangeValue }) => {

    return (
        <div>
            <input
                onChange={(e) => onChangeValue(e.target.value)}
                value={value}
                type="number"
                placeholder='0'
            />
        </div>
    )
};

export { InputCurrent };