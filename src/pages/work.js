import React from 'react'
import { Paragraph } from '../components/typography'
import { PageContent } from '../components/layout'
import { Seo } from '../components/seo'
import { TitleCard } from '../components/card'
import { useWork } from '../hooks'
import { WorkCard } from '../components/card/our-work-cards'
import { Masonry } from 'masonic'

const WorkPage = () => {
  const work = useWork()
  const activeWork = work.filter(item =>  (item.frontmatter.active === true))
  const pastWork = work.filter(item => (item.frontmatter.active === false))
  
return (
    <PageContent>
      <Seo 
        title="Our Work"
        description=""
        keywords=""
      />
      
      <TitleCard title="Our Work">
        <Paragraph>
          We will update this page with the latest projects coming out of RENCI as our researchers and their partners work together to develop novel approaches for dealing with COVID-19.
        </Paragraph>
      </TitleCard>

      <Masonry 
        items={activeWork} 
        columnGutter={24}
        columnWidth={300}
        render={WorkCard}
      />

      <TitleCard title="Past Projects" noBody/>
      
      <Masonry 
        items={pastWork} 
        columnGutter={24}
        columnWidth={300}
        render={WorkCard}
      />

    </PageContent>
  )
}

export default WorkPage
