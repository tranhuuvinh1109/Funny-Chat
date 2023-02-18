import React from 'react';
import { Collapse } from 'antd';
import './room.css';
import styled from 'styled-components';
import { AppContext } from '../../Context/AppProvider';

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

  }
`;


export default function RoomList () {
  const { rooms, setIsAddRoomVisible, setSelectedRoomId, selectedRoomId } =
    React.useContext(AppContext);

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };
  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header='List Rooms' key='1'>
        <nav>
          <ul>
            {rooms.map((room) => (
              <li key={room.id} onClick={() =>
                setSelectedRoomId(room.id)
              }>
                {room.name}
                <span></span><span></span><span></span><span></span>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className='add-room'
          onClick={handleAddRoom}
        >
          <i class="fa-sharp fa-regular fa-plus"></i>
          Add new room
        </button>
      </PanelStyled>
    </Collapse>
  );
}
