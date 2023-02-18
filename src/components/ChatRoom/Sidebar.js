import React from 'react';
import { Row, Col, Button } from 'antd';
import UserInfo from './UserInfo';
import RoomList from './RoomList';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { AppContext } from '../../Context/AppProvider';

const SidebarStyled = styled.div`
  background: linear-gradient(to right, #8300cd, #b800c4);;
  color: white;
  height: 100vh;
`;

export default function Sidebar () {
  return (
    <SidebarStyled>
      <Row>
        <Col span={24}>
          <UserInfo />
        </Col>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </SidebarStyled>
  );
}
