import { useContext, createContext } from "react";

const themeContext = createContext({
    themeMode : 'light',
    darkTheme : () => {},
    lightTheme : () => {}
})

export const ThemeProvider = themeContext.Provider;

export default function useTheme (){
    return useContext(themeContext);
}