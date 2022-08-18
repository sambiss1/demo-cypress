import { React, useState } from 'react';

export const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [object, setObject] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
    }

    return (
        <div>
            Contact form
            <form className="form" >
                <p>
                    <input
                        type="text"
                        placeholder="Nom"
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                        required
                    /></p>

                <p>
                    <input
                        type="email"
                        placeholder='Email'
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </p>


                <p>

                </p>


                <textarea
                    row="30"
                    col="100"
                    placeholder="Message"
                    id="message"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                >

                </textarea>
                <p>
                    <input type="submit" value="Envoyer" className='submit__button' />
                </p>
                <p className='success'
                >
                    Success</p>
            </form>
        </div>
    );
};

export default Form;
