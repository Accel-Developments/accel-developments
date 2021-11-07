import React, { useRef } from 'react';
import emailjs  from 'emailjs-com';
import {Form, TextInput, TextArea,  Box,  FormField} from "grommet"
import {Send} from "grommet-icons"
import {Title} from "./typography"
import styled from "styled-components";
import Button from "./Button"


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
      font-weight: 800;
      padding: 15px 25px;
      font-size: 1rem;
      margin: calc(2rem + 1vh) 0 0 0;

      background: #FFFFFF;
      color: #33cb86;


      &:hover {
        border: none;
        text-shadow: rgba(0,0,0,0.34);
        color: #FFFFFF;
        background: linear-gradient(90deg, #12FFF7 0%, #B3FFAB 100%);
        border: none;
      }
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
                <Btn onClick={sendEmail} >
                    Submit
                </Btn>

            </Form>
        </Box>
    );
};
