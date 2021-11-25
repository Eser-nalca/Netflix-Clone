import NetflixLogo from '../assets/logo.png';
import Form from './subComponents/Form';
import LangSelect from './subComponents/LangSelect';

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <img className="netflix-logo" src={NetflixLogo} alt="Netflix Logo" />
        <div>
          <LangSelect />
          <a href="/" className="red-btn signin-btn">
            Giriş
          </a>
        </div>
      </header>
      <div className="showcase-wrapper">
        <div className="showcase">
          <h1 className="showcase-title">
           Sınırsız film, TV şovu ve daha fazlası.
          </h1>
          <h2 className="showcase-sub-title">
           Her yerde izleyin. İstediğiniz zaman iptal edin.
          </h2>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Header;
