import {Component} from 'react'
import Head from 'next/head'
// import Link from 'next/link'

export default class Room extends Component {
  render () {
    return (
      <div className='room'>
        <a href={`/room/${this.props.info._id}`}>
          <Head>
            <link href='/static/css/room.css' rel='stylesheet' />
          </Head>
          {this.props.info.name}
        </a>
      </div>
    )
  }
}
