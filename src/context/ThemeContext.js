import React from 'react'

const DEFAULT_STATE = {
    dark: false,
    primary: '#25F0CC',
    secondary: '#9061F5',
    error: '#EB5757',
    warn: '#F2994A',
    disabled: 'rgba(0, 0, 0, 0.38)',
    text: 'rgba(0, 0, 0, 0.87)',
    textHint: 'rgba(0, 0, 0, 0.6)',
    background: '#fff',
}

const DARK_STATE = Object.assign({}, DEFAULT_STATE, {
    dark: true,
    text: 'rgba(250, 250, 250, 0.95)',
    textHint: 'rgba(250, 250, 250, 0.6)',
    disabled: 'rgba(250, 250, 250, 0.3)',
    background: '#202020',
})

const ThemeContext = React.createContext(DEFAULT_STATE)

const withThemeContext = Component =>
    (props) =>
        <ThemeContext.Consumer>
            {(contexts) => <Component {...props} {...contexts} />}
        </ThemeContext.Consumer>

function isDark() {
    if(localStorage.getItem('theme') === 'dark') {
        return true
    }
    if(localStorage.getItem('theme') === 'light') {
        return false
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return true
    }
    return false
}

class ThemeContextProvider extends React.Component {
    constructor(props) {
        super(props)
        if(isDark()) {
            this.state = DARK_STATE
        } else {
            this.state = DEFAULT_STATE
        }
        this.toggleDarkMode = this.toggleDarkMode.bind(this)
    }

    toggleDarkMode() {
        if (this.state.dark) {
            this.setState(DEFAULT_STATE)
        } else {
            this.setState(DARK_STATE)
        }
        localStorage.setItem('theme', this.state.dark ? 'light' : 'dark')
    }

    render() {
        return <ThemeContext.Provider value={{
            themeContext: {
                ...this.state,
                toggleDarkMode: this.toggleDarkMode
            }
        }}>
            {this.props.children}
        </ThemeContext.Provider>
    }
}

// usage: 
//  wrap top level components with ThemeContextProvider
//  children will be given `themeContext` prop with 
//      - the structure above 
//      - methods of ThemeContextProvider
export { withThemeContext, ThemeContextProvider }