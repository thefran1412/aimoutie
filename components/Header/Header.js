import {Component} from 'react'
import Head from 'next/head'
import UserControl from '../UserControl/UserControl'
import HeaderForm from '../HeaderForm/HeaderForm.js'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      logged: true
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
            <h1>Scapree</h1>
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
