import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/js.png";
import Tools2 from "/assets/tools/php.png";
import Tools3 from "/assets/tools/nodejs.png";
import Tools4 from "/assets/tools/express.png";
import Tools5 from "/assets/tools/reactjs.png";
import Tools6 from "/assets/tools/tailwind.png";
import Tools7 from "/assets/tools/mysql.png";
import Tools8 from "/assets/tools/prisma.png";
import Tools9 from "/assets/tools/vscode.png";
import Tools10 from "/assets/tools/github.png";
import Tools11 from "/assets/tools/postman.png";
import Tools12 from "/assets/tools/docker.png";
import Tools13 from "/assets/tools/cypress.png";
import Tools14 from "/assets/tools/wordpress.png";
import Tools15 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Javascript",
    ket: "Language ",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "PHP",
    ket: "Language",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Node.js",
    ket: "Javascript Runtime",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Express.js",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "React.js",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "MySQL",
    ket: "Database",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Prisma ORM",
    ket: "Object Relational Mapper",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Github",
    ket: "Repository",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Postman",
    ket: "API Testing Tool",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Docker",
    ket: "containerization",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Cypress",
    ket: "End-to-End Testing",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "WordPress",
    ket: "Custom CMS",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "Figma",
    ket: "Design App",
    dad: "1500",
  },
];

import Proyek1 from "/assets/proyek/Proyek_1.webp";
import Proyek1_1 from "/assets/proyek/Proyek_1_1.webp";
import Proyek1_2 from "/assets/proyek/Proyek_1_2.webp";
import Proyek1_3 from "/assets/proyek/Proyek_1_3.webp";
import Proyek1_4 from "/assets/proyek/Proyek_1_4.webp";

import Proyek2 from "/assets/proyek/Proyek_2.webp";
import Proyek2_1 from "/assets/proyek/Proyek_2_1.webp";
import Proyek2_2 from "/assets/proyek/Proyek_2_2.webp";
import Proyek2_3 from "/assets/proyek/Proyek_2_3.webp";
import Proyek2_4 from "/assets/proyek/Proyek_2_4.webp";

import Proyek3 from "/assets/proyek/Proyek_3.webp";
import Proyek3_1 from "/assets/proyek/Proyek_3_1.webp";
import Proyek3_2 from "/assets/proyek/Proyek_3_2.webp";
import Proyek3_3 from "/assets/proyek/Proyek_3_3.webp";
import Proyek3_4 from "/assets/proyek/Proyek_3_4.webp";

import Proyek4 from "/assets/proyek/Proyek_4.webp";
import Proyek4_1 from "/assets/proyek/Proyek_4_1.webp";
import Proyek4_2 from "/assets/proyek/Proyek_4_2.webp";
import Proyek4_3 from "/assets/proyek/Proyek_4_3.webp";
import Proyek4_4 from "/assets/proyek/Proyek_4_4.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    galeri: [Proyek1, Proyek1_1, Proyek1_2, Proyek1_3, Proyek1_4],
    nama: "Sistem POS Waroeng Bakmi",
    desk: "Aplikasi Point of Sale (POS) dan manajemen inventaris terintegrasi berbasis web untuk memantau transaksi harian dan stok kedai secara real-time.",
    tugas: [
      "Menyelesaikan pengembangan sistem end-to-end dari perancangan database MySQL hingga antarmuka React.js.",
      "Mengimplementasikan logika manajemen stok dan transaksi menggunakan Node.js, Express.js, dan Prisma ORM.",
      "Melakukan riset operasional dan implementasi sistem langsung di lokasi produksi (Waroeng Bakmi Depok).",
    ],
    status: "Private Repository",
    linkGithub: "https://github.com/Rukmana03/kasir-app",
    tools: ["React.js", "Node.js", "Express.js", "Prisma ORM", "MySQL"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    galeri: [Proyek2, Proyek2_1, Proyek2_2, Proyek2_3, Proyek2_4],
    nama: "Backend API Skema",
    desk: "Arsitektur RESTful API dan sistem backend untuk platform edukasi daring Skema, dikembangkan selama masa magang di PT Nugraha Kreasi Digital.",
    tugas: ["Membangun arsitektur backend yang scalable menggunakan ekosistem Node.js dan Express.js.", "Mendesain skema database relasional menggunakan PostgreSQL dan Prisma ORM.", "Mengamankan jalur akses data pengguna dengan mengimplementasikan autentikasi JWT (JSON Web Tokens)."],
    status: "Private Repository",
    linkGithub: "https://github.com/Rukmana03/Backend-App_Skema",
    tools: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    galeri: [Proyek3, Proyek3_1, Proyek3_2, Proyek3_3, Proyek3_4],
    nama: "Web Platform Kajianmu",
    desk: "Platform website informasi dan manajemen konten modern, untuk sarana ceramah dan dakwah.",
    tugas: [
      "Meningkatkan kualitas antarmuka web dengan mengimplementasikan desain responsif menggunakan Tailwind CSS.",
      "Membangun arsitektur tema WordPress kustom dari nol menggunakan kerangka kerja Roots Sage 10.",
      "Menyusun struktur tata letak dinamis menggunakan mesin templating Laravel Blade.",
    ],
    status: "Production / Intern Project",
    linkGithub: "https://github.com/Rukmana03/WEB-Kajianmu",
    tools: ["WordPress", "Roots Sage 10", "Laravel Blade", "Tailwind CSS", "PHP"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    galeri: [Proyek4, Proyek4_1, Proyek4_2, Proyek4_3, Proyek4_4],
    nama: "UI/UX Web Hafida Florist",
    desk: "Perancangan prototipe antarmuka (UI/UX) untuk platform e-commerce katalog bunga. Desain ini dirancang untuk mengakomodasi alur pemesanan produk 'ready stock' dan kustomisasi buket secara spesifik.",
    tugas: [
      "Merancang antarmuka pengguna yang sepenuhnya responsif untuk perangkat Desktop dan Mobile menggunakan Figma.",
      "Memetakan alur navigasi (user flow) pemesanan yang membedakan katalog produk siap kirim dan produk kustom.",
      "Menyusun sistem desain mencakup palet warna, tipografi, dan tata letak sebagai cetak biru (blueprint) untuk fase pengembangan (development) selanjutnya."
    ],
    status: "Tahap Desain (Persiapan Development)",
    linkGithub: "#", 
    tools: ["Figma", "UI/UX Design", "Wireframing", "Responsive Design"],
    dad: "500",
  },
];
