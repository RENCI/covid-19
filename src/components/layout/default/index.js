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
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '../../icons'
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
    background: linear-gradient(120deg, #e4efe9ee, #93a5cfee 70vmax),
                linear-gradient(150deg, #00ff00cc, #00ff0000 70vmax);
`)

export const DefaultLayout = ({ children }) => {
    const theme = useTheme()
    const menuItems = useMenu()
    const { isCompact } = useLayoutContext()
    return (
        <LayoutWrapper>
            <Header compact={ isCompact }>
                <Brand>Site Title</Brand>
                { isCompact ? <MobileMenu items={ menuItems} /> : <Menu items={ menuItems} /> }
            </Header>
            <Main>
                { children }
            </Main>
            <Footer>
                <Container style={{ padding: '2rem 0' }}>
                    <Grid fluid>
                        <Row>
                            <Col xs={ 12 } md={ 6 }>
                                <Paragraph>
                                    &copy; RENCI { new Date().getFullYear() }
                                </Paragraph>
                            </Col>
                            <Col xs={ 12 } md={ 6 }>
                                <ul style={{ listStyleType: 'none', textAlign: 'right' }}>
                                    <li><a href="#">Lorem ipsum</a></li>
                                    <li><a href="#">Quos magni</a></li>
                                    <li><a href="#">Possimus</a></li>
                                    <li><a href="#">Maiores</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Grid>
                    <Row>
                        <Col xs={ 12 }>
                            <Paragraph center>
                                <SocialLink to="https://tiwtter.com/renci">
                                    <TwitterIcon size={ 32 } fill={ theme.color.primary.light } />
                                </SocialLink>
                                <SocialLink to="https://facebook.com/renci">
                                    <FacebookIcon size={ 32 } fill={ theme.color.primary.light } />
                                </SocialLink>
                                <SocialLink to="https://linkedin.com/renci">
                                    <LinkedInIcon size={ 32 } fill={ theme.color.primary.light } />
                                </SocialLink>
                            </Paragraph>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        </LayoutWrapper>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
