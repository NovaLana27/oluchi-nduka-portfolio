export default function ContactForm() {
  return (
    <form style={styles.form}>
      <input placeholder="Your Name" required />
      <input placeholder="Email" required />
      <textarea placeholder="Message"></textarea>
      <button>Send</button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px"
  }
};