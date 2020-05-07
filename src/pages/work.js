import React from 'react'
import { Title, Paragraph } from '../components/typography'
import { PageContent } from '../components/layout'
import { SEO } from '../components/seo'
import { Card, CardHeader, CardBody } from '../components/card'
import { ExternalLink } from '../components/link'

const WorkPage = () => (
    <PageContent>
        <SEO 
            title="Our Work"
            description=""
            keywords=""
        />
        <Title>Our Work</Title>

        <Card>
            <CardHeader>Literature Co-Occurrence Knowledge Graphs</CardHeader>
            <CardBody>
                <Paragraph>
                    RENCI researchers have developed literature co-occurrence databases on COVID-19 based on the Semantic Scholar Open Research Dataset (<ExternalLink to="https://www.semanticscholar.org/cord19">CORD 19</ExternalLink>),
                    a set of research papers covering COVID-19 and earlier coronaviruses.
                </Paragraph>
                <Paragraph>
                    As scientists around the world work to understand the best ways to diagnosis and treat COVID-19 patients,
                    it is critical that they can easily access the latest research findings.
                    Literature co-occurrence databases automate this knowledge gathering by uncovering meaningful insights
                    based on the patterns and strength of links between keywords that appear in research papers.
                </Paragraph>
                <Paragraph>
                    After applying natural language processing (Scigraph) to discover biomedical entities including symptoms and drugs in CORD 19 literature,
                    RENCI researchers determined which entities were frequently mentioned together.
                    For example, if the spike protein of the virus was often mentioned in the same sentence as a certain chemical,
                    then the database would indicate that a relationship might exist between the two.
                    They also performed this analysis using entities found by the <ExternalLink to="https://github.com/SciBiteLabs/CORD19">SciBite</ExternalLink> team.
                    This co-occurrence information forms a graph of entities that can be used directly or integrated into other databases such as ROBOKOP to perform even more complex data mining.
                </Paragraph>
                <Paragraph>
                    The Scigraph and SciBite co-occurrence graphs are available at <ExternalLink to="https://automat.renci.org/">automat.renci.org</ExternalLink>.
                </Paragraph>
            </CardBody>
        </Card>

        <Card>
            <CardHeader>Answering Biomedical Questions</CardHeader>
            <CardBody>
                <Paragraph>
                    RENCI scientists are supporting rapid exploration of data by building a COVID-19 version of their
                    question-answering system called Reasoning Over Biomedical Objects linked in Knowledge Oriented Pathways (<ExternalLink to="https://robokop.renci.org/">ROBOKOP</ExternalLink>).
                </Paragraph>
                <Paragraph>
                    ROBOKOP is a biomedical question-answering system based on a knowledge graph,
                    meaning that it expresses data as a collection of nodes—such as genes and diseases—and edges that represent the relationships between the nodes.
                    ROBOKOP uses multiple open biomedical databases to explore relationships between various biomedical data types.
                    For example, it can be used to examine relationships between a disease and a drug and then explore which genes might be involved in that association.
                </Paragraph>
                <Paragraph>
                    RENCI scientists have created a special COVID instance of ROBOKOP by integrating the original knowledge graph with
                    the CORD-19 literature co-occurrence graphs they developed, viral protein functions, and hand-curated symptom information.
                    This combination will give scientists access to a vast amount of information about human genes, chemicals, and respiratory diseases
                    and allow them to ask important questions about how that information relates to COVID-19.
                    The new COVID-19 version of ROBOKOP is available at <ExternalLink to="https://covid.robokop.renci.org/">https://covid.robokop.renci.org/</ExternalLink>
                </Paragraph>
            </CardBody>
        </Card>

    </PageContent>
)

export default WorkPage
