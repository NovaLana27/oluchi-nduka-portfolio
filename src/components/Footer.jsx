export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h3>Let's Build Something Amazing Together!</h3>
          <p>I'm always excited to work on new projects and collaborate with fellow developers.</p>
          <div style={styles.socialLinks}>
            <a href="https://github.com/NovaLana27" target="_blank" rel="noopener noreferrer" style={styles.link}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/oluchi-nduka-b1088b322" target="_blank" rel="noopener noreferrer" style={styles.link}>
              LinkedIn
            </a>
            <a href="mailto:stephamarie2007@gmail.com" style={styles.link}>
              Email
            </a>
          </div>
        </div>
        <div style={styles.copyright}>
          <p>&copy; 2026 Oluchi Nduka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#a3a3d8",
    color: "white",
    padding: "30px 0",
    marginTop: "auto"
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px"
  },
  content: {
    textAlign: "center",
    marginBottom: "20px"
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "15px"
  },
  link: {
    color: "#a3a3d8",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s ease"
  },
  copyright: {
    textAlign: "center",
    borderTop: "1px solid #a3a3d8",
    paddingTop: "20px",
    fontSize: "14px"
  }
};