import { IRouteComponentProps, Link } from 'umi';
import styles from './index.less';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import MyMenu from '@/components/Menu';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const linkList = [
  { to: '/index', label: 'Index' },
  { to: '/home', label: 'home' },
  { to: '/settings', label: 'settings' },
  { to: '/settings/userinfo', label: 'userinfo' },
  { to: '/settings/testpage', label: 'testpage' },
  { to: '/login', label: 'login' },
];

export default function MainLayout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  // console.log(location);

  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu> */}
          <div className={styles.tabWrapper}>
            {linkList.map((link) => (
              <Link
                to={link.to}
                key={link.to}
                className={`${styles.tab} ${
                  location.pathname === link.to ? styles.select : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Header>
        <Layout>
          <Sider width={200} theme="light" className="site-layout-background">
            <MyMenu
              currentKey="settings2-userinfo-info"
              onChange={(i) => console.log(i)}
            />
            {/* <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="subnav 3"
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu> */}
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
