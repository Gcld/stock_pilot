import { MainProvider } from "./main"

const AppProvider = ({ children }: React.PropsWithChildren) => {
    return (
        <MainProvider>
            {children}
        </MainProvider>
    )
}

export default AppProvider