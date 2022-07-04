import React from "react";

export default function Footer(){

    return(

      <div className="footer">
      <p>Developed by Rayan Elsiddig MohamedAhmed.</p>
      <small>
        ©<span>{new Date().getFullYear()}</span> All Rights Reserved
      </small>
    </div>
    )
}