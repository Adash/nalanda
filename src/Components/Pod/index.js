import React, { useState, useEffect } from 'react';
import { withFirebase } from '../Firebase';

import "./pod.css";

// this whole component is just for trying things,
// the logic for fetching the data and the component 
// for displaying the list used in the home component
// have been developed here and copied.
// This means that there's no unique functionality in this
// component and it can be discarded at any time.


const ElementDisplay = ({elements}) => (
  <div className="element_display">
    { elements.map(element => (
      <div 
        key={element.uid} 
        className="q_list_element"
      >
        <p className="quote_text" >{ element.text }</p>
        <p className="quote_author" >{ element.author }</p> 
        <br/>     
      </div>
    ))}
  </div>
)

const PodBase = (props) => {
  const [ elements, setElements ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
      setLoading(true);
      const unsubscribe = props.firebase.elements().on('value', snapshot => {
      // convert messages list from snapshot
        const elementObject = snapshot.val();
        if (elementObject) {
          const elementsList = Object.keys(elementObject).map(key => (
              elementObject[key]
          ))
          setElements(elementsList);
          setLoading(false);
        }
        return () => unsubscribe();
      });
  },[props.firebase])

    return (
      <div className="pod_container">
        <div>{loading && <p>loading</p>}</div>
        <ElementDisplay elements={ elements }/>
      </div>
    )
  }

const Pod = withFirebase(PodBase);

export default Pod;