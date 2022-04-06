export default function Alert({ message, color }) {
  let background = {
    backgroundColor: color,
    width: "100%",
    borderRadius: "5px",
    textAlign: "center",
  };

  return <div style={background}>{message}</div>;
}
