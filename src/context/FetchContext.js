import React from 'react'

const FetchContext = React.createContext({})

const withFetchContext = Component =>
    (props) =>
        <FetchContext.Consumer>
            {(contexts) => <Component {...props} {...contexts} />}
        </FetchContext.Consumer>

class FetchContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.abortController = new AbortController()
        this.fetchText = this.fetchText.bind(this)
        this.fetchJSON = this.fetchJSON.bind(this)
        this.clearData = this.clearData.bind(this)
    }

    clearData() {
        this.setState(null)
        try {
            this.abortController.abort()
        } catch (_) { }
    }

    async fetchText(url, options) {
        this.clearData()
        const data = await fetch(url, options)
        const text = await data.text()
        this.setState({ text })
        return text
    }

    async fetchJSON(url) {
        const text = await this.fetchText(url)
        const json = JSON.parse(text)
        this.setState({ json, text: '' })
        return json
    }

    render() {
        return <FetchContext.Provider value={{
            fetchedData: { ...this.state },
            clearData: this.clearData,
            fetchText: this.fetchText,
            fetchJSON: this.fetchJSON
        }}>
            {this.props.children}
        </FetchContext.Provider>
    }
}

export { withFetchContext, FetchContextProvider }