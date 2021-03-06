import {Component} from 'react'
import Head from 'next/head'

import Header from '../Header/Header'

export default class extends Component {
  render () {
    if (!this.props.page) {
      this.props.page = 'Undefinied'
    }
    return (
      <div>
        <Head>
          <meta charSet='UTF-8' />
          <title>{this.props.page}</title>
          <link href='/static/css/default.css' rel='stylesheet' />
        </Head>
        <div>
          <Header />
          <h1>{this.props.page}</h1>
          {this.props.children}
        </div>
      </div>
    )
  }
}
