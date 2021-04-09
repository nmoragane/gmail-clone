import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import '../Styles/SendMail.css';
import { useForm } from 'react-hook-form';

function SendMail() {
    const {register, handleSubmit, watch, errors} = useForm();

    const onSubmit = (formData) => {
        console.log(formData)
    }


    return (

        <div className="sendmail">
            <div className="sendmail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendmail__close"/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* ref={register({required: true})} danna ba err enawa */}
                <input name="to" placeholder="To" type="text" />
                {/* {errors.to && <p className="sendmail__error"> To is Required!</p>} */}

                <input name="subject" placeholder="Subject" type="text" />
                <input name="message" placeholder="Message..." type="text" className="sendmail__message" />

                <div className="sendmail__options">
                    <Button
                    className="sendmail__send"
                    variant="contained"
                    color="primary"
                    type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
