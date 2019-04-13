import React from 'react'

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    }, 2000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos iusto aspernatur exercitationem temporibus, dolore atque, doloremque magnam neque velit omnis eum, nam! Ab vel earum fugiat tenetur eum, blanditiis aperiam.</p>
        </div>
    )
}

export default Contact
