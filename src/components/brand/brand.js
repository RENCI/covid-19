import React from 'react'
import Img from 'gatsby-image'
import { useBrand } from '../../hooks'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const BrandContainer = styled(Link).attrs({ to: '/' })(({ theme }) => `
    padding: 0 0 0 1rem;
    height: 100%;
`)

export const Brand = ({ path = '/', height = 'auto', width = 'auto', style }) => {
    const renciLogo = useBrand()
    return (
        <BrandContainer to={ path } >
            <Img fixed={ renciLogo.fixed } style={{ width: width, height: '100%' }} alt="RENCI logo" />
        </BrandContainer>
    )
}
