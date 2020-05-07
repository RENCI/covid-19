import React, { useState } from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import styled from 'styled-components'
import { PageContent } from '../components/layout'
import { SEO } from '../components/seo'
import { useResources } from '../hooks'
import { Title, Heading } from '../components/typography'
import { Card, CardHeader, CardBody, CardFooter } from '../components/card'
import { ExternalLink, ExternalLinkButton } from '../components/link'
import { Button } from '../components/button'

const kebabCase = string => string.toLowerCase().replace(' ', '-')

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

const ResourceUrl = styled.div``

const ResourceFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const ResourcesPage = () => {
    const resources = useResources()
    const [activeResourceType, setActiveResourceType] = useState(-1)

    const handleChangeActiveResources = index => event => setActiveResourceType(index)

    return (
        <PageContent>
            <SEO 
                title="Resources"
                description=""
                keywords=""
            />

            <Title>General COVID-19 Resources</Title>
            
            <ResourceButtons>
                <ResourceButton onClick={ handleChangeActiveResources(-1) } active={ activeResourceType === -1 }>ALL ({ resources.reduce((sum, resource) => sum + resource.resources.length, 0) })</ResourceButton>
                {
                    resources.map((category, i) => (
                        <ResourceButton key={ `${ category.title }_button` } onClick={ handleChangeActiveResources(i) } active={ activeResourceType === i }>{ category.title } ({ category.resources.length })</ResourceButton>
                    ))
                }
            </ResourceButtons>

            <section id="resource-list">
                {
                    resources.map(({ title, resources }, i) => [-1, i].includes(activeResourceType) && (
                        <Card key={ title } name={ kebabCase(title) }>
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
