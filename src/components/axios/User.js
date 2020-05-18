import React from 'react'
import Box from '@material-ui/core/Box';

export default function User(props) {
    const {id, title, body} = props

    return (
        <div>
            <Box component="span" m={1}>
                <h1>
                    {title}
                </h1>
                <p>
                    {body}
                </p>
            </Box>
        </div>
    )
}
