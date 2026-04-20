export default function CTA({ setPage }) {
  return (
    <div style={styles.box}>
      <h2>Hire Me </h2>
      <button style={styles.btn} onClick={() => setPage("contact")}>Contact Me</button>
    </div>
  );
}

const styles = {
  box: {
    background: "#a3a3d8",
    padding: "20px",
    color: "white",
    textAlign: "center",
    borderRadius: "10px"
  },
  btn: {
    marginTop: "10px",
    padding: "10px"
  }
};