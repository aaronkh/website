import React from 'react'

const DEFAULT_STATE = {
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

const ThemeContext = React.createContext(DEFAULT_STATE)

const withThemeContext = Component =>
    (props) =>
        <ThemeContext.Consumer>
            {(contexts) => <Component {...props} {...contexts} />}
        </ThemeContext.Consumer>



class ThemeContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = DEFAULT_STATE
    }

    render() {
        return <ThemeContext.Provider value={{
            themeContext: {
                ...this.state
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