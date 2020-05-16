import React from 'react'
import styled, { useTheme } from 'styled-components'
import PropTypes from 'prop-types'
import { Header } from './header'
import { Brand } from '../../brand'
import { Main } from './main'
import { Footer } from './footer'
import { Container } from '../container'
import { Menu, MobileMenu } from '../../menu'
import { useLayoutContext } from '../../../contexts'
import { useMenu } from '../../../hooks'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Paragraph } from '../../typography'
import { ExternalLink } from '../../link'
import { FacebookIcon, GithubIcon, LinkedInIcon, TwitterIcon } from '../../icons'
import coronavirusImage from '../../../images/coronavirus.svg'
import '../../../styles/normalize.css'
import '../../../styles/customize.css'

const SocialLink = styled(ExternalLink)`
    margin: 0 1rem;
    transition: filter 250ms;
    &:hover {
        filter: brightness(1.5);
    }
`

const LayoutWrapper = styled.div(({ theme }) => `
    background-color: #f9fafc;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(150deg, #ffffff00, ${ theme.color.renciBlue }99 100vmax),
                linear-gradient(170deg, ${ theme.color.carolinaBlue }33, #ffffff00 100vmax),
                url(${ coronavirusImage });
    background-position: left bottom;
    background-repeat: no-repeat;
    background-attachment: fixed;
`)

export const DefaultLayout = ({ children }) => {
    const theme = useTheme()
    const menuItems = useMenu()
    const { isCompact } = useLayoutContext()
    return (
        <LayoutWrapper>
            <Header compact={ isCompact }>
                <Brand width="180px" />
                { isCompact ? <MobileMenu items={ menuItems} /> : <Menu items={ menuItems} /> }
            </Header>
            <Main>
                { children }
            </Main>
            <Footer>
                <Container>
                    <Grid fluid>
                        <Row>
                            <Col xs={ 12 }>
                                <Paragraph center>
                                    <ExternalLink to="https://www.renci.org/">RENCI</ExternalLink> (Renaissance Computing Institute) develops and deploys advanced technologies to enable research discoveries and practical innovations.
                                    RENCI partners with researchers, government, and industry to engage and solve the problems that affect North Carolina, our nation, and the world.
                                </Paragraph>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={ 12 } sm={ 6 }>
                                <Paragraph center={ isCompact } left={ !isCompact }>
                                    &copy; RENCI { new Date().getFullYear() }
                                </Paragraph>
                            </Col>
                            <Col xs={ 12 } sm={ 6 }>
                                <Paragraph center={ isCompact } right={ !isCompact }>
                                    <SocialLink to="https://twitter.com/RENCI" aria-label="View our Twitter">
                                        <TwitterIcon size={ 32 } fill={ theme.color.primary.main } aria-hidden="true" />
                                    </SocialLink>
                                    <SocialLink to="https://www.facebook.com/renci.org/" aria-label="View our Facebook page">
                                        <FacebookIcon size={ 32 } fill={ theme.color.primary.main } aria-hidden="true" />
                                    </SocialLink>
                                    <SocialLink to="https://www.linkedin.com/company/renaissance-computing-institute/" aria-label="View our LinkedIn Profile">
                                        <LinkedInIcon size={ 32 } fill={ theme.color.primary.main } aria-hidden="true" />
                                    </SocialLink>
                                    <SocialLink to="https://github.com/RENCI/covid-19" aria-label="View the GitHub repository for this site">
                                        <GithubIcon size={ 32 } fill={ theme.color.primary.main } aria-hidden="true" />
                                    </SocialLink>
                                </Paragraph>
                            </Col>
                        </Row>
                    </Grid>
                </Container>
            </Footer>
        </LayoutWrapper>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
