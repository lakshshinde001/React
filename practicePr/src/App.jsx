import { useState } from "react"
import Card from "./Components/Card"
import ToggleBtn from "./Components/ToggleBtn.jsx"
import { ThemeProvider } from "./context/ThemeContext.js"
import { useEffect } from "react";

function App (){

    const [themeMode, setThemeMode] = useState('');

    const darkTheme = () => {
        setThemeMode('dark');
    }
    const lightTheme = () =>{
        setThemeMode('light');
    }

    useEffect(() => {
        document.querySelector('html').classList.remove('light', 'dark');

        if(themeMode) {
            document.querySelector('html').classList.add(themeMode);
        }
    }, [themeMode]);

    return (
        <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ToggleBtn/>
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                        <Card/>
                    </div>
                </div>

            </div>
        </ThemeProvider>
    )
}

export default App
