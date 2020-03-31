import React from 'react'
import { PageContent } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { SEO } from '../components/seo'
import { Card, CardHeader, CardBody } from '../components/card'

const IndexPage = () => (
    <PageContent>
        <SEO 
            title="Home"
            description=""
            keywords=""
        />
        
        <Title>RENCI's COVID-19 Response</Title>
        
        <Card>
            <CardHeader>How we’re addressing the crisis</CardHeader>
            <CardBody>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni libero quisquam eos consectetur excepturi possimus qui, aliquam minus ratione molestias vero deserunt magnam sed obcaecati ullam nobis, aperiam sapiente molestiae laboriosam maxime id laborum doloribus corporis. Excepturi aliquid, nisi minus quidem, commodi inventore maxime? Temporibus.
                </Paragraph>
            </CardBody>
        </Card>

        <Card>
            <CardHeader>Something else</CardHeader>
            <CardBody>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, suscipit? Nesciunt ipsa excepturi nisi quo. Quibusdam quasi fugit iste quos expedita provident maiores.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum autem accusamus, soluta sequi perspiciatis tempora illum. Consectetur veritatis aut tenetur quos magni blanditiis sit, molestias dolore, porro voluptatem alias accusantium? Perferendis debitis omnis et, dolorum, suscipit nobis quaerat distinctio iusto eaque, veritatis magnam cum nemo.
                </Paragraph>
            </CardBody>
        </Card>

        <Paragraph>
        </Paragraph>
    </PageContent>
)

export default IndexPage
