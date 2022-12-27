import React from 'react'
import ReactLoading from 'react-loading';
const Preloader = () => {
  return (
    <div className='preloader'>
         <ReactLoading type={'bars'} color={'#03fc4e'} height={'10%'} width={'10%'} />
    </div>
  )
}

export default Preloader