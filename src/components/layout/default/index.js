import React from 'react'
import styled from 'styled-components'
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

import '../../../styles/normalize.css'
import '../../../styles/customize.css'

const LayoutWrapper = styled.div(({ theme }) => `
    background-color: #f9fafc;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(120deg, #e4efe9ee, #93a5cfee 70vmax),
                linear-gradient(150deg, #00ff00cc, #00ff0000 70vmax);
`)

export const DefaultLayout = ({ children }) => {
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
                </Container>
            </Footer>
        </LayoutWrapper>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
