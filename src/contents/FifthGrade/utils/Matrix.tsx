import styled from '@emotion/styled';

const Matrix = () => {
  return (
    <MatrixWrapper>
      <MatrixContainer>
        {[...Array(12)].map((_, index) => (
          <MatrixBorder key={index}></MatrixBorder>
        ))}
      </MatrixContainer>
    </MatrixWrapper>
  );
};

const MatrixWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
`;

const MatrixContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 2px dashed black;
  border-left: 2px dashed black;
`;

const MatrixBorder = styled.input`
  width: 20px;
  height: 30px;
  border-right: 2px dashed black;
  border-bottom: 2px dashed black;
  border-left: none;
  border-top: none;
  text-align: center;
  color: #ff2e00;
  font-size: 1.25rem;
`;
export default Matrix;
