import React, { useState, useEffect } from 'react';
import { withFirebase } from '../Firebase';

const ElementDisplay = ({elements}) => (
  <ul>
    { elements.map(element => (
      <li key={element.uid} >{ element.name }</li>
    ))}
  </ul>
)

const PodBase = (props) => {
  const [ elements, setElements ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
      // setLoading(true);

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
      <>
        <div>{loading && <p>loading</p>}</div>
        <ElementDisplay elements={ elements }/>
      </>
    )
  }

const Pod = withFirebase(PodBase);

export default Pod;