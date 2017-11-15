import {Component} from 'react'
import Room from '../Room/Room'

export default class extends Component {
/*  constructor (props) {
    super(props)
  }*/

  componentWillMount () {
  }
  componentWillReceiveProps () {
    console.log(this.props.rooms)
  }
  render () {
    return (
      <div>
        printing rooms
        {
          this.props.rooms.map((room) => {
            <Room info={room} />
          })
        }
      </div>
    )
  }
}
