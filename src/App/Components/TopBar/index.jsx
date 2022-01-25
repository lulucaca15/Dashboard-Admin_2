import React from "react";
import Wrapper from "../../../Components/Wrapper";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TopBar() {
    return (
        <Wrapper width="100%" height="50px" bgColor="white">
            <Wrapper height="100%" padding="0px 20px" display="flex" align="center" justify="space-between">
                <Wrapper>
                    <span style={{ "font-weight": "bold", "font-size": "30px", "color": "darkblue", "cursor": "pointer" }}>Luca Zilio</span>
                </Wrapper>
                <Wrapper display="flex" align="center">
                    <Wrapper position="relative">
                        <NotificationsNoneIcon />
                        <span style={{
                            "display": "flex",
                            "height": "15px",
                            "width": "15px",
                            "position": "absolute",
                            "top": "5px",
                            "right": "72px",
                            "background-color": "red",
                            "color": "white",
                            "border-radius": "50%",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "10px"
                        }}>2</span>
                    </Wrapper>
                    <Wrapper position="relative">
                        <LanguageIcon />
                        <span style={{
                            "display": "flex",
                            "height": "15px",
                            "width": "15px",
                            "position": "absolute",
                            "top": "5px",
                            "right": "48px",
                            "background-color": "red",
                            "color": "white",
                            "border-radius": "50%",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "10px"
                        }}>2</span>
                    </Wrapper>
                    <Wrapper position="relative">
                        <SettingsIcon />
                        <span style={{
                            "display": "flex",
                            "height": "15px",
                            "width": "15px",
                            "position": "absolute",
                            "top": "5px",
                            "right": "24px",
                            "background-color": "red",
                            "color": "white",
                            "border-radius": "50%",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "10px"
                        }}>2</span>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}