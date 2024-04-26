import React, { useState } from 'react';
import { Button, Card, Col, Form, Input, Modal, Row, Space, Table, Tag } from 'antd';
import { PlusOutlined } from "@ant-design/icons";

interface Company {
  key: string;
  name: string;
  industry: string;
  location: string;
  tags: string[];
}

const Companies: React.FC = () => {
  const [companies, setCompanies] = useState([
    {
      key: '1',
      name: 'Microsoft',
      industry: 'Technology',
      location: 'Redmond',
      tags: ['software', 'cloud'],
    },
    {
      key: '2',
      name: 'Google',
      industry: 'Technology',
      location: 'Mountain View',
      tags: ['search', 'advertising'],
    },
    {
      key: '3',
      name: 'Amazon',
      industry: 'Technology',
      location: 'Seattle',
      tags: ['e-commerce', 'cloud'],
    },
    {
      key: '4',
      name: 'Facebook',
      industry: 'Technology',
      location: 'Menlo Park',
      tags: ['social media', 'advertising'],
    },
    {
      key: '5',
      name: 'Apple',
      industry: 'Technology',
      location: 'Cupertino',
      tags: ['hardware', 'software'],
    },
    {
      key: '6',
      name: 'Netflix',
      industry: 'Entertainment',
      location: 'Los Gatos',
      tags: ['streaming', 'movies'],
    }
  ]);
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const saveCompany = (values: Company) => {
    const newCompany: Company = {
      key: (companies.length + 1).toString(),
      name: values.name,
      industry: values.industry,
      location: values.location,
      tags: values.tags.join(',').split(',').map((tag: string) => tag.trim()),
    };
    setCompanies([...companies, newCompany]);
  };

  const onFinish = (values: any) => {
    setIsModalVisible(false);
    saveCompany(values);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Industry',
      dataIndex: 'industry',
      key: 'industry',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: string[]) => (
        <span>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: Company) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Card title="Favorite companies" style={{ marginTop: 30 }}>
        <Row justify={"space-between"} style={{ margin: 10 }}>
          <Col>
            <Input.Search />
          </Col>

          <Col>
            <Button
              type="primary"
              onClick={showModal}
              icon={<PlusOutlined />}
            >
              Add new company
            </Button>
          </Col>
        </Row>
        <Table columns={columns} dataSource={companies} />
      </Card>

      <Modal
        title="Add new company"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter the company name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Industry"
            name="industry"
            rules={[{ required: true, message: 'Please enter the industry' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: 'Please enter the location' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Tags"
            name="tags"
            rules={[{ required: true, message: 'Please enter at least one tag' }]}
          >
            <Input />
          </Form.Item>

        
        </Form>
      </Modal>
    </div>
  );
};

export default Companies;
