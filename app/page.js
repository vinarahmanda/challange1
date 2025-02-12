'use client';
import React from "react";

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.profileContainer}>
          <img
            src="/v.jpg" // Ganti dengan path gambar profil Anda
            alt="Vina Rahmanda Indriani"
            style={styles.profileImage}
          />
        </div>
        <h1 style={styles.name}>Vina Rahmanda Indriani</h1>
        <p style={styles.title}>D3 Komputerisasi Akuntansi - Masoem University</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Pendidikan</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>SD Ciaro 2</strong>
          </li>
          <li style={styles.listItem}>
            <strong>SMP Negeri 3 Limbangan</strong>
          </li>
          <li style={styles.listItem}>
            <strong>SMK Bhakti Putra</strong>
          </li>
          <li style={styles.listItem}>
            <strong>D3 Komputerisasi Akuntansi</strong> - Masoem University (Sekarang)
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Pengalaman</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>PKL di UPTD Nagreg</strong> - Praktek Kerja Lapangan
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Keahlian</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Cepat tangkap dan profesional</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Prestasi</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Juara 1 di SMK Bhakti Nagreg</li>
          <li style={styles.listItem}>Juara 1 dan 2 lomba desain poster di STMIK Jabar</li>
        </ul>
      </div>

      <footer style={styles.footer}>
        <p style={styles.footerText}>CV - Vina Rahmanda Indriani</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(135deg, #ffb6c1, #ffe6f1)", // Gradasi warna pink pastel
    color: "#333",
    padding: "20px",
    margin: "0 auto",
    maxWidth: "800px",
    borderRadius: "20px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
    padding: "20px",
    background: "linear-gradient(135deg, #ff4081, #ffb6c1)", // Gradasi warna header
    borderRadius: "10px",
  },
  profileContainer: {
    textAlign: "center",
    marginBottom: "15px",
  },
  profileImage: {
    borderRadius: "50%",
    width: "120px",
    height: "120px",
    objectFit: "cover",
    border: "5px solid #fff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  name: {
    fontSize: "36px",
    fontWeight: "bold",
    margin: "0",
    color: "#fff",
  },
  title: {
    fontSize: "20px",
    color: "#fff",
    margin: "0",
  },
  section: {
    marginBottom: "30px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ff4081",
    borderBottom: "2px solid #ff4081",
    paddingBottom: "5px",
    marginBottom: "15px",
  },
  list: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  listItem: {
    fontSize: "18px",
    marginBottom: "8px",
    color: "#555",
  },
  footer: {
    textAlign: "center",
    paddingTop: "20px",
    borderTop: "2px solid #ffb6c1",
  },
  footerText: {
    fontSize: "14px",
    color: "#888",
  },
};
