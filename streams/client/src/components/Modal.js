import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";


const Modal = (props) => {

    const stopPropagate = (e) => {
        e.stopPropagation()
    }

    return ReactDOM.createPortal(
        <React.Fragment>
            <div className="modal-backdrop fade show"></div>
            <div onClick={props.onDismiss} className="modal fade show d-block">
                  <div className="modal-dialog modal-dialog-centered">
                        <div onClick={stopPropagate} className="modal-content">
                              <div className="modal-header">
                                    <h5 className="modal-title">{props.header}</h5>
                                    <Link to="/" type="button" className="close">
                                        <span aria-hidden="true">&times;</span>
                                    </Link>
                              </div>
                              <div className="modal-body">
                                    <p>{props.title}</p>
                                    <p>{props.content}</p>
                              </div>
                              <div className="modal-footer">{props.actions}</div>
                        </div>
                  </div>
            </div>
        </React.Fragment>,
        document.querySelector('#modal')
    );
}

export default Modal;