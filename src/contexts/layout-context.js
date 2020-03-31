import React, { createContext, useContext } from 'react'
import { useWindowWidth } from '../hooks'

export const LayoutContext = createContext()

export const LayoutContextProvider = ({ children }) => {
    const { windowWidth, isCompact } = useWindowWidth()

    return (
        <LayoutContext.Provider
            value={{
                windowWidth,
                isCompact,
            }}
        >
            { children }
        </LayoutContext.Provider>
    )
}

export const useLayoutContext = () => useContext(LayoutContext)
