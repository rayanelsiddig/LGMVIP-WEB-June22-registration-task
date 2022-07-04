import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Student({ stdList }) {
  return (
    <>
      {stdList.map((std) => {

        return (

          <div className="card  flex-row mb-3" key={std.id}>
          <img className=" card-img-md-left"  src={std.stdInfo.image} alt=""/>
          {/* https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 */}
          <div className="card-body pl-2">
          {/* <div > */}
            <li className="mb-2"> <FontAwesomeIcon icon={solid('address-book')} /> {std.stdInfo.stdName}</li> 
            
            <li className="mb-2"> <FontAwesomeIcon icon={solid('envelope')} /> {std.stdInfo.stdEmail}</li>
            <a href={std.stdInfo.stdWebsite}><FontAwesomeIcon icon={solid('globe')} /> {std.stdInfo.stdWebsite}</a>
            <li className=" mt-2 mb-2"> <FontAwesomeIcon icon={solid('user')} /> {std.stdInfo.gender}</li>
            <li className="mb-2"><FontAwesomeIcon icon={solid('laptop-code')} /> {std.stdInfo.HTML } {std.stdInfo.CSS } {std.stdInfo.JAVASCRIPT  }</li>
          
          </div>
          </div>
        );
      })}
    </>
  );
}
