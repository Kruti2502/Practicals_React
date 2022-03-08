import React from 'react';

interface Name {
  name?: string;
}

function MyName(prop: Name) {
  return <h2>{prop.name}</h2>;
}

export default MyName;
