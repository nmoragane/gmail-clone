import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';

function SendMail() {
    return (
        <div className="sendmail">
            <div className="sendmail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendmail__close"/>
            </div>

            <form action="">
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>

                <div className="sendmail__options">
                    <Button>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
