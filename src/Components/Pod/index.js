import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

const ElementDisplay = ({elements}) => (
  <ul>
    { elements.map(element => (
      <li>{ element.name }</li>
    ))}
  </ul>
)

class PodBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      editText: '',
      elements: [],
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.elements().on('value', snapshot => {
      // convert messages list from snapshot
      const elementObject = snapshot.val();

      if (elementObject) {
        const elementsList = Object.keys(elementObject).map(key => (
            elementObject[key]
        ))
        this.setState({ elements: elementsList });
        console.log(this.state.elements)
      }

    });
  }
    componentWillUnmount() {
      this.props.firebase.elements().off();
  }

  render() {
    const { elements } = this.state;
    console.log(elements)
    return (
      <>
        <p>hello</p>
        <ElementDisplay elements={ elements }/>
      </>
    )
  }
};

const Pod = withFirebase(PodBase);

export default Pod;