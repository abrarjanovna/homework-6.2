import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-line"></div>
     <div className="footer-text">
     <h2>PLANTKU</h2>
      <h3>Plantku House</h3>
      <p>
        Jl. Laksda Adisucipto No.51, Demangan, Kec. <br /> Depok, Kota Yogyakarta,
        Daerah Istimewa <br /> Yogyakarta 55282
      </p>
     </div>
     <div className="footer-next-text">
      <h3 className="perusahan">Perusahaan</h3>
      <p className="p">Tentang Kami</p>
      <p className="p">Hubungi Kami</p>
     </div>
     <div className="footer-next-text">
      <h3 className="perusahan">Produk</h3>
      <p className="p">Tanaman</p>
      <p className="p">Tanaman Lain</p>
     </div>
     <div className="footer-next-text">
      <h3 className="perusahan">Berlangganan Email Kami</h3>
      <input placeholder="Masukan Alamat Email" className="input p" type="text" />
      <button className="submit-btn p">Submit</button>
     </div>
    </div>
  );
}
