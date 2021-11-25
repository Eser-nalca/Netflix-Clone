import Form from '../subComponents/Form';

const FAQ = () => {
  const handleClick = (e) => {
    e.target.classList.toggle('active');


    let panel = e.target.nextElementSibling;

    if (panel.style.display === 'block') {
      panel.style.display = 'none';
      panel.style.maxHeight = null;
      e.target.style.marginBottom = '8px';
    } else {
      panel.style.display = 'block';
      panel.style.maxHeight = panel.scrollHeight + 'px';
      panel.style.marginBottom = '8px';
      e.target.style.marginBottom = '1px';
    }
  };

  return (
    <div className="faq">
      <h1 className="faq-title">Sıkça Sorulan Sorular</h1>
      <div className="qna">
        <button onClick={(e) => handleClick(e)} className="accordion">
             Netflix Ne?
        </button>
        <div className="panel">
          <p>
            Netflix, çok çeşitli içerik sunan bir akış hizmetidir.
            ödüllü TV şovları, filmler, anime, belgeseller ve daha fazlası
            binlerce internete bağlı cihaz.
            <br />
            <br />
            Dilediğiniz kadar, istediğiniz zaman, reklamsız izleyebilirsiniz.
            tek reklam – tümü tek bir düşük aylık fiyat için. her zaman bir şeyler vardır
            keşfedilecek yeni şeyler ve her hafta yeni TV şovları ve filmler ekleniyor!
          </p>
        </div>
        <button onClick={(e) => handleClick(e)} className="accordion">
             Netflix'in maliyeti nedir?
        </button>
        <div className="panel">
          <p>
           Netflix'i akıllı telefonunuzda, tabletinizde, Akıllı TV'nizde, dizüstü bilgisayarınızda veya
           akış cihazı, tümü tek bir sabit aylık ücret karşılığında.
          </p>
        </div>
        <button onClick={(e) => handleClick(e)} className="accordion">
            Nereden izleyebilirim?
        </button>
        <div className="panel">
          <p>
            Her yerde, her zaman, sınırsız sayıda cihazda izleyin. Kayıt olmak
            Web'de anında izlemek için Netflix hesabınızla netflix.com kişisel bilgisayarınızdan veya internete bağlı herhangi bir
            Akıllı TV'ler de dahil olmak üzere Netflix uygulamasını sunan cihaz,
            akıllı telefonlar, tabletler, medya oynatıcılar ve oyun konsolları.
            <br />
            <br />
            Ayrıca en sevdiğiniz programları iOS, Android veya
            Windows 10 uygulaması. Hareket halindeyken izlemek için indirmeleri kullanın ve
            internet bağlantısı olmadan. Netflix'i her yere yanınızda götürün.
          </p>
        </div>
        <button onClick={(e) => handleClick(e)} className="accordion">
            Nasıl iptal edebilirim?
        </button>
        <div className="panel">
          <p>
            Netflix esnektir. Can sıkıcı sözleşmeler yok ve hayır
            taahhütler. Hesabınızı çevrimiçi olarak ikiye kolayca iptal edebilirsiniz
            tıklamalar İptal ücreti yoktur - hesabınızı başlatın veya durdurun
            istediğin zaman.
          </p>
        </div>
        <button onClick={(e) => handleClick(e)} className="accordion">
            Netflix'te ne izleyebilirim? 
        </button>
        <div className="panel">
          <p>
            Netflix'in uzun metrajlı filmler, belgeseller ve TV'den oluşan kapsamlı bir kitaplığı vardır.
            şovlar, anime, ödüllü Netflix orijinalleri ve daha fazlası. olarak izle
            istediğiniz kadar, istediğiniz zaman.
          </p>
        </div>
        <button onClick={(e) => handleClick(e)} className="accordion">
         Netflix çocuklar için iyi mi?
        </button>
        <div className="panel">
          <p>
            Netflix Kids deneyimi, üyeliğinize dahildir.
            çocuklar aile dostu TV şovlarının ve filmlerin keyfini çıkarırken ebeveynler kontrol eder
            kendi uzayında.
            <br />
            <br />
             Çocuk profilleri, size izin veren PIN korumalı ebeveyn kontrolleriyle birlikte gelir.
             çocukların izleyebileceği ve engelleyebileceği içeriğin yetişkinlik derecesini sınırlayın
             çocukların görmesini istemediğiniz belirli başlıklar.
          </p>
        </div>
      </div>
      <div className="form-wrapper">
        <Form />
      </div>
    </div>
  );
};

export default FAQ;
