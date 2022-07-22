import React, { Fragment } from 'react'
import { Paragraph } from '../components/typography'
import { PageContent } from '../components/layout'
import { SEO } from '../components/seo'
import { TitleCard } from '../components/card'
import { useWork } from '../hooks'
import { WorkCard, WorkCardWrapper } from '../components/card/our-work-cards'

const WorkPage = () => {
  const work = useWork()

  return (
    <PageContent>
      <SEO 
        title="Our Work"
        description=""
        keywords=""
      />
      
      <TitleCard title="Our Work">
        <Paragraph>
          We will update this page with the latest projects coming out of RENCI as our researchers and their partners work together to develop novel approaches for dealing with COVID-19.
        </Paragraph>
      </TitleCard>

      <WorkCardWrapper>
        {
          work.map(item => (
            <Fragment>
              {item.frontmatter.active && <WorkCard project={item.frontmatter}/>}
            </Fragment>
          ))
        }
      </WorkCardWrapper>

      <TitleCard title="Past Projects" noBody/>
      
      {/* <div style={{minHeight:'100px'}}></div> */}

      <WorkCardWrapper>
        {
          work.map(item => (
            <Fragment>
              {!item.frontmatter.active && <WorkCard project={item.frontmatter}/>}
            </Fragment>
          ))
        }
      </WorkCardWrapper>

      {/* <div style={{minHeight:'200px'}}></div> */}

    </PageContent>
  )
}

export default WorkPage
