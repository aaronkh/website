import React from 'react'

const DEFAULT_STATE = {
    dark: false,
    primary: '#4fecd0',
    primaryLight: '#8bffff',
    primaryDark: '#8bffff',
    secondary: '#311b92',
    secondaryLight: '#6746c3',
    secodaryDark: '#000063',
    disabled: '#555',
    text: '#212121',
    background: '#FFFFFF',
    cardShadow: '20px 20px 60px #aaa, -20px -20px 60px #ffffff',
    cardHover: '20px 20px 60px #ccc, -20px -20px 60px #ffffff',
    cardSelected: 'inset 5px 5px 6px #e1e1e1, inset -5px -5px 6px #e1e1e1',
    cardSelectedBackground: '#fcfcfc',
}

const DARK_STATE = Object.assign({}, DEFAULT_STATE, {
    dark: true,
    text: '#FAFAFA',
    background: '#212121',
    cardShadow: '20px 20px 60px #0d0d0d, -20px -20px 60px #353535',
    cardHover: '20px 20px 60px #0a0a0a, -20px -20px 60px #313131',
    primaryLight: '#6acdcd',
    secondary: '#c2a8eb',
    secondaryLight: '#d0bcf0',
    secodaryDark: '#6a3bb5',
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
        localStorage.setItem('theme', this.state.dark ? 'light' : 'dark')
        if (this.state.dark) {
            this.setState(DEFAULT_STATE)
        } else {
            this.setState(DARK_STATE)
        }
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