import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { create } from './postActions'
import { selectTab, showTabs } from '../../common/tab/tabActions'


import Tabs from '../../common/tab/tabs'
import TabsHeader from '../../common/tab/tabsHeader'
import TabsContent from '../../common/tab/tabsContent'
import TabContent from '../../common/tab/tabContent'
import TabHeader from '../../common/tab/tabHeader'
import List from './list'
import Form from './form'

class Post extends Component {

    componentWillMount() {
  
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }
    render() {
        return (
            <div>
                <Tabs>
                    <TabsHeader>
                        <TabHeader label='Listar' icon='list' target='tabList' />
                        <TabHeader label='Incluir' icon='plus-circle-fill' target='tabCreate' />
                        <TabHeader label='Alterar' icon='pencil-fill' target='tabUpdate' />
                        <TabHeader label='Excluir' icon='trash-fill' target='tabDelete' />
                    </TabsHeader>
                </Tabs>
                <TabsContent>
                    <TabContent id='tabList'>
                        <List />
                    </TabContent>
                    <TabContent id='tabCreate'>
                        <Form onSubmit={this.props.create}/>
                    </TabContent>
                    <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                    <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
                </TabsContent>

            </div >

        )
    }
}

const mapStateToProps = state => ({ noticias: state.postReducer.noticias })
const mapDispatchToProps = (dispatch) => bindActionCreators({ selectTab, showTabs, create }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Post)



