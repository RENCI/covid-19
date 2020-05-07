import React, { useState } from 'react'
import styled from 'styled-components'
import { PageContent } from '../components/layout'
import { SEO } from '../components/seo'
import { Title, Paragraph } from '../components/typography'
import { Card, CardHeader, CardBody } from '../components/card'
import { BulletedList, ListItem } from '../components/list'
import { ContactForm } from '../components/forms'

const ContactPage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [organization, setOrganization] = useState('')
    const [message, setMessage] = useState('')

    return (
        <PageContent>
            <SEO 
                title="Contact"
                description=""
                keywords=""
            />
            <Title>Contact Us</Title>
    
            <Card>
                <CardHeader>Partnering with RENCI</CardHeader>
                <CardBody>
                    <Paragraph>
                        Are you interested in partnering with RENCI to develop solutions to the coronavirus pandemic? In particular, RENCI can offer expertise in the following areas:
                    </Paragraph>
                    <BulletedList>
                        <ListItem primary="Data Management and Visualization" />
                        <ListItem primary="Data Analysis" />
                        <ListItem primary="AI / Machine Learning" />
                        <ListItem primary="Data-driven Biological Reasoning" />
                        <ListItem primary="Cloud Computing" />
                        <ListItem primary="Workflow Management" />
                        <ListItem primary="Use of Cloud Resources, High-Performance Clusters, or Distributed Resources" />
                        <ListItem primary="Cybersecurity" />
                    </BulletedList>
                </CardBody>
            </Card>
    
            <Card>
                <CardHeader>Let's Connect!</CardHeader>
                <CardBody>
                    <ContactForm />
                </CardBody>
            </Card>
    
        </PageContent>
    )
}
export default ContactPage
