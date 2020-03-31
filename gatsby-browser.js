// import React from 'react'
// import { DefaultLayout } from './src/components/layout/default'
// import { LayoutContextProvider } from './src/contexts'

// export const wrapRootElement = ({ element }) => {
//     // props provide same data to Layout as Page element will get
//     // including location, data, etc - you don't need to pass it
//     return (
//         <LayoutContextProvider>
//             <DefaultLayout>
//                 { element }
//             </DefaultLayout>
//         </LayoutContextProvider>
//     )
// }

import React from 'react'
import { DefaultLayout } from './src/components/layout/default'
import { LayoutContextProvider } from './src/contexts'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/theme'


export const wrapRootElement = ({ element }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return (
        <ThemeProvider theme={ theme }>
            <LayoutContextProvider>
                { element }
            </LayoutContextProvider>
        </ThemeProvider>
    )
}

export const wrapPageElement = ({ element }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return (
        <DefaultLayout>
            { element }
        </DefaultLayout>
    )
}