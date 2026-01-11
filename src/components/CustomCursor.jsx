import React, { useEffect, useState } from 'react'

const AutoScrollCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isScrolling, setIsScrolling] = useState(false)
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseDown = (e) => {
            if (e.button === 1) { // Middle click usually triggers auto-scroll
                setIsScrolling(true)
            }
        }

        const handleMouseUp = () => {
            setIsScrolling(false)
        }

        const mouseOver = (e) => {
            const isInteractive = e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('.social-icons a') ||
                e.target.tagName === 'INPUT' ||
                e.target.tagName === 'TEXTAREA' ||
                e.target.classList.contains('btn');
            setHovered(isInteractive)
        }

        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)
        window.addEventListener('mouseover', mouseOver)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('mouseover', mouseOver)
        }
    }, [])

    return (
        <>
            <div
                className={`auto-scroll-cursor ${hovered ? 'hovered' : ''} ${isScrolling ? 'scrolling' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            >
                <div className="cursor-core"></div>
                <div className="cursor-arrows">
                    <i className="fas fa-chevron-up arrow-up"></i>
                    <i className="fas fa-chevron-down arrow-down"></i>
                </div>
                <div className="cursor-ring"></div>
            </div>
        </>
    )
}

export default AutoScrollCursor
