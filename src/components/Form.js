import React from 'react';

export const Form = () => {
    return (
        <div>
            Contact form
            <form >
                <input
                    type="text"
                    placeholder="Nom"

                />
                <input
                    type="email"
                />
            </form>
        </div>
    );
};

export default Form;
