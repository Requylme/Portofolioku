import React from "react";
import "./Sertifikat.css";

const daftarSertifikat = [
  {
    nama: "Sertifikat Web Development",
    penyelenggara: "Nama Penyelenggara",
    tahun: "2026",
    gambar: "/certificates/sertifikat-web.jpg",
    link: "/certificates/sertifikat-web.pdf",
  },
  {
    nama: "Sertifikat JavaScript",
    penyelenggara: "Nama Penyelenggara",
    tahun: "2026",
    gambar: "/certificates/sertifikat-js.jpg",
    link: "/certificates/sertifikat-js.pdf",
  },
];

function Sertifikat() {
  return (
    <section className="section sertifikat-section" id="sertifikat">
      <div className="section-title">
        <span>PENCAPAIAN</span>
        <h2>Sertifikat Saya</h2>
        <p>
          Sertifikat pelatihan dan pembelajaran yang telah saya peroleh.
        </p>
      </div>

      <div className="sertifikat-grid">
        {daftarSertifikat.map((item) => (
          <article className="sertifikat-card" key={item.nama}>
            <div className="sertifikat-image">
              <img src={item.gambar} alt={item.nama} loading="lazy" />
            </div>

            <div className="sertifikat-content">
              <h3>{item.nama}</h3>
              <p>{item.penyelenggara}</p>
              <span className="sertifikat-tahun">
                Tahun {item.tahun}
              </span>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="sertifikat-button"
              >
                Lihat Sertifikat ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Sertifikat;