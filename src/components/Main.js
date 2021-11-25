import AnimationCard from './subComponents/AnimationCard';
import FAQ from './subComponents/FAQ';
import tv from '../assets/tv.png';
import mobile from '../assets/mobile.jpg';
import devicePile from '../assets/device-pile-in.png';
import child from '../assets/children.png';
import videoTv from '../assets/video-tv-in-0819.m4v';
import videoDevicePile from '../assets/video-devices-in.m4v';
import downloadIcon from '../assets/download-icon.gif';

const Main = () => {
  return (
    <div className="main-content">
      <section className="televizyonda eğlenme bölümü">
        <AnimationCard
          title="TV'nizde keyfini çıkarın."
          subtitle="Akıllı TV'lerde, PlayStation'da, Xbox'ta, Chromecast'te, Apple TV'de, Blu-ray oynatıcılarda ve daha fazlasında izleyin."
          image={tv}
          imageAlt="televizyon"
          videoTv={videoTv}
        />
      </section>
      <section className="download-your-shows-section">
        <AnimationCard
          title="Çevrimdışı izlemek için şovlarınızı indirin."
          subtitle="Favorilerinizi kolayca kaydedin ve her zaman izleyecek bir şeyiniz olsun."
          image={mobile}
          imageAlt="mobil"
          downloadIcon={downloadIcon}
        />
      </section>
      <section className="watch-everywhere-section">
        <AnimationCard
          title="Her yerde izleyin."
          subtitle="Telefonunuzda, tabletinizde, dizüstü bilgisayarınızda ve TV'nizde sınırsız film ve TV programı izleyin."
          image={devicePile}
          imageAlt="cihaz yığını"
          videoDevicePile={videoDevicePile}
        />
      </section>
      <section className="children-section">
        <AnimationCard
          title="Çocuklar için profiller oluşturun."
          subtitle="Üyeliğinizle ücretsiz olarak onlar için yapılmış bir alanda çocukları en sevdikleri karakterlerle maceralara gönderin."
          image={child}
          imageAlt="çocuklar"
        />
      </section>
      <section className="faq-section">
        <FAQ />
      </section>
    </div>
  );
};

export default Main;
