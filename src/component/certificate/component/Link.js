import React from 'react';

import {Box} from '@material-ui/core';




export default function Certificate(props) {

    return (
        <Box>
            <a href={props.link} target="blank" style={{ color: '#2d6bf9', textDecoration: 'none' }}>{props.text}</a>
       </Box>
  );
}
