import React from 'react'
import { Title, Heading, Paragraph } from '../components/typography'
import { PageContent } from '../components/layout'
import { SEO } from '../components/seo'
import { Card, CardHeader, CardBody } from '../components/card'

const WorkPage = () => (
    <PageContent>
        <SEO 
            title="Our Work"
            description=""
            keywords=""
        />
        <Title>Our Work</Title>

        <Card>
            <CardHeader>Some Heading</CardHeader>
            <CardBody>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quisquam repellendus deserunt accusamus vitae qui voluptate animi commodi quibusdam, mollitia tempore, maiores, natus laudantium? Sunt aliquid placeat a sed deleniti dignissimos velit ex et numquam earum mollitia quisquam voluptatibus, nemo.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam accusantium velit commodi consequatur, molestiae dolorum!
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magnam fuga dolor veniam saepe corrupti architecto, obcaecati molestiae amet ducimus quam, ad voluptatem modi aperiam repellat officia sunt laboriosam in blanditiis eligendi consectetur! Officia minus facilis veritatis laborum dicta, doloribus quidem consequuntur adipisci sunt saepe. Ipsum dolorem obcaecati, nihil nobis esse error nisi et est, totam mollitia illum sequi. Quia repudiandae magnam explicabo maxime repellendus, reprehenderit quae nostrum velit error sapiente enim atque, nam facere, porro nulla non maiores, voluptatibus. Pariatur alias at officiis quas doloremque laboriosam perspiciatis, odio libero praesentium, tempora nobis corporis labore inventore, iure eum nemo doloribus!
                </Paragraph>
            </CardBody>
        </Card>

    </PageContent>
)

export default WorkPage
