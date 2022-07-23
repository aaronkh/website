import React from "react"
import { useNavigate } from "react-router-dom"
import pdf from '../components/resume/resume.pdf'

const Resume = () => {
    const navigate = useNavigate()
    React.useEffect(() => {
        window.open(pdf, '_self')
        navigate('/')
    }, [])
    return <div/>    
}
export default Resume