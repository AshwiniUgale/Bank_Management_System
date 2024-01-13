export const Contact = () => {
    return (
      <>
        <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                <p>We are the World Best Bank</p>
                <h1>Candid Bank Customer Care.. </h1>
                <p>
                In India, there are hundreds of banks that provide various banking services to millions of customers. Both public and private sector banks provide banking, investing, savings, money transfer, payments, loans, and a multitude of other financial services.
                </p>
                <p>Customer Care:📱1800 220 229☎️ </p>
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
                  src="./public/images/connect.jpg"
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
                src="./public/images/connect1.jpg"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
  
            <div className="hero-content">
              <p>We are here with you ..</p>
              <h1>Get Started Today</h1>
              <p>
              Customers' experiences with their banks are what gives one bank a competitive edge over another. In banking, one of the most effective means to keep consumers coming back is to provide excellent customer service. It entails thoroughly and promptly responding to customer queries and complaints, as well as dealing with customers via personal meetings, telephone, mail, and email.
              </p>
              <p>
                Email-id:📩CandidBank@yahoo.com
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
  
