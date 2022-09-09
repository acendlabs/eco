/* eslint-disable jsx-a11y/anchor-is-valid */

import trash from "../images/trash.png";
import organicwaste from "../images/organic waste.png";
import givingwaste from "../images/givingwaste.png";
import bitcoinhunting from "../images/BitcoinHunting.png";
import polygon from "../images/polygon.png";
import group from "../images/Group.png";
import logolight from "../images/logolight.png";
import Footer from "../components/footer";

import "./home.css";
function Home() {
  return (
    <div className="App">
      <body>
        <section className="rewardtop">
          <div className="top">
            <h1>Get Rewarded for your Trash </h1>
            <p>
              We are using technology to control the disposal of plastic waste,
              giving value <br /> to the plastic waste by incentives given to
              disposers and collectors.
            </p>
            <button>Get Started</button>
          </div>
          <div className="left">
            <h3>
              We got to our solution through a survey we carried online using a
              google survey form. We realized that 98% of the people would like
              to earn for disposing of their plastic waste. We also interviewed
              some recyclers, who complained of losing money due to the upfront
              payment charged before the service by scavengers.
            </h3>
          </div>
          <div className="right">
            <img src={trash} alt="" />
          </div>
        </section>
        <section className="rewardbottom">
          <div className="leftright">
            <div className="left">
              <h1>Dispose plastic waste with collectors near you </h1>
              <div className="imggroup1">
                <img src={organicwaste} alt="organic waste" />
                <p>
                  Disposers are the owners of the plastic waste <br /> <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="right">
              <h1>
                Collcet plastic wastes from disposers and Remitte to Recyclers
              </h1>
              <div className="imggroup2">
                <img src={givingwaste} alt="givingwaste" />
                <p>
                  Collectors collect the plastic waste from the disposers and
                  take them to the recyclers. <br /> <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <h1>
              Collcet plastic wastes from disposers and Remitte to Recyclers
            </h1>
            <div className="imggroup3">
              <img src={bitcoinhunting} alt="" />
              <p>
                Recyclers are the established companies that recycle this waste.{" "}
                <br /> <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>
        <section className="technology">
          <div className="bg">
            <img className="bgimg" src={logolight} alt="" />
            <h1>Why use a Blockchain/Decentralized Ledger Technology?</h1>
            <div className="group1">
              <p>
                The ability to store information on the chain. Blockchain uses
                cryptography to make sure records cannot be counterfeited or
                changed. This would allow certified recycled plastic to be
                better traced and prevent instances of green washing and
                material mixing.
              </p>
              <p>
                The large data that would be involved to automatically store the
                data on the blockchain so that it will not be tampered with.
              </p>
            </div>
            <h3>What Chhain is AcendEco Built On and Why</h3>
            <div className="group2">
              <div className="left">
                <img src={polygon} alt="" />
                <h2>POLYGON CHAIN</h2>
              </div>
              <div className="right">
                <p>
                  <b>Scalability:</b> It matches our goal and scalability plans
                  in the future with its scaling solutions.
                </p>
                <p>
                  <b>Security:</b> it matches our security needs for the
                  project.
                </p>
                <p>
                  <b>Ethereum compatible:</b> It is highly acceptable, and it
                  has industry dominance, also our team is more comfortable
                  building on the chain.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="about" id="about">
          <h2>About AcendEco</h2>
          <p>
            AcendEco is a decentralized application based deployment system
            which allows for the quick onboarding of collection resources and
            the ability to derive actionable data quicker, and also enable
            payment using crypto. Solving the problem of pay before service the
            recyclers do, and giving individuals the opportunity to earn from
            their plastic waste.
          </p>
          <h3>Problem Space</h3>
          <p>
            Indiscriminate disposal, poor management and the unregulated use of
            plastic are fueling a pollution crises in Nigeria. Nigeria is the
            most populous country in Africa, and as the most populous country
            its population size has hugely impacted its plastic waste
            generation. Nigeria has emerged as a hotbed of plastic pollution. In
            2019 Voice of America placed the amount of plastic generation in
            Nigeria per year at 2.5million tonnes.
          </p>
          <h3>How It Works</h3>
          <img src={group} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </section>
        <Footer />
      </body>
    </div>
  );
}

export default Home;
