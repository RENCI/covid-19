import { useState, useEffect } from 'react'

let defaultWidth

// This conditional makes the build work.
// The browser handles this fine during development.
// However, Node has no window object, so we check here to see if it exists.
if (typeof window !== 'undefined') {
    defaultWidth = window.innerWidth
}

const COMPACT_THRESHOLD = 768

export const useWindowWidth = (initialWidth = defaultWidth) => {
    const [windowWidth, setWindowWidth] = useState(initialWidth)
    const [isCompact, setIsCompact] = useState(null)
    
    useEffect(() => {
        const determineConpactness = () => windowWidth < COMPACT_THRESHOLD
        setIsCompact(determineConpactness())
    }, [windowWidth])

    useEffect(() => {
        setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0)
    }, [])
    
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    return { windowWidth, isCompact }
}
