import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card, CardHeader, CardBody } from '../../../components/card'
import { kebabCase } from '../../../util'
import { Paragraph } from '../../../components/typography'
import { LinkButton } from '../../../components/link'

export const WorkCard = ({  data: {frontmatter}  }) => {
  return (
    <Card
      key={ kebabCase(frontmatter.title) } 
        style={{
            flex: '1 0 315px', 
            minHeight: '470px', 
            maxWidth: '600px'
        }}
    >
        <CardHeader>{ frontmatter.title }</CardHeader>
        <CardBody style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignContent: 'space-between' 
        }}>
        <div dangerouslySetInnerHTML={{ __html: frontmatter.blurb }} style={{flex: '1'}}/>
        <br/>
        <Paragraph center>
            <LinkButton to={ frontmatter.path }>Read More</LinkButton>
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