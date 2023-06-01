import React from 'react'

export default {
    title: 'Button'
}

export const UncontrolledInput = () => <input onClick={action('clicked')}>Hello Button </input>

export const Emoji = () => (
    <Button>
        <span role='img' aria-label='so cool'>
            🤪😂🤣
        </span>
    </Button>
)

