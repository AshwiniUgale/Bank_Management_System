export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World Best Bank</p>
              <h1>Welcome to Candid Bank</h1>
              <p>
              💴Banks are financial institutions authorized to receive deposits and provide credit. Other functions of banks may include financial services like wealth management safe deposit boxes, and currency exchanges. There are several types of banks that are designated to perform all of the above-mentioned functions.💶
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
                src="./public/images/bank.jpg"
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
              src="./public/images/info.jpg"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              💵Ready to take the first step towards a more efficient and secure
              Banking System Contact us today for a free consultation and
              let's discuss how Candid Bank can help you thrive in
              the digital age.💷
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
              <div>
              </div>
             
            </div>
          </div>
        </div>

        <iframe
        
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.26131732789!2d73.91411937534653!3d18.56225398253939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1693563525384!5m2!1sen!2sin"
        width="100%"
        height="450"
        title="my home place"
        allowfullscreen=""
       loading="lazy"
         referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <p>Copyright ©2023 All rights reserved | We Are Here to Help You💁 By Candid Bank🏦</p>
      </section>
    </>
  );
};
