import React, { Component } from 'react'

export default class PostView extends Component {
    render() {
        const {title, content} = this.props
        return (
            <>
                <h2>{title}</h2>
                <p className={'cardContent'}>{content}</p>
            </>
        )
    }
}