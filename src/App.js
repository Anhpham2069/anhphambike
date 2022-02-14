import React,{Profiler, useEffect} from "react";
import styled from "styled-components"
import './App.css';
import Map from "./components/Map"


function App() {

  return (
    <Wrapper>
      <ActionsItems>
        <Header>
          <HeaderLogo src="https://i.ibb.co/84stgjq/Iber-technologies-new-20218114.jpg">

          </HeaderLogo>
          <Profile>
            <NameUser>anh</NameUser>
            <UserImg></UserImg>
          </Profile>
        </Header>
      </ActionsItems>
      <Map />
    </Wrapper>
  );
  }

export default App;

const Wrapper = styled.div`
  display: flex;
  with: 100%;
  height: 658px;
`

const ActionsItems = styled.div`
 flex: 0.5;
 `
 const Header = styled.div`
 
 `
 const HeaderLogo = styled.img`
  height: 60px
 
 `
 const Profile = styled.div`
  display: flex
 `
 const NameUser = styled.div`` 

 const UserImg = styled.div``