import { useState } from "react";

function From() {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  // handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      console.log(data);

      alert("User saved ✅");

      // reset form
      setForm({ username: "", password: "" });

    } catch (err) {
      console.log(err);
      alert("Error ❌");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Simple Login Form 🔐</h2>

        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={form.username}
          onChange={handleChange}
          style={styles.input}
          className="text-gray-950"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
          className="text-gray-950"
        />

        <button type="submit" style={styles.button}>
          Submit 🚀
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px"
  },
  input: {
    marginBottom: "10px",
    padding: "10px"
  },
  button: {
    padding: "10px",
    cursor: "pointer"
  }
};

export default From;