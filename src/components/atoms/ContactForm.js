import React, { useRef } from 'react';
import emailjs  from 'emailjs-com';
import {Form, TextInput, TextArea, Button, Box,  FormField} from "grommet"
import {Send} from "grommet-icons"
import {Title} from "./typography"
import styled from "styled-components";

const Heading = styled(Title)`
  font-weight: 200;
  line-height: normal;
  color: #ffffff;
  justify-self: center;
`

const Input = styled(TextInput)`
  border-bottom-color: rgba(218, 215, 215, 0.8);
  color: rgba(218, 215, 215, 0.8);
`


const Area = styled(TextArea)`
  border-bottom-color: rgba(218, 215, 215, 0.8);
  color: rgba(218, 215, 215, 0.8);
`
export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q63umiv', 'template_b6kzq19', form.current, 'user_GHecljnWhIUpnctzx5YWn')
            .then((result) => {

                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            },
            );

    };

    const Btn = styled(Button)`
    color: #FFFFFF;
    `


    return (
        <Box fill overflow="none" align="center" flex="flow" direction="column" justify="center" pad="small" responsive wrap alignSelf="center">

            <Form ref={form} onSubmit={sendEmail}  >
                <Heading>
                    Have an Idea?
                    <br/>
                    <b>Let's Talk.</b>
                </Heading>
            <FormField label="Name:" color="brand" >
                <Input placeholder="Jane Doe" size="medium" textAlign="start" type="text" name="user_name"/>
            </FormField>
            <FormField label="Email:"  color="brand" name="email">
                <Input name="user_email" placeholder="janedoe@example.com" textAlign="start" type="text" size="medium" />
            </FormField>
            <FormField label="Phone Number:" color="brand">
            <Input name="user_phone" placeholder="+27112345678" size="medium" textAlign="start" type="text" />
        </FormField>
    <FormField label="Message:" color="brand"  >
        <Area fill={false} name="message" placeholder="Enter your message here..." resize="vertical" size="medium" />
    </FormField>
            <Btn label="Send" icon={<Send />} color="accent-1" hoverIndicator={{"color":"accent-1","dark":false}} primary={false} secondary reverse  size="large" type="submit" plain={false} margin={{"top":"medium"}} active={false} onClick={sendEmail} />

            </Form>
        </Box>
    );
};
