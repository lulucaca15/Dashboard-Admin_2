import React from "react";
import Wrapper from "../../../Components/Wrapper";
import Text from "../../../Components/Text";
import List from "../../../Components/List";

const items = [
  {
    label: "Home",
  },
  {
    label: "Analytics",
  },
  {
    label: "Sales",
  },
]

export default function Sidebar() {
  return (
    <Wrapper padding="20px" bgColor="rgb(251, 251, 255)">
      <Wrapper margin="10px 0 0 15px" bgColor="rgb(251, 251, 255)">
        <Text fontSize="20px" color="#555">Dashboard</Text>
        <List items={items} />
      </Wrapper>
      <Wrapper margin="10px 0 0 15px" bgColor="rgb(251, 251, 255)">
        <Text fontSize="20px" color="#555">Quick Menu</Text>
        <List items={items} />
      </Wrapper>
      <Wrapper margin="10px 0 0 15px" bgColor="rgb(251, 251, 255)">
        <Text fontSize="20px" color="#555">Notifications</Text>
        <List items={items} />
      </Wrapper>
      <Wrapper margin="10px 0 0 15px" bgColor="rgb(251, 251, 255)">
        <Text fontSize="20px" color="#555">Staff</Text>
        <List items={items} />
      </Wrapper>
    </Wrapper>
  )
}