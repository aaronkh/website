import React from 'react'
export default function(props) {
    React.useEffect(() => {
        document.title = props.title
    }, [])
    return null
}