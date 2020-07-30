import React from 'react'
import {MDBInputGroup, MDBBtn} from 'mdbreact';
export default function CallToAction() {
    return (
        <div className="callToAction">
           {/* <h2>We give you measurable results that has the transparency and adaptability to meet your needs </h2>  */}
           <h2>Don't Be Another Victim Of Account Takeover//We present the solution </h2>
           <h2>Security is Essential to Any Organzation, We present The Easy Solution </h2>
           {/* <h2>It's very Rare When Necessary Things Are This Easy To Get</h2> */}
           {/* <h2>Secure, Easy, And Necessary. Try It Today</h2> */}
           <MDBInputGroup
          hint="Your Work Email"
          containerClassName="mb-3"
          append={
            <MDBBtn outline color="primary" className="m-0 px-3 py-2 z-depth-0">
              Start Trial Today
            </MDBBtn>
          }
        />
        </div>
    )
}
