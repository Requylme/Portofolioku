
import React, { useEffect, useState } from "react";
import "./App.css";
import Sertifikat from "./component/Sertifikat"

const data = {
  nama: "Santuri Simatupang",
  peran:
    "Mahasiswa D4 Manajemen Informatika yang tertarik pada pengembangan website dan aplikasi.",
  email: "emailkamu@example.com",

  tentang: [
    "Halo, saya Santuri Simatupang, mahasiswa D4 Manajemen Informatika Universitas Negeri Surabaya.",
    "Saya tertarik pada pengembangan web dan aplikasi. Saat ini saya terus belajar membangun antarmuka yang responsif, rapi, dan mudah digunakan."
  ],

  skill: [
    { nama: "HTML", nilai: 75 },
    { nama: "CSS", nilai: 70 },
    { nama: "JavaScript", nilai: 55 },
    { nama: "React", nilai: 45 },
    { nama: "Python", nilai: 45 },
    { nama: "SQL", nilai: 40 }
  ],

  project: [
    {
    nama: "Icam Store",
    deskripsi: "Website e-commerce untuk menampilkan produk.",
    teknologi: ["HTML", "CSS", "JavaScript", "React"],
    repo: "https://github.com/username/icam-store",
    demo: "https://username.github.io/icam-store",
    },
    {
    nama: "Icam Store",
    deskripsi: "Website e-commerce untuk menampilkan produk.",
    teknologi: ["HTML", "CSS", "JavaScript", "React"],
    repo: "https://github.com/username/icam-store",
    demo: "https://username.github.io/icam-store",
    },
    {
    nama: "Icam Store",
    deskripsi: "Website e-commerce untuk menampilkan produk.",
    teknologi: ["HTML", "CSS", "JavaScript", "React"],
    repo: "https://github.com/username/icam-store",
    demo: "https://username.github.io/icam-store",
    },
    {
     nama: "Icam Store",
    deskripsi: "Website e-commerce untuk menampilkan produk.",
    teknologi: ["HTML", "CSS", "JavaScript", "React"],
    repo: "https://github.com/username/icam-store",
    demo: "https://username.github.io/icam-store",
    }
  ],

  pendidikan: [
    {
      nama: "D4 Manajemen Informatika",
      tempat: "Universitas Negeri Surabaya",
      tahun: "Sedang menempuh pendidikan"
    },
    {
      nama: "SMK",
      tempat: "SMK Negeri 1 Lumut",
      tahun: "Pendidikan sebelumnya"
    }
  ]
};

function Navbar({ dark, setDark }) {
  const [menuBuka, setMenuBuka] = useState(false);

  const menu = [
    ["Tentang", "#tentang"],
    ["Skill", "#skill"],
    ["Project", "#project"],
    ["Sertifikat", "#sertifikat"],
    ["Pendidikan", "#pendidikan"],
    ["Kontak", "#kontak"]
  ];

  return (
    <header className="navbar">
      <a href="#beranda" className="logo">
        Santuri<span>.</span>
      </a>

      <nav className={menuBuka ? "nav-links aktif" : "nav-links"}>
        {menu.map(([nama, tujuan]) => (
          <a
            key={tujuan}
            href={tujuan}
            onClick={() => setMenuBuka(false)}
          >
            {nama}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className="theme-button"
          onClick={() => setDark(!dark)}
          aria-label="Ganti tema"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuBuka(!menuBuka)}
          aria-label="Buka menu"
        >
          {menuBuka ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const inisial = data.nama
    .split(" ")
    .slice(0, 2)
    .map((kata) => kata[0])
    .join("");

  return (
    <section className="hero" id="beranda">
      <div className="hero-content">
        <p className="status">
          <span></span> Sedang belajar dan mengembangkan project
        </p>

        <h1>
          Halo, saya <span>{data.nama}</span>
        </h1>

        <p className="hero-description">{data.peran}</p>

        <div className="hero-buttons">
          <a href="#project" className="button primary">
            Lihat Project ↗
          </a>

          <a href="#kontak" className="button secondary">
            Hubungi Saya
          </a>
        </div>
      </div>

      <div className="profile-picture">
        <div className="hero-image">
        <img src="https://i1.wp.com/em.wattpad.com/90c78f16c0e49c08836e5ed40926678d79822914/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f37706635756648634d77754b4b513d3d2d3533383336383533342e313531363837333637666561333161633630373836383736323530322e6a7067"  />
        </div>
        <small>Foto profil</small>
      </div>
    </section>
  );
}

function Tentang() {
  return (
    <section className="section" id="tentang">
      <SectionTitle
        label="TENTANG SAYA"
        title="Sedikit tentang saya"
      />

      <div className="about-grid">
        <div className="about-text">
          {data.tentang.map((paragraf, index) => (
            <p key={index}>{paragraf}</p>
          ))}
        </div>

        <div className="info-card">
          <div>
            <span>Lokasi</span>
            <strong>Surabaya, Indonesia</strong>
          </div>

          <div>
            <span>Pendidikan</span>
            <strong>D4 Manajemen Informatika</strong>
          </div>

          <div>
            <span>Fokus</span>
            <strong>Web Development</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>Mahasiswa</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ label, title, deskripsi }) {
  return (
    <div className="section-title">
      <span>{label}</span>
      <h2>{title}</h2>
      {deskripsi && <p>{deskripsi}</p>}
    </div>
  );
}

function Skills() {
  return (
    <section className="section" id="skill">
      <SectionTitle
        label="KEMAMPUAN"
        title="Skill yang saya pelajari"
        deskripsi="Persentase berikut merupakan contoh dan dapat kamu sesuaikan."
      />

      <div className="skill-grid">
        {data.skill.map((skill) => (
          <div className="skill-card" key={skill.nama}>
            <div className="skill-info">
              <strong>{skill.nama}</strong>
              <span>{skill.nilai}%</span>
            </div>

            <div className="progress">
              <div
                className="progress-value"
                style={{ width: `${skill.nilai}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const [kategori, setKategori] = useState("Semua");

  const kategoriList = ["Semua", "Web", "Aplikasi", "Game"];

  const projectTampil = data.project.filter(
    (project) =>
      kategori === "Semua" || project.kategori === kategori
  );

  return (
    <section className="section" id="project">
      <SectionTitle
        label="PORTOFOLIO"
        title="Project pilihan"
        deskripsi="Beberapa project yang sedang atau pernah saya kerjakan."
      />

      <div className="filter-buttons">
        {kategoriList.map((item) => (
          <button
            key={item}
            className={kategori === item ? "filter aktif" : "filter"}
            onClick={() => setKategori(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {projectTampil.map((project) => (
          <article className="project-card" key={project.nama}>
            <div className="project-image">
              <span>{project.kategori}</span>
              <div className="mock-window">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>

            <div className="project-content">
              <h3>{project.nama}</h3>
              <p>{project.deskripsi}</p>

              <div className="tech-list">
                {project.teknologi.map((teknologi) => (
                  <span key={teknologi}>{teknologi}</span>
                ))}
              </div>
              
<div className="project-buttons">
  <a
    href={project.repo}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-repo"
  >
    <span>⌘</span> Lihat Repo
  </a>

  <a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-demo"
  >
    <span>↗</span> Demo
  </a>
</div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}



function Pendidikan() {
  return (
    <section className="section" id="pendidikan">
      <SectionTitle
        label="PENDIDIKAN"
        title="Perjalanan pendidikan"
      />

      <div className="education-list">
        {data.pendidikan.map((item) => (
          <article className="education-card" key={item.nama}>
            <div className="education-dot"></div>

            <div>
              <h3>{item.nama}</h3>
              <p>{item.tempat}</p>
              <span>{item.tahun}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Kontak() {
  const [pesan, setPesan] = useState("");

  async function salinEmail() {
    try {
      await navigator.clipboard.writeText(data.email);
      setPesan("Email berhasil disalin!");
    } catch {
      setPesan(`Email saya: ${data.email}`);
    }

    setTimeout(() => setPesan(""), 2500);
  }

  return (
    <section className="section" id="kontak">
      <div className="contact-card">
        <span className="contact-label">KONTAK</span>

        <h2>Punya project atau ingin berdiskusi?</h2>

        <p>
          Silakan hubungi saya untuk berdiskusi mengenai project
          atau kesempatan kolaborasi.
        </p>

        <div className="email-row">
          <span>{data.email}</span>
          <button className="button primary" onClick={salinEmail}>
            Salin Email
          </button>
        </div>

        {pesan && <p className="toast">{pesan}</p>}

        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("tema") === "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );

    localStorage.setItem("tema", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />

      <main className="container">
        <Hero />
        <Tentang />
        <Skills />
        <Projects />
        <Sertifikat />
        <Pendidikan />
        <Kontak />

        <footer className="footer">
          <span>© {new Date().getFullYear()} {data.nama}</span>
          <span>Dibuat dengan React</span>
        </footer>
      </main>
    </>
  );
}
