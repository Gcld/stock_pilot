'use client'

import { createContext, useContext, useState, useEffect } from "react"

interface MainContextData {
    setTabGeneral: (tab: number) => void;
    tabGeneral: number;
    showMenu: boolean;
    setShowMenu: (show: boolean) => void;
    isGridView: string;
    setIsGridView: (isGrid: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    handleTabView: (tab: string) => void;
    getTabView: () => void;
    selectedCategory: number;
    setSelectedCategory: (categoryId: number) => void;
    alphabeticalOrder: 'asc' | 'desc' | null;
    setAlphabeticalOrder: (order: 'asc' | 'desc' | null) => void;
    quantityOrder: 'asc' | 'desc' | null;
    setQuantityOrder: (order: 'asc' | 'desc' | null) => void;
    priceRange: { min: number | null; max: number | null };
    setPriceRange: (range: { min: number | null; max: number | null }) => void;
}

const MainContext = createContext<MainContextData>({} as MainContextData)

const MainProvider = ({ children }: React.PropsWithChildren) => {
    const [tabGeneral, setTabGeneral] = useState(0);
    const [showMenu, setShowMenu] = useState(true);
    const [isGridView, setIsGridView] = useState('list');
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<number>(0);
    const [alphabeticalOrder, setAlphabeticalOrder] = useState<'asc' | 'desc' | null>(null);
    const [quantityOrder, setQuantityOrder] = useState<'asc' | 'desc' | null>(null);
    const [priceRange, setPriceRange] = useState<{ min: number | null; max: number | null }>({ min: null, max: null });

    const handleTabView = (tab: string) => {
        localStorage.setItem('isGridView', tab);
        setIsGridView(tab);
    }

    const getTabView = () => {
        const tab = localStorage.getItem('isGridView');
        setIsGridView(tab || 'list');
    }

    useEffect(() => {
        getTabView();
    }, [])

    return (
        <MainContext.Provider
            value={{
                setTabGeneral, 
                tabGeneral, 
                showMenu, 
                setShowMenu,
                isGridView,
                setIsGridView,
                loading,
                setLoading,
                handleTabView,
                getTabView,
                selectedCategory,
                setSelectedCategory,
                alphabeticalOrder,
                setAlphabeticalOrder,
                quantityOrder,
                setQuantityOrder,
                priceRange,
                setPriceRange,
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