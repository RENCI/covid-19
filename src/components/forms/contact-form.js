import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../button'

const Form = styled.form(({ theme }) => `
    & .input-group {
        margin: 1rem 0;
    }
    & label {
        display: inline-block;
        font-weight: bold;
        padding: 0.5rem 0;
        color: ${ theme.color.darkgrey };
    }
    & input, textarea {
        width: 100%;
        border-radius: ${ theme.border.radius };
        padding: 0.5rem;
        border: 1px solid ${ theme.color.primary.light }66;
        transition: box-shadow 500ms, border 250ms;
        &:focus {
            box-shadow: 0 0 6px 1px ${ theme.color.primary.light }66;
            border: 1px solid ${ theme.color.primary.light }66;
        }
    }
    & input {
    }
    & textarea {
        width: 100%;
        resize: vertical;
        min-height: 5rem;
    }
    & .actions {
        text-align: center;
    }
`)

const initialFormState = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    organization: '',
    message: '',
}

export const ContactForm = () => {
    const [formState, setFormState] = useState(initialFormState)
    
    const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
        console.log(formState)
    }


    return (
        <Form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfwt6blwqdGD4LQG3EHsLQCajcsL7c5DDF_3oZmRIQhTYWqZA/formResponse" target="_self" method="POST" id="mG61Hd">
            <div className="input-group">
                <label htmlFor="first-name-input">First Name</label><br />
                <input
                    id="firstName" value={ formState.firstName } onChange={ handleChange } type="text" aria-label="First Name"
                    required autoComplete="off" tabIndex="0"
                    jsname="YPqjbf" name="entry.511731329" dir="auto" data-initial-dir="auto" data-initial-value=""
                />
            </div>
            <div className="input-group">
                <label htmlFor="last-name-input">Last Name</label><br />
                <input
                    id="lastName" value={ formState.lastName } onChange={ handleChange } type="text" aria-label="Last Name"
                    required autoComplete="off" tabIndex="0"
                    jsname="YPqjbf" name="entry.2107060700" dir="auto" data-initial-dir="auto" data-initial-value=""
                />
            </div>
            <div className="input-group">
                <label htmlFor="email-input">Email</label><br />
                <input
                    id="emailAddress" value={ formState.emailAddress } onChange={ handleChange } type="email" aria-label="Email address"
                    required autoComplete="off" tabIndex="0"
                    jsname="YPqjbf" name="entry.431407946" dir="auto" data-initial-dir="auto" data-initial-value=""
                />
            </div>
            <div className="input-group">
                <label htmlFor="organization-input">Organization</label><br />
                <input
                    id="organization" value={ formState.organization } onChange={ handleChange } type="text" aria-label="Organization"
                    required autoComplete="off" tabIndex="0"
                    jsname="YPqjbf" name="entry.1819972738" dir="auto" data-initial-dir="auto" data-initial-value=""
                />
            </div>
            <div className="input-group">
                <label htmlFor="message-input">
                    Tell us how you'd like to connect. Do you have a question about one of our projects? A suggestion for a partnership? Provide as much detail as you can below.
                </label><br />
                <textarea
                    id="message" value={ formState.message } onChange={ handleChange }
                    required tabIndex="0" aria-label="Tell us how you&amp;#39;d like to connect. Do you have a question about one of our projects? A suggestion for a partnership? Provide as much detail as you can below."
                    jsname="YPqjbf" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" name="entry.484709562" data-rows="1" dir="auto" data-initial-dir="auto" data-initial-value=""
                />
            </div>
            <div className="actions">
                <Button>Submit</Button>
            </div>
        </Form>                
    )
}
