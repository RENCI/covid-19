import React from 'react'
import { PageContent } from '../components/layout'
import { SEO } from '../components/seo'
import { Title, Heading, Paragraph } from '../components/typography'
import { Card, CardHeader, CardBody } from '../components/card'

const ContactPage = () => (
    <PageContent>
        <SEO 
            title="Contact"
            description=""
            keywords=""
        />
        <Title>Contact</Title>
        

        <Card>
            <CardHeader>Contact Details</CardHeader>
            <CardBody>
                <Paragraph>
                    An email maybe and some details. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dicta facilis ab culpa nostrum commodi, iure impedit temporibus quas fugit minima ex, dolorum in, magnam consectetur voluptatibus tempora vitae possimus sit veritatis illum labore earum fugiat. Aliquam rem cum expedita harum, dolore quos assumenda placeat laboriosam ex, odio eaque neque eligendi impedit! Ex impedit commodi cumque! Sapiente consequatur rem consequuntur mollitia molestiae quae, quia deleniti harum, eaque dolore nemo, maiores obcaecati explicabo et itaque dolorem!
                </Paragraph>
            </CardBody>
        </Card>

        <Card>
            <CardHeader>A Form Maybe?</CardHeader>
            <CardBody>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, suscipit? Nesciunt ipsa excepturi nisi quo. Quibusdam quasi fugit iste quos expedita provident maiores.
                </Paragraph>
            </CardBody>
        </Card>

    </PageContent>
)

export default ContactPage
