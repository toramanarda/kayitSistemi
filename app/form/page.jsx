export default function StudentRegistration() {

  const [formData, setFormData] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.certification === "Evet") {
      setCertificateStatus(`${formData.name} SERTİFİKA KAZANDI`);
    } else {
      setCertificateStatus(`${formData.name} SERTİFİKA KAZANAMADI`);
    }

    setStep(5);
  };


  return (
    <>
      <h1>Öğrenci Kayıt Sistemi</h1>

      <form onSubmit={handleSubmit}>
        <p>
          <label>
            İsim: <input type="text" name="name" required onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Soyisim: <input type="text" name="surname" required onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Doğum Tarihi:
            <input type="date" name="birthDate" required onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            TC No: <input type="text" name="tcno" required onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Cinsiyet:
            <select name="gender" required onChange={handleChange}>
              <option value="">Seçiniz</option>
              <option value="Erkek">Erkek</option>
              <option value="Kadın">Kadın</option>
              <option value="Diğer">Diğer</option>
              <option value="helikopter">Atak Helikopteri</option>
            </select>
          </label>
        </p>
      </form>
    </>
  )
}