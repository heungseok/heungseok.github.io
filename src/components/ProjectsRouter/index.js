import React from 'react';

import HyperTendril from '../HyperTendril';


export default function ProjectsRouter(props) {
  const {
    params: { project_name }, 
  } = props.match;

  const router = () => {

    switch(project_name.toLowerCase()) {
      case 'hypertendril':
        document.title = 'HyperTendril';
        return <HyperTendril />
      default:
        return <div>Nothing to show</div>
    }
  }

  return (
    // <div>
      router()
    // </div>
  )
}