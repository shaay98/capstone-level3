import React from 'react';

export default function Footer() {
  const styles = {
    footer: {
      backgroundColor: '#222',
      color: '#f0f0f0',
      padding: '40px 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: 'center',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '8px',
      letterSpacing: '2px',
    },
    text: {
      margin: '4px 0',
      fontSize: '1rem',
    },
    nav: {
      marginTop: '20px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
    },
    link: {
      color: '#f0f0f0',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '1rem',
      transition: 'color 0.3s ease',
    },
    copy: {
      fontSize: '0.9rem',
      color: '#aaa',
      marginTop: '20px',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h2 style={styles.title}>Happy Hour</h2>
        <p style={styles.text}>Established 2020</p>
        <p style={styles.text}>Owner: Nijah Richardson</p>
        <nav style={styles.nav}>
          <a href="#menu" style={styles.link}>Menu</a>
          <a href="#about" style={styles.link}>About Us</a>
          <a href="#contact" style={styles.link}>Contact</a>
          <a href="#location" style={styles.link}>Location</a>
        </nav>
        <p style={styles.copy}>&copy; {new Date().getFullYear()} Happy Hour. All rights reserved.</p>
      </div>
    </footer>
  );
}
