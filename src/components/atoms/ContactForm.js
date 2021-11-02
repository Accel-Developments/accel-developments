import React, { useRef } from 'react';
import emailjs  from 'emailjs-com';
import {Form, TextInput, TextArea, Button, Box, Heading,  FormField} from "grommet"
import {Send} from "grommet-icons"





export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j75h3it', 'template_b6kzq19', form.current, 'user_GHecljnWhIUpnctzx5YWn')
            .then((result) => {

                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            },
            );

    };



    return (
        <Box fill overflow="auto" align="stretch" flex="grow" direction="column" justify="start" pad="xlarge" responsive wrap alignSelf="stretch">
            <Form ref={form} onSubmit={sendEmail}  >
            <Heading>
                Get in Touch
            </Heading>
            <FormField label="Name:" color="brand" >
                <TextInput placeholder="Jane Doe" size="medium" textAlign="start" type="text" name="user_name"/>
            </FormField>
            <FormField label="Email:"  color="brand" name="email">
                <TextInput name="user_email" placeholder="janedoe@example.com" textAlign="start" type="text" size="medium" />
            </FormField>
            <FormField label="Phone Number:" color="brand">
            <TextInput name="user_phone" placeholder="+27112345678" size="medium" textAlign="start" type="text" />
        </FormField>
    <FormField label="Message:" color="brand"  >
        <TextArea fill={false} name="message" placeholder="Enter your message here..." resize="vertical" size="medium" />
    </FormField>
            <Button label="Send" icon={<Send />} color="accent-1" hoverIndicator={{"color":"accent-1","dark":false}} primary={false} secondary reverse size="medium" type="submit" plain={false} margin={{"top":"medium"}} active={false} onClick={sendEmail} />

            </Form>
        </Box>
    );
};
