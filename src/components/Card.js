import React from 'react';
import MyModal from './MyModal';

const Card = ({movies}) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <span>
            <button className='tc bg-black dib br3 pa3 ma2 grow bw2 shadow-5' onClick={() => setModalShow(true)}>
              <img alt='user' src={movies.Poster} width='300' height='200' />
              <div style={{width:"300px", height:"100%"}}>
                  <h2 style={{color:'white'}}>{movies.Title}({movies.Year})</h2>
              </div>
            </button>

          <MyModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            movie={movies}
          />
        </span>
    );
}

export default Card;