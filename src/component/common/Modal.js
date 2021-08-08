import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/dashboard/popup.scss'


const Modal = ({ children }) => {

    return <div className="modal">
        <div className="modal-content">
    <span className="close">&times;</span>
    {children}
    </div>
    </div>

}
Modal.propTypes = {
    children: PropTypes.node
}

Modal.defaultProps = {
 children: null
}

export default Modal