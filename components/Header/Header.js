import {Component} from 'react'
import Head from 'next/head'
import UserControl from '../UserControl/UserControl'
import HeaderForm from '../HeaderForm/HeaderForm.js'
import Link from 'next/link'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      logged: false
    }
  }

  render () {
    return (
      <header>
        <Head>
          <link href='/static/css/header.css' rel='stylesheet' />
        </Head>
        <nav>
          <div className='headerLogo'>
            <Link href='/'>
              <a><h1>Scapree</h1></a>
            </Link>
          </div>
          <HeaderForm />
          {
            this.state.logged
          ? <UserControl profileImg='http://localhost:3000/static/img/default-profile.png'/>
            : <div className='headerLogin'>
              <button>Sign Up</button>
              <button>Sign In</button>
            </div>
          }
        </nav>
      </header>
    )
  }
}
