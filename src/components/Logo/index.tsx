import { LuArchive } from "react-icons/lu";
import { Container, LogoDiv } from "./styled";
import Link from "next/link";
import { useMain } from "@/context/main";

export default function Logo() {
    const { setShowMenu } = useMain();

    const handleLogoClick = () => {
        setShowMenu(true);
    };

    return (
        <Container>
            <Link href="/" onClick={handleLogoClick}>
                <LogoDiv>
                    <LuArchive size={58} color="var(--primaryDarkZaori)"/>
                    <h2>StockPilot</h2>
                </LogoDiv>
            </Link>
        </Container>
    );
}