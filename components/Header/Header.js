import {Component} from 'react'
import Head from 'next/head'

export default class extends Component {
  render () {
    return (
      <header>
        <Head>
          <link href='/static/css/header.css' rel='stylesheet' />
        </Head>
        this is the header
      </header>
    )
  }
}
