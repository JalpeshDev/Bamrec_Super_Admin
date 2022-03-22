import React from 'react';
import { Layout } from 'antd';
import NavBar from '../navbar/navbar';
import BreadCrumb from '../breadCrumb/Breadcrumb';
const { Content } = Layout;
const AppLayout: React.FC<{}> = (props) => {
    const { children } = props;
    return (
        <>
            <NavBar>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <div>{children}</div>
                </Layout>
            </NavBar>
        </>
    )
}
export default AppLayout;