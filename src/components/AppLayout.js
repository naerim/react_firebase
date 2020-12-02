import React from 'react';
import styled from 'styled-components';

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <div>header</div>
      <div>{children}</div>
    </Layout>
  );
};

const Layout = styled.div`
  background: blue;
`;

export default AppLayout;
