import { Menu } from 'antd';
import Link from "next/link"; //in next.js syntax to import without using curly braces;
import { AppstoreOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';

const  { Item } = Menu; // item

const TopNav = () => {
    return (
        <Menu mode="horizontal">
          
              <Item icon={<AppstoreOutlined/>}>
                 <Link href="/" legacyBehavior>
                    <a>App</a>
                 </Link>

              </Item>
              <Item icon={<LoginOutlined/>}>
                 <Link href="/login" legacyBehavior>
                    <a>Login</a>
                 </Link>

              </Item>
              <Item icon={<UserAddOutlined/>}>
                 <Link href="/register" legacyBehavior>
                    <a>Register</a>
                 </Link>

              </Item>
        </Menu>
    );
};

export default TopNav; 