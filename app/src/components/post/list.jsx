import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectTab, showTabs } from '../../common/tab/tabActions'
import { getPost, showUpdate } from './postActions'

class List extends Component {
    componentWillMount() {
        this.props.getPost()
    }
    RenderValue() {
        return this.props.noticias.map(vl => (
          
            <tr>
                <td>{vl.title}</td>
                <td>{vl.description}</td>
                <td>{vl.date}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(vl)}>
                        <i className="bi bi-pencil-fill"></i>
                    </button>
                </td>
            </tr>

        ))
    }
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Data</th>
                        <th scope="col">Açoes</th>
                    </tr>
                </thead>
                <tbody>
                    {this.RenderValue()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({ noticias: state.postReducer.noticias })
const mapDispatchToProps = (dispatch) => bindActionCreators({ getPost, showUpdate, selectTab, showTabs }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(List)