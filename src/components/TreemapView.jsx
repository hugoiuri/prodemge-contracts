import React from 'react';

import { Treemap } from 'd3plus-react'


export default props => {
  const htmlButton = "<a id='google' href='http://www.google.com' target='_blank'>Click here to go to Google</a>"

  const methods = {
    groupBy: "name",
    data: [
      { "value": 100, "name": "alpha", "test": "a" },
      { "value": 70, "name": "beta", "test": "b" },
      { "value": 40, "name": "gamma", "test": "c" },
      { "value": 15, "name": "delta", "test": "d" },
      { "value": 5, "name": "epsilon", "test": "e" },
      { "value": 1, "name": "zeta", "test": "f" }
    ],
    size: d => d.value,
    tooltip: { "html": htmlButton }
  }

  return (
    <Treemap config={methods} />
  )
}