import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'

const { Header, Content, Footer } = Layout;

class Navbar extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/events">Events</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/roster">Roster</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/leaderboards">Leaderboards</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        );
    }
}

export default Navbar;
