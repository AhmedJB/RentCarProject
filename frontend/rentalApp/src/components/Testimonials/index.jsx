import React from 'react'
import profil1 from "../../assets/general/p1.png"
import profil2 from "../../assets/general/p2.png"
import profil3 from "../../assets/general/p3.png"
function Testimonials() {
    return(
        <div className="div_testimonials container mx-auto">
  <div className="div_inner">
    <h2 className="h2_Testimonials">Testimonials</h2>
    <div className="div_border" />
    <div className="div_row">
      <div className="div_col">
        <div className="div_testimonial">
          <img src={profil1} alt="p1" />
          <div className="div_name">Mehdi Benani</div>
          <p>
            Very well explained and easy booking process, competitive pricing and accepts partial payment on booking, balance due when picking up the car.
          </p>
        </div>
      </div>
      <div className="div_col">
        <div className="div_testimonial">
          <img src={profil2} alt="p2" />
          <div className="div_name">Asmae Idrissi</div>
          <p>
            Very cost effective, provided the car we expected at a much lower cost than other rental companies.
          </p>
        </div>
      </div>
      <div className="div_col">
        <div className="div_testimonial">
          <img src={profil3} alt="p3" />
          <div className="div_name">Soukaina Lahlou</div>
          <p>
            The ease of renting the car and availability. Not satisfied with the Full insurance offered by Discover cars as agents shows certain damages which are not covered under full insurance.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

   );
   }
  export default Testimonials