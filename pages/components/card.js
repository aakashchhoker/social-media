import React from "react";
import Gmap from "./map";
import Likes from '../../public/assets/images/like.png';
const card = () => {
  return (
    <div className="center">
      <div className="card ">
      
      
      <div className="imgs_alings">
      <div>
      <img
            className="card-img"
            src="https://i.ibb.co/JRBpprg/user1.png"
            alt=""
          />
      </div>

          <div>
            <p className="p">Near to 1 Km</p>
            <img
              className="card--img"
              src="https://i.ibb.co/DD7W6v8/map.png"
              alt=""
            />
          </div>
      </div>
      <div className="imgs_alings">
      <div>
      <img src={Likes} />
      </div>
      <div>
          <img
            className="card_img"
            src="https://i.ibb.co/PrXkmdZ/user-2.png"
            alt=""
          />
          </div>
      </div>
        </div>
     
    </div>
  );
};

export default card;
