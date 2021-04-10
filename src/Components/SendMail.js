import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import '../Styles/SendMail.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';

function SendMail() {
    const {register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (formData) => {
        console.log(formData)
    }

    const dispatch = useDispatch();

    return (

        <div className="sendmail">
            <div className="sendmail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendmail__close" onClick={()=>dispatch(closeSendMessage())}/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* ref={register({required: true})} danna ba err enawa */}
                <input name="to" placeholder="To" type="text" ref={register("to", {required: true})}/>
                {errors.to && <p className="sendmail__error"> To is Required!</p>}

                <input name="subject" placeholder="Subject" type="text" ref={register("subject", {required: true})}/>
                {errors.subject && <p className="sendmail__error"> Subject is Required!</p>}

                <input name="message" placeholder="Message..." type="text" className="sendmail__message" ref={register("message", {required: true})}/>
                {errors.message && <p className="sendmail__error"> Message is Required!</p>}


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
