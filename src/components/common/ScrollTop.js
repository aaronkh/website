import { useEffect } from "react"

const ScrollTop = ({smooth}) =>
    useEffect(() => window.scrollTo({
        top: 0, behavior: smooth && 'smooth'
    }), [])

export default ScrollTop