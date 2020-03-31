import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'


export const AnimateOnMount = ({
    children,
    mass = 2, tension = 80, friction = 30,
    slide = 'none', distance = '50px',
    scale = '1',
}) => {
    let transforms = []
    
    switch (slide) {
        case 'up':
            transforms.push(`translate(0, ${ distance })`)
            break
        case 'down':
            transforms.push(`translate(0, -${ distance })`)
            break
        case 'left':
            transforms.push(`translate(${ distance }, 0)`)
            break
        case 'right':
            transforms.push(`translate(-${ distance }, 0)`)
            break
        default:
            transforms.push(`translate(0, 0)`)
    }
    // add scale, even if it's the default
    if (typeof +scale === 'number') {
        transforms.push(`scale(${ scale })`)
    }
    
    // at least have opacity change
    let fromStyle = {
        opacity: 0,
    }
    // if we added transforms above, get those in the `from` style object
    if (transforms.length) {
        fromStyle = {
            ...fromStyle,
            transform: transforms.join(' ')
            // transform: 'translate(0, -50px) scale(2)',
        }
    }
    const animation = useSpring({
        opacity: 1,
        transform: 'translate(0, 0) scale(1.0)',
        from: fromStyle,
        config: {
            mass: mass,
            tension: tension,
            friction: friction,
        }
    })

    return (
        <animated.div style={ animation }>
            { children }
        </animated.div>
    )
}

AnimateOnMount.propTypes = {
    children: PropTypes.node.isRequired,
    duration: PropTypes.number,
}

AnimateOnMount.defaultProps = {
    duration: 250,
}
