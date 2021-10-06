import React,{useContext,useState} from 'react'
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native-appearance";

export function useTheme(){
    return useContext(ThemeContext);
}
export function useUpdateTheme(){
    return useContext(ThemeUpdateContext);
}
const ThemeContext = React.useContext();
const ThemeUpdateContext = React.useContext();

export function ThemeProvider({children}){
    const scheme=useColorScheme()
    const [darkTheme,setDarkTheme] = useState(scheme)

    function toggleTheme() {
        setDarkTheme(theme => theme ==='dark' ? DarkTheme : DefaultTheme);
    }

    return(
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}