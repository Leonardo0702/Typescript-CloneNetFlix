import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;

  //Responsividade
  @media (max-width: 760px) {
    height: 90vh;
  }
`;
export const FeatureVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const FeatureHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  margin-bottom: 120px;
`;

export const FeatureTitle = styled.div`
  font-size: 60px;
  font-weight: bold;

  //Responsividade
  @media (max-width: 760px) {
    font-size: 40px;
  }
`;

export const FeatureInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  //Responsividade
  @media (max-width: 760px) {
    font-size: 16px;
  }
`;

export const FeaturePoints = styled.div`
  display: inline-block;
  color: #46d369;
  margin-right: 15px;
`;

export const FeatureYear = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const FeatureSeasons = styled.div`
  display: inline-block;
`;

export const FeatureDescription = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;

  //Responsividade
  @media (max-width: 760px) {
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
  }
`;

export const FeatureButtons = styled.div`
  margin-top: 15px;

  a {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    background-color: #fff;
    color: #333;
    opacity: 1;
    transition: all ease 0.2;

    &:hover {
      opacity: 0.7;
    }

    //Responsividade
    @media (max-width: 760px) {
      font-size: 14px;
    }
  }

  a:last-child {
    background-color: #111;
    color: #fff;
  }
`;

export const FeatureGeneros = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #999;

  //Responsividade
  @media (max-width: 760px) {
    font-size: 14px;
  }
`;

// Uma forma de criar os botões através de componentes.
/*export const FeatureButtonWatch = styled.button`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  background-color: #fff;
  color: #333;
  opacity: 1;
  transition: all ease 0.2;

  &:hover {
    opacity: 0.7;
  }
`;

export const FeatureButtonList = styled.button`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  background-color: #111;
  color: #fff;
  opacity: 1;
  transition: all ease 0.2;

  &:hover {
    opacity: 0.7;
  }
`;*/
