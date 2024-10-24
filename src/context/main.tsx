'use client'

import { createContext, useContext, useState } from "react"

interface MainContextData {
    setTabGeneral: (tab: number) => void;
    tabGeneral: number;
    showMenu: boolean;
    setShowMenu: (show: boolean) => void;
}

const MainContext = createContext<MainContextData>({} as MainContextData)

const MainProvider = ({ children }: React.PropsWithChildren) => {

    const [tabGeneral, setTabGeneral] = useState(0);
    const [showMenu, setShowMenu] = useState(true);

    return (
        <MainContext.Provider
            value={{
                setTabGeneral, tabGeneral, showMenu, setShowMenu
            }}
        >
            {children}
        </MainContext.Provider>
    )
}

function useMain(): MainContextData {
    const context = useContext(MainContext)

    if (!context) {
        throw new Error("useMain must be used within an MainProvider")
    }

    return context
}

export { MainProvider, useMain }