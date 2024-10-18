import { RiNotification4Fill } from "react-icons/ri";
import { ButtonHeader, Container, ProfileDiv, ProfilePicture } from "./styled";
import { ButtonsSettings } from "./styled";
import { IoMdSettings } from "react-icons/io";
import Image from "next/image";
import ProfileImage from '@/assets/profile.jpg';
import { FaChevronDown } from "react-icons/fa";

export default function ButtonsEnd() {
    return (
        <Container>
            <ButtonsSettings>
                <ButtonHeader>
                    <IoMdSettings size={32}/>
                </ButtonHeader>
                <ButtonHeader>
                    <RiNotification4Fill size={32}/>
                </ButtonHeader>
            </ButtonsSettings>
            <ProfileDiv>
                <ProfilePicture>
                <Image src={ProfileImage.src} alt="Profile" width={62} height={62} />
                </ProfilePicture>
                <FaChevronDown size={16}/>
            </ProfileDiv>
        </Container>
    );
}