import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import labelAnInput from '../../common/form/labelAndInput'

class Form extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <p />
        <Field name="title" component={labelAnInput}
          label="Titulo"
          placeholder="Informe o titulo" />
        <p />
        <Field name="description" component={labelAnInput}
          label="Descrição"
          placeholder="Informe o descrição"
        />
        <p />
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>

    )
  }
}
export default reduxForm({ form: 'form' })(Form)