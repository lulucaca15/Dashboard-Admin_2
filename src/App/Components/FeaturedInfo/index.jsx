import React from "react";
import Wrapper from "../../../Components/Wrapper";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function FeaturedInfo() {
  return (
    <Wrapper width="100%" display="flex" justify="space-between">
      <Wrapper flex="1" margin="0px 10px" border="10px" cursor="pointer" shadow="0px 0px 15px -10px #000000" padding="20px">
        <span style={{ "font-size": "20px" }}>Revanue</span>
        <Wrapper margin="10px 0px" display="flex" align="center">
          <span style={{ "font-size": "30px", "font-weight": "600"}}>
            $2,415
          </span>
          <span style={{"display":"flex", "align-tems":"center", "margin-left": "20px"}}>
            -11.4 <ArrowDownwardIcon style={{ "font-size": "14px", "margin-left": "5px", "color": "red" }} />
          </span>
        </Wrapper>
        <span style={{"font-size":"15px", "color":"gray"}}>Compared to last month</span>
      </Wrapper>
      <Wrapper flex="1" margin="0px 20px" border="10px" cursor="pointer" shadow="0px 0px 15px -10px #000000" padding="20px">
        <span style={{ "font-size": "20px" }}>Sales</span>
        <Wrapper margin="10px 0px" display="flex" align="center">
          <span style={{ "font-size": "20px" }}>$4,415</span>
          <span style={{"display":"flex", "align-tems":"center", "margin-left": "20px"}}>
            -1.4 <ArrowDownwardIcon style={{ "font-size": "14px", "margin-left": "5px", "color": "red" }}/>
          </span>
        </Wrapper>
        <span style={{"font-size":"15px", "color":"gray"}}>Compared to last month</span>
      </Wrapper>
      <Wrapper flex="1" margin="0px 20px" border="10px" cursor="pointer" shadow="0px 0px 15px -10px #000000" padding="20px">
        <span style={{ "font-size": "20px" }}>Cost</span>
        <Wrapper margin="10px 0px" display="flex" align="center">
          <span style={{ "font-size": "30px", "font-weight": "600"}}>$2,215</span>
          <span style={{"display":"flex", "align-tems":"center", "margin-left": "20px"}}>
            +2.4 <ArrowUpwardIcon style={{ "font-size": "14px", "margin-left": "5px", "color": "green" }}/>
          </span>
        </Wrapper>
        <span style={{"font-size":"15px", "color":"gray"}}>Compared to last month</span>
      </Wrapper>
    </Wrapper>
  )
}
export default FeaturedInfo