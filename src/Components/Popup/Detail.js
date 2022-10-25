import React from 'react'

const Detail = ({ setImgPopup , obj}) => {  
  return (
    <div>
        <div className='detail'>
          <div className='detail_inner'>
            <i onClick={() => setImgPopup(false)} class="fa-solid fa-xmark"></i>
          <div className="detail_logo">
                <img src={`https://tse2.mm.bing.net/th?id=OIP.-FYmbg3G_Hbu6D5n69eElgHaIV&pid=Api&P=0`} alt='' />
                 <h5><b>Hello</b></h5>
          </div>
              <div className="detail_image">
                <img src={`https://tse1.mm.bing.net/th?id=OIP.NbfPECA64xbFnmW58MbWDQHaEo&pid=Api&P=0`}/>
              </div>
                <div className="detail_text">
            <p>Peragraph</p>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default Detail