import React, { useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import { PageContent } from '../components/layout'
import { SEO } from '../components/seo'
import { useResources } from '../hooks'
import { Title, Heading, Paragraph } from '../components/typography'
import { TitleCard, Card, CardHeader, CardBody } from '../components/card'
import { ExternalLinkButton } from '../components/link'
import { Button } from '../components/button'
import { kebabCase } from '../util'

const ResourceButtons = styled.div(({ theme }) => `
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: ${ theme.padding.normal };
`)

const ResourceButton = styled(Button)(({ theme, active = false}) => `
    display: block;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    border-radius: 4px;
    ${ active ? `background-color: ${ theme.color.primary.main };` : `background-color: ${ theme.color.darkgrey };` }
    @media (max-width: 798px) {
        width: 100%;
    }
`)

const Resource = styled.div(({ theme }) => `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: ${ theme.padding.normal };
    &:not(:last-child) {
        border-bottom: 1px solid ${ theme.color.lightgrey };
    }
    @media (max-width: 798px) {
        flex-direction: column;
    }
`)

const ResourceInfo = styled.div(({ theme }) => `
    flex: 1;
    padding-right: ${ theme.padding.normal };
`)

const ResourceTitle = styled(Heading)`
    text-align: left;
    @media (max-width: 798px) {
        text-align: center;
    }
`

const ResourceSource = styled.div(({ theme }) => `
    color: ${ theme.color.grey };
    @media (max-width: 798px) {
        margin-bottom: ${ theme.padding.normal };
    }
`)

const ResourcesPage = () => {
    const resources = useResources()
    const [activeResourceType, setActiveResourceType] = useState(-1)
    const [activeResourceTypeButton, setActiveResourceTypeButton] = useState(-1)
    const [transitioning, setTransitioning] = useState(false)

    useLayoutEffect(() => {
        if (transitioning) {
            setTimeout(() => setTransitioning(false), 250)
        }
    }, [transitioning])

    const handleChangeActiveResources = index => event => {
        setActiveResourceTypeButton(index)
        setTransitioning(true)
        setTimeout(() => setActiveResourceType(index), 250)
    }

    return (
        <PageContent>
            <SEO 
                title="COVID-19 Resources"
                description=""
                keywords=""
            />

            <TitleCard title="COVID-19 Resources">
                <Paragraph>
                    The resources listed below have proven to be of interest at RENCI as we discuss the progression of COVID-19 and and its impact on research and our society.
                    We have collected them here in case they are interesting to others also, although we do not take credit for or endorse the information within these links in any way.
                </Paragraph>
            </TitleCard>
            
            <ResourceButtons role="tablist">
                <ResourceButton
                    onClick={ handleChangeActiveResources(-1) }
                    active={ activeResourceTypeButton === -1 }
                >
                    ALL ({ resources.reduce((sum, resource) => sum + resource.resources.length, 0) })
                </ResourceButton>
                {
                    resources.map((category, i) => (
                        <ResourceButton
                            key={ `${ category.title }_button` }
                            role="tab"
                            aria-controls={ `resources-${ i }` }
                            aria-selected={ activeResourceTypeButton === i }
                            onClick={ handleChangeActiveResources(i) }
                            active={ activeResourceTypeButton === i }
                            disabled={ activeResourceTypeButton === i }
                        >
                            { category.title } ({ category.resources.length })
                        </ResourceButton>
                    ))
                }
            </ResourceButtons>

            <section id="resource-list" style={{
                opacity: transitioning ? 0 : 1,
                transform: `translate3d(${ transitioning ? '0, 2rem, 0' : '0, 0, 0' })`,
                transition: 'transform 250ms ease-out, opacity 250ms',
            }}>
                {
                    resources.map(({ title, resources }, i) => [-1, i].includes(activeResourceType) && (
                        <Card key={ title } name={ kebabCase(title) } role="tabpanel" aria-labelledby={ `resources-${ i }` }>
                            <CardHeader>{ title }</CardHeader>
                            <CardBody>
                                    {
                                        resources.map(resource => (
                                            <Resource key={ resource.title }>
                                                <ResourceInfo>
                                                    <ResourceTitle>{ resource.title }</ResourceTitle>
                                                    <ResourceSource>Source: { resource.source || '-' }</ResourceSource>
                                                </ResourceInfo>
                                                <ExternalLinkButton to={ resource.url }>View</ExternalLinkButton>
                                            </Resource>
                                        ))
                                    }
                            </CardBody>
                        </Card>
                    ))
                }
            </section>
        </PageContent>
    )
}

export default ResourcesPage
