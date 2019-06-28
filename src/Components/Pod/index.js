import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class PodBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      editText: '',
      elements: 'nic',
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.elements().on('value', snapshot => {
      // convert messages list from snapshot
      const element = snapshot.val();

      if (element) {
 
        this.setState({ elements: element });
      }

    });
  }
    componentWillUnmount() {
      this.props.firebase.elements().off();
  }

  render() {
    const { elements } = this.state;
    return (
      <>
        <p>hello</p>
        <p>{ elements }</p>
      </>
    )
  }
};

const Pod = withFirebase(PodBase);

export default Pod;