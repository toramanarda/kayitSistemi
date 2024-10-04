export default function StudentRegistration() {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (e) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };


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

        {step === 1 && (
          <>
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
            <button type="button" onClick={handleNext}>
              İleri
            </button>
          </>
        )}


        {step === 2 && (
          <>
            <p>
              <label>
                Ön Sınav Puanı: <input type="number" name="preExamScore" step="0.1" required onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Mülakat Notları: <textarea name="interviewNotes" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Mülakat Puanı: <input type="number" name="interviewScore" step="0.1" required onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Mülakattan Geçti mi?
                <select
                  name="interviewPassed"
                  required
                  onChange={(e) => {
                    handleChange(e);
                    if (e.target.value === "Hayır") {
                      setFormCompleted(true);
                      setStep("completed");
                    } else {
                      handleNext(e);
                    }
                  }}
                >
                  <option value="">Seçiniz</option>
                  <option value="Evet">Evet</option>
                  <option value="Hayır">Hayır</option>
                </select>
              </label>
            </p>
            {step !== "completed" && (
              <>
                <button type="button" onClick={handlePrev}>
                  Geri
                </button>
              </>
            )}
          </>
        )}


        {step === "completed" && (
          <>
            <h2>Kayıt Tamamlandı</h2>
            <button type="button" onClick={handleReset}>
              Yeni Kayıt
            </button>
          </>
        )}
      </>
      )
}>