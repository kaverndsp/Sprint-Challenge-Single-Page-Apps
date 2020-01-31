import React from "react";
import styled from "styled-components";

const NewHeader = styled.h1`
font-size:2.7rem;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <NewHeader className="ui center">Rick &amp; Morty Fan Page</NewHeader>
      
    </header>
  );
}
