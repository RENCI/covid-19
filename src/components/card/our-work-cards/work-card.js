import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card, CardHeader, CardBody } from '../../../components/card'
import { kebabCase } from '../../../util'
import { Paragraph } from '../../../components/typography'
import { LinkButton } from '../../../components/link'

export const WorkCard = ({ project }) => {
  return (
    <Card
        key={ kebabCase(project.title) } 
        style={{
            flex: '1 0 315px', 
            minHeight: '470px', 
            maxWidth: '600px'
        }}
    >
        <CardHeader>{ project.title }</CardHeader>
        <CardBody style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignContent: 'space-between' 
        }}>
        <div dangerouslySetInnerHTML={{ __html: project.blurb }} style={{flex: '1'}}/>
        <br/>
        <Paragraph center>
            <LinkButton to={ project.path }>Read More</LinkButton>
        </Paragraph>
        </CardBody>
    </Card>
  ) 
}

WorkCard.propTypes ={
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        blurb: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    })
}