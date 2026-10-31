import React, { useState } from "react";
import DataImage from "./data";
import { listTools } from "./data";
import { listProyek } from "./data";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const handleOpenModal = (proyek) => {
    setSelectedProject(proyek);
    setIsModalOpen(true);
    setActiveImage(proyek.galeri && proyek.galeri.length > 0 ? proyek.galeri[0] : proyek.gambar);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setActiveImage(null);
  };

  return (
    <>
      {/* hero */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <q>Keberhasilan lahir dari usaha dan kerja keras.✨</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Muhamad Bintang Rukmana</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya mempunyai ketertarikan dalam bidang Web dan Backend Development, terutama pada pembuatan REST API, pengelolaan basis data, serta integrasi antarmuka. Pemahaman pada bidang pemrograman ini telah saya terapkan secara nyata melalui berbagai proyek dan magang.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="/CV_Muhamad_Bintang_Rukmana.pdf" download="CV_Muhamad_Bintang_Rukmana.pdf" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
              Lihat Proyek <i className="ri-arrow-down-long-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" />
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Muhamad Bintang Rukmana, seorang Backend dan Full Stack Web Developer. Saya percaya bahwa antarmuka dan fungsionalitas sistem harus berjalan beriringan, sehingga setiap proyek yang saya kembangkan tidak hanya responsif, tetapi juga memberikan pengalaman pengguna yang
            optimal.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  3 <span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1 <span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tool */}
      <div className="tools mt-32 py-10">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Tech Stack & Tools
        </h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Berikut adalah teknologi, framework, dan alat utama yang saya gunakan dalam perancangan arsitektur dan pengembangan aplikasi web.
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Proyek
        </h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Berikut ini beberapa proyek yang telah saya buat dan selesaikan
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold " key={index}>
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <button onClick={() => handleOpenModal(proyek)} className="bg-violet-700 p-3 rounded-lg block w-full border border-zinc-600 hover:bg-violet-600">
                    Detail Proyek
                  </button>
                  {/* <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">
                    Lihat Website
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 pt-10 pb-10 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="bg-[#1e1e1e] rounded-2xl w-full max-w-5xl p-6 md:p-8 relative mt-auto mb-auto animate__animated animate__fadeIn border border-zinc-700/50 shadow-2xl">
              <button onClick={handleCloseModal} className="absolute top-4 right-4 text-zinc-400 hover:text-white bg-zinc-800 rounded-full w-10 h-10 flex items-center justify-center transition">
                <i className="ri-close-line ri-xl"></i>
              </button>

              <h2 className="text-3xl font-bold mb-8 pr-10 border-b border-zinc-800 pb-4">Detail Proyek: {selectedProject.nama}</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* 3. PERUBAHAN UI KOLOM KIRI (Galeri Interaktif) */}
                <div className="flex flex-col gap-4">
                  {/* Gambar Aktif (Layar Besar) */}
                  <div className="w-full bg-zinc-900 rounded-xl border border-zinc-700 overflow-hidden flex items-center justify-center min-h-[250px]">
                    <img
                      src={activeImage}
                      alt="Gambar Aktif Proyek"
                      className="w-full h-auto object-cover animate__animated animate__fadeIn"
                      key={activeImage} // Memaksa animasi ulang saat gambar diganti
                    />
                  </div>

                  {/* Deretan Thumbnail (Tombol Pilihan) */}
                  {selectedProject.galeri && selectedProject.galeri.length > 1 && (
                    <div className="grid grid-cols-4 gap-3">
                      {selectedProject.galeri.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImage(img)}
                          className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 ${activeImage === img ? "border-violet-500 scale-[1.02] shadow-lg" : "border-transparent opacity-60 hover:opacity-100 hover:border-zinc-500"}`}
                        >
                          <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-16 md:h-24 object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* KOLOM KANAN: Detail Informasi */}
                <div className="flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tools.map((tool, index) => (
                      <span key={index} className="text-sm font-medium bg-zinc-800 border border-zinc-600 px-3 py-1.5 rounded-md text-zinc-200">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-xl font-bold mb-2">Deskripsi Proyek</h4>
                  <p className="mb-6 text-zinc-300 leading-relaxed text-sm md:text-base">{selectedProject.desk}</p>

                  <h4 className="text-xl font-bold mb-2">Tugas & Tanggung Jawab</h4>
                  <ul className="list-disc list-outside ml-5 text-zinc-300 space-y-2 mb-6 text-sm md:text-base">
                    {selectedProject.tugas &&
                      selectedProject.tugas.map((tugas, index) => (
                        <li key={index} className="pl-1">
                          {tugas}
                        </li>
                      ))}
                  </ul>

                  <h4 className="text-xl font-bold mb-2">Status</h4>
                  <p className="text-zinc-300 mb-8 text-sm md:text-base">{selectedProject.status}</p>

                  <div className="mt-auto">
                    {selectedProject.linkGithub !== "#" ? (
                      <a href={selectedProject.linkGithub} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-violet-700 hover:bg-violet-600 text-white w-full py-3.5 rounded-xl font-bold transition text-base">
                        Lihat Kode di GitHub <i className="ri-github-fill ri-lg"></i>
                      </a>
                    ) : (
                      <button disabled className="flex items-center justify-center gap-2 bg-zinc-700 text-zinc-400 w-full py-3.5 rounded-xl font-bold cursor-not-allowed text-base">
                        Repositori Privat / Tahap Desain
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Kontak
        </h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Mari terhubung dengan saya.
        </p>
        <form action="https://formsubmit.co/muhamadrukmana04@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukan Email..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
