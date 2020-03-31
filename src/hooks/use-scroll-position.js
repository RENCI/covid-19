import { useEffect, useState } from 'react'

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        let previous_scroll_position = 0
        let ticking = false
        const handleScroll = e => {
            previous_scroll_position = window.scrollY

            if (!ticking) {
                window.requestAnimationFrame(function () {
                    setScrollPosition(previous_scroll_position)
                    ticking = false
                })

                ticking = true
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return scrollPosition
}
