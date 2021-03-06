const Form = () => {
  return (
    <form>
      <h3 className="form-title">
      İzlemeye hazır mısınız? Üyeliğinizi oluşturmak veya yeniden başlatmak için e-posta adresinizi girin.
      </h3>
      <div className="form-main">
        <label className="label-email-wrapper">
          <label className="label-email" htmlFor="email">
            Email address
          </label>
          <input className="input-email" type="email" name="email" id="email" />
        </label>
        <button className="red-btn signup-btn">
          <span>Başla</span>
          <span className="chevron-right-arrow">
            <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
              <desc>şerit</desc>
              <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"></path>
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
};

export default Form;
