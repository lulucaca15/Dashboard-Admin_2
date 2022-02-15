import React from "react";
import Wrapper from "../../../Components/Wrapper";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import user from "../../../assets/images/FotoLucaGui2.jpg"

export default function TopBar() {
  return (

    <Wrapper padding="0px 20px" display="flex" align="center" justify="space-between" bgColor="white">
      <Wrapper>
        <span style={{ "font-weight": "bold", "font-size": "30px", "color": "darkblue", "cursor": "pointer" }}>Luca Zilio</span>
      </Wrapper>
      <Wrapper display="flex" align="center" margin="10px 0 0 0">
        <Wrapper position="relative">
          <NotificationsNoneIcon />
          {/* <span style={{
                            "display": "flex",
                            "height": "15px",
                            "width": "15px",
                            "position": "absolute",
                            "top": "15px",
                            "right": "121px",
                            "background-color": "red",
                            "color": "white",
                            "border-radius": "50%",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "10px"
                        }}>2</span> */}
        </Wrapper>
        <Wrapper position="relative">
          <LanguageIcon />
          {/* <span style={{
                            "display": "flex",
                            "height": "15px",
                            "width": "15px",
                            "position": "absolute",
                            "top": "15px",
                            "right": "97px",
                            "background-color": "red",
                            "color": "white",
                            "border-radius": "50%",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "10px"
                        }}>2</span> */}
        </Wrapper>
        <Wrapper position="relative">
          <SettingsIcon />
        </Wrapper>
        <img src={user} alt="" style={{ "width": "50px", "height": "50px", "border-radius": "50%", "cursor": "pointer", "margin-left": "10px" }}></img>
      </Wrapper>
    </Wrapper>
  )
}