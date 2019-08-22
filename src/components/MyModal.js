import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Details from './Details';

const MyModal = (props) => {

    const movie = props.movie;
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered >
      
      <Modal.Body>
          <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-75-m w-25-l mw7 vh-70 center">
          <h1 className="tc title">{movie.Title}</h1>
            <img src={movie.Poster} className="bg-light-green db w-50 br2 br--top fl vh-50" alt={movie.Title} />
            <div className="pa2 ph3-ns w-50 pb3-ns vh-50 fr">
              <div className="dt w-100 mt1">
              </div>
              <div style={{ overflowY: 'scroll', height: '300px'}}>
                <Details movie={movie} />
              </div>
            </div>
          </article>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default MyModal;



// import ModalFooter from 'react-bootstrap/ModalFooter';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalTitle from 'react-bootstrap/ModalTitle';
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalDialog from 'react-bootstrap/ModalDialog';