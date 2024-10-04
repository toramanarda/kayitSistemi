export default function StudentRegistration() {

  const [formData, setFormData] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  return (
    <>
      <h1>Öğrenci Kayıt Sistemi</h1>

      <form onSubmit={handleSubmit}>
        <p>
          <label>
            İsim: <input type="text" name="name" required onChange={handleChange}></input>
          </label>
        </p>
      </form>
    </>
  )
}