import './styles/NoItemsLabel.css';
import "antd/dist/antd.css";
import { ExceptionOutlined, PlusCircleFilled } from "@ant-design/icons";
import { Space, Typography } from 'antd';

function NoItemsLabel()
{
    const { Title, Paragraph } = Typography;

    return (
        <Space className="NoItemsLabel" direction="vertical" size={0} align="center">
            <Title type="secondary">
                <ExceptionOutlined />
            </Title>
            <Title level={3} type="secondary">No Items</Title>
            <Paragraph type="secondary" style={{ fontSize: "18px" }}>
                You can add new items by pressing <PlusCircleFilled style={{ color: "var(--success-cr)" }} /> button at the bottom
            </Paragraph>
        </Space>
    );
}

export default NoItemsLabel;
