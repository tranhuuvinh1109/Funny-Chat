import React, { useContext } from 'react';
import { Form, Modal, Input } from 'antd';
import { AppContext } from '../../Context/AppProvider';
import { addDocument } from '../../firebase/services';
import { AuthContext } from '../../Context/AuthProvider';

export default function AddRoomModal () {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);
  const [form] = Form.useForm();

  const handleOk = () => {
    // handle logic
    // add new room to firestore
    addDocument('rooms', { ...form.getFieldsValue(), members: [uid] });

    // reset form value
    form.resetFields();

    setIsAddRoomVisible(false);
  };

  const handleCancel = () => {
    // reset form value
    form.resetFields();

    setIsAddRoomVisible(false);
  };

  return (
    <div>
      <Modal
        title='Creat new room'
        visible={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout='vertical'>
          <Form.Item label='Room name' name='name'>
            <Input placeholder='Enter room name' />
          </Form.Item>
          <Form.Item label='Description' name='description'>
            <Input.TextArea placeholder='Enter Description' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
