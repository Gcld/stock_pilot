import React, { useState, useRef, useEffect } from 'react';
import { RiNotification4Fill } from "react-icons/ri";
import { ButtonHeader, Container, ProfileDiv, ProfilePicture, Tooltip, Dropdown, DropdownItem } from "./styled";
import { ButtonsSettings } from "./styled";
import { IoMdSettings } from "react-icons/io";
import Image from "next/image";
import ProfileImage from '@/assets/profile.jpg';
import { FaChevronDown, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { CgDarkMode } from 'react-icons/cg';

export default function ButtonsEnd() {
    const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = (tooltipId: string) => {
        setActiveTooltip(tooltipId);
    };

    const handleMouseLeave = () => {
        setActiveTooltip(null);
    };

    const toggleDropdown = (dropdownId: string) => {
        setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Container ref={dropdownRef}>
            <ButtonsSettings>
                <ButtonHeader 
                    onMouseEnter={() => handleMouseEnter('settings')}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => toggleDropdown('settings')}
                    aria-label="Settings"
                >
                    <IoMdSettings size={32} color='var(--primaryLightZaori)'/>
                    {activeTooltip === 'settings' && <Tooltip>Settings</Tooltip>}
                </ButtonHeader>
                {activeDropdown === 'settings' && (
                    <Dropdown>
                        <DropdownItem><FaCog /> General Settings</DropdownItem>
                        <DropdownItem><CgDarkMode /> Change Theme</DropdownItem>
                    </Dropdown>
                )}
                <ButtonHeader 
                    onMouseEnter={() => handleMouseEnter('notifications')}
                    onMouseLeave={handleMouseLeave}
                    aria-label="Notifications"
                >
                    <RiNotification4Fill size={32} color='var(--primaryLightZaori)'/>
                    {activeTooltip === 'notifications' && <Tooltip>Notifications</Tooltip>}
                </ButtonHeader>
            </ButtonsSettings>
            <ProfileDiv 
                onMouseEnter={() => handleMouseEnter('profile')}
                onMouseLeave={handleMouseLeave}
                onClick={() => toggleDropdown('profile')}
            >
                <ProfilePicture>
                    <Image src={ProfileImage.src} alt="Profile" width={62} height={62} />
                </ProfilePicture>
                <FaChevronDown size={16}/>
                {activeTooltip === 'profile' && <Tooltip>Your Profile</Tooltip>}
            </ProfileDiv>
            {activeDropdown === 'profile' && (
                <Dropdown $isProfile>
                    <DropdownItem><FaUser /> View Profile</DropdownItem>
                    <DropdownItem><FaCog /> Account Settings</DropdownItem>
                    <DropdownItem><FaSignOutAlt /> Logout</DropdownItem>
                </Dropdown>
            )}
        </Container>
    );
}