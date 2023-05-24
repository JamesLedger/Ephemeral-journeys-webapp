import styled from "styled-components";

const FooterWrapper = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 60px;
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.div`
    font-size: 20px;
`

const FooterContent = styled.div`
    font-size: 10px;
`

function Footer() {

    return(
        <FooterWrapper>
        <FooterTitle>
        More info
            </FooterTitle>
        <FooterContent>
            No info here yet!
        </FooterContent>
        
        </FooterWrapper>
    )
}

export default Footer