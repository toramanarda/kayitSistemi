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
        {step === 3 && !formCompleted && (
          <>
            <p>
              <label>
                Dönemi: <input type="text" name="term" required onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Eğitmeni: <input type="text" name="instructor" required onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Bölümü: <input type="text" name="department" required onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Sınıfı: <input type="text" name="class" required onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Öğrenci No (Opsiyonel): <input type="text" name="studentNo" onChange={handleChange} />
              </label>
            </p>
            <button type="button" onClick={handlePrev}>
              Geri
            </button>
            <button type="button" onClick={handleNext}>
              İleri
            </button>
          </>
        )}

        {step === 4 && !formCompleted && (
          <>
            <p>
              <label>
                Ödevlerin tamamını tamamladı mı?
                <select name="completedAssignments" required onChange={handleChange} value={formData.completedAssignments || ""}>
                  <option value="">Seçiniz</option>
                  <option value="Evet">Evet</option>
                  <option value="Hayır">Hayır</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Sınıfta derse katılım sağladı mı?
                <select name="participation" required onChange={handleChange} value={formData.participation || ""}>
                  <option value="">Seçiniz</option>
                  <option value="Evet">Evet</option>
                  <option value="Hayır">Hayır</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Proje geliştirdi mi?
                <select name="developedProject" required onChange={handleChange} value={formData.developedProject || ""}>
                  <option value="">Seçiniz</option>
                  <option value="Evet">Evet</option>
                  <option value="Hayır">Hayır</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Derse tam saatinde geldi mi?
                <select name="onTime" required onChange={handleChange} value={formData.onTime || ""}>
                  <option value="">Seçiniz</option>
                  <option value="Evet">Evet</option>
                  <option value="Hayır">Hayır</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Derse odaklandı mı?
                <select name="focused" required onChange={handleChange} value={formData.focused || ""}>
                  <option value="">Seçiniz</option>
                  <option value="Evet">Evet</option>
                  <option value="Hayır">Hayır</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Sertifika almayı hak ediyor mu?
                <select name="certification" required onChange={handleChange} value={formData.certification || ""}>
                  <option value="">Seçiniz</option>
                  <option value="Evet">Evet</option>
                  <option value="Hayır">Hayır</option>
                </select>
              </label>
            </p>

            <button type="button" onClick={handlePrev}>
              Geri
            </button>
            <button type="submit">Kaydet</button>
          </>
        )}

        {step === 5 && (
          <>
            <h2>{certificateStatus}</h2>
            <h3>Öğrenci Bilgileri</h3>
            <ul>
              <li>Adı Soyadı: {formData.name} {formData.surname}</li>
              <li>Doğum Tarihi: {formData.birthDate}</li>
              <li>Cinsiyet: {formData.gender}</li>
              <li>TC No: {formData.tcno}</li>
              <li>Ön Sınav Puanı: {formData.preExamScore}</li>
              <li>Mülakat Notları: {formData.interviewNotes}</li>
              <li>Mülakat Puanı: {formData.interviewScore}</li>
              <li>Dönem: {formData.term}</li>
              <li>Eğitmen: {formData.instructor}</li>
              <li>Bölüm: {formData.department}</li>
              <li>Sınıf: {formData.class}</li>
              <li>Ödevleri Tamamladı mı: {formData.completedAssignments}</li>
              <li>Sınıfta Derse Katıldı mı: {formData.participation}</li>
              <li>Proje Geliştirdi mi: {formData.developedProject}</li>
              <li>Derste Odaklandı mı: {formData.focused}</li>
            </ul>
            
            <button type="button" onClick={handleReset}>
              Yeni Kayıt
            </button>
          </>
        )}
      </form>
    </>
  );
}
