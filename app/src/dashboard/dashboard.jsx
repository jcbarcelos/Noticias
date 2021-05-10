import React, { Component } from 'react'
import ContentHeader from '../common/templates/contentHeader'
import Content from '../common/templates/content'
import Routes from '../main/routes'


class DashBoard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Dashboard" small="Version 1.0" />
                <Content>
                    <Routes />
                </Content>
            </div>
        )
    }
}
export default DashBoard
