import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import {showTabs, selectTab } from '../../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getPost() {
    const request = axios.get(`${BASE_URL}`)
    return {
        type: 'NOTICIAS_GET',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Salvo com sucesso')
                dispatch([
                    resetForm('form'),
                    getPost(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            }).catch(err => {
                const description = err.response.data.message.errors.description
                const title = err.response.data.message.errors.title
                for (const erro in err.response.data.message.errors) {
                    toastr.error('Error', description.message)
                    toastr.error('Error', title.message)
                }
            })
    }

}

export function showUpdate(form) {
    return [
        selectTab('tabUpdate'),
        showTabs('tabUpdate')
    ]
}