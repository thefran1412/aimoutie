import {Component} from 'react'
import Layout from '../components/Layout/Layout'
import {getRooms} from '../services/api.js'
import PrintRooms from '../components/PrintRooms/PrintRooms'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rooms: []
    }

    this.rooms = this.rooms.bind(this)
  }
  rooms () {
    getRooms({}, (data) => {
      this.setState({
        rooms: data.data
      })
    })
  }
  componentWillMount () {
    this.rooms()
  }
  render () {
    return (
      <Layout page='home'>
        <PrintRooms rooms={this.state.rooms} />
      </Layout>
    )
  }
}
