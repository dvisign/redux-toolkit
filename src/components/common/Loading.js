import styled from "styled-components";

const LoadingStyled = styled.div`
  position:fixed;
  width:100%;
  height:100vw;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#fff;
  background-color:rgba(0, 0, 0, 0.8);
`;

function Loading() {
  return (
    <LoadingStyled>
      <p>로딩중...</p>
    </LoadingStyled>
  );
};

export default Loading;