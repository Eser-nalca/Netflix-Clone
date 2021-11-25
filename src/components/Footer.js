import LangSelect from '../components/subComponents/LangSelect';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text-first">
        Soru Sormak için Ara <a href="tel:000-800-040-1843">000-800-040-1843</a>
      </p>
      <ul className="footer-links">
        <li>
          <a href="/">sss</a>
        </li>
        <li>
          <a href="/">yatırımcı ilişkileri</a>
        </li>
        <li>
          <a href="/">Mahremiyet</a>
        </li>
        <li>
          <a href="/">Hız testi</a>
        </li>
        <li>
          <a href="/">Yardım Merkezi</a>
        </li>
        <li>
          <a href="/">Meslekler</a>
        </li>
        <li>
          <a href="/">Çerez Tercihleri</a>
        </li>
        <li>
          <a href="/">Yasal uyarılar</a>
        </li>
        <li>
          <a href="/">Hesap</a>
        </li>
        <li>
          <a href="/">İzlemenin Yolları</a>
        </li>
        <li>
          <a href="/">Şirket bilgisi</a>
        </li>
        <li>
          <a href="/">Netflix Orijinalleri</a>
        </li>
        <li>
          <a href="/">Medya Merkezi</a>
        </li>
        <li>
          <a href="/">Kullanım Şartları</a>
        </li>
        <li>
          <a href="/">Bizimle iletişime geçin</a>
        </li>
      </ul>
      <div className="footer-lang-select-wrapper">
        <LangSelect />
      </div>
      <p className="footer-text-last">Netflix Turkey</p>
      <p className="footer-text-msg">
        Netflix-Cloned 
      </p>
    </footer>
  );
};

export default Footer;
