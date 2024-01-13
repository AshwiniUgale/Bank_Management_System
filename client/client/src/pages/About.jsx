export const About = () => {
    return (
      <>
        <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                <p>We are the World Best Bank</p>
                <h1>Candid Bank Help You.. </h1>
                <p>
                We always aim at providing superior, proactive banking service to niche market globally, while providing cost effective and responsive services.Banking refers to a financial activity to manage and safeguard your hard-earned money.
                </p>
                <div className="btn btn-group">
                  <a href="/contact">
                    <button className="btn">connect now</button>
                  </a>
                  <a href="/services">
                    <button className="btn secondary-btn">learn more</button>
                  </a>
                </div>
              </div>
  
              {/* hero images  */}
              <div className="hero-image">
                <img
                  src="./public/images/info.jpg"
                  alt="coding together"
                  width="450"
                  height="540"
                />
              </div>
            </div>
          </section>
        </main>
  
      
  
        {/* 3rd section  */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            {/* hero images  */}
            <div className="hero-image">
              <img
                src="./public/images/about1.jpg"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
  
            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Get Started Today</h1>
              <p>
               Bank of India (SBI) a Fortune 500 company, is an Indian Multinational, Public Sector Banking and Financial services statutory body headquartered in Mumbai. The rich heritage and legacy of over 200 years, accredits SBI as the most trusted Bank by Indians through generations.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
