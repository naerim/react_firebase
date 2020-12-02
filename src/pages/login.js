import React from 'react';
import styled from 'styled-components';
import UseInput from '../hooks/useInput';
import { Link } from 'react-router-dom';

const Login = () => {
  const [id, onSetId] = UseInput('');
  const [password, onSetPassword] = UseInput('');

  return (
    <MainTemplate>
      <LoginTitle>로그인</LoginTitle>
      <InputDiv>
        <Input value={id} placeholder="아이디를 입력하세요" onChange={onSetId} />
      </InputDiv>
      <InputDiv>
        <Input
          type="password"
          value={password}
          placeholder="비밀번호를 입력하세요"
          onChange={onSetPassword}
        />
      </InputDiv>
      <ButtonDiv>
        <Button
          disabled={!password}
          onClick={() =>
            (id !== state.id || password !== state.password) &&
            alert('아이디/비밀번호가 일치하지 않습니다.')
          }
        >
          확인
        </Button>
      </ButtonDiv>
      <ButtonDiv>
        <Link to="/signup">
          <Button>회원가입</Button>
        </Link>
      </ButtonDiv>
    </MainTemplate>
  );
};

const MainTemplate = styled.div`
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 6rem;
  border-radius: 4px;
  height: 350px;
  overflow: hidden;
  background: white;
`;

const LoginTitle = styled.div`
  margin-top: 10%;
  margin-bottom: 5%;
  color: #6408ba;
  font-weight: bold;
  font-size: 2.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputDiv = styled.div`
  margin: 3%;
`;
const Input = styled.input`
  display: block;
  margin: 0 auto;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3%;
`;

const Button = styled.button`
  background: #5408ba;
  color: white;
  border: none;
  font-size: 1rem;
  width: 250px;
  height: 30px;
  &:hover {
    background: #4408ba;
  }
  &:disabled {
    background: gray;
  }
`;

export default Login;
