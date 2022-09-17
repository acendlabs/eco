/* eslint-disable jsx-a11y/anchor-is-valid */

import trash from "../images/trash.png";
import organicwaste from "../images/organic waste.png";
import givingwaste from "../images/givingwaste.png";
import bitcoinhunting from "../images/BitcoinHunting.png";
import polygon from "../images/polygon.png";
import group from "../images/Group.png";
import logolight from "../images/logolight.png";
import Footer from "../components/layout/Footer";

import "./Home.css";

function Home() {
  return (
    <div className="App">
      <body className="overflow-x-hidden">
        <section className="rewardtop  justify-center pb-10">
          <div className="top text-center">
            <h1 className="pt-10 text-2xl font-semibold sm:text-3xl md:text-4xl md:font-bold ">
              Get Rewarded for your Trash{" "}
            </h1>
            <p className="font-light  px-5 text-sm sm:text-lg sm:text-center md:text-xl lg:w-3/5  lg:container ">
              We are using technology to control the disposal of plastic waste,
              giving value to the plastic waste by incentives given to disposers
              and collectors.
            </p>
            <button className="mt-4 w-24  p-1 h-7 text-xs sm:text-lg  sm:w-35 sm:h-8 md:text-xl md:w-40 md:h-10 rounded ">
              Get Started
            </button>
          </div>
          <div className="left px-5 sm:w-[60%] mt-10 md:ml-5 lg:ml-10">
            <h3 className="font-light text-sm mt-64 sm:text-lg md:text-xl sm:mt-0">
              We got to our solution through a survey we carried online using a
              google survey form. We realized that 98% of the people would like
              to earn for disposing of their plastic waste. We also interviewed
              some recyclers, who complained of losing money due to the upfront
              payment charged before the service by scavengers.
            </h3>
          </div>
          <div className="absolute w-48 top-80 left-[27.5%] sm:w-52 sm:left-[67%] md:left-[60%] md:top-56 md:w-72 lg:w-80 lg:top-32 lg:left-[67.5%] ">
            <img src={trash} alt="trash" />
          </div>
        </section>
        <section className="rewardbottom p-5 md:p-10 ">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="left flex-col">
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
                Collcet plastic wastes from disposers and Remit to Recyclers
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
          <div className="bottom md:px-32 lg:px-80 mt-10">
            <h1>
              Collcet plastic wastes from disposers and Remit to Recyclers
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
        <section className="technology p-5 md:p-10">
          <div className="bg">
            <img
              className=" w-[20%] h-auto absolute  left-[50%] -translate-x-2/4 opacity-30"
              src={logolight}
              alt=""
            />
            <h1 className="text-lg font-medium sm:text-xl md:text-2xl text-center md:font-bold">
              Why use a Blockchain/Decentralized Ledger Technology?
            </h1>
            <div className="group1 flex justify-between flex-col md:flex-row md:gap-16 lg:gap-36">
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
            <h3 className="mt-10 font-normal md:font-medium text-lg">
              What Chain is AcendEco Built On and Why
            </h3>
            <div className="group2 flex">
              <div className="left">
                <img
                  className="ml-4 h-10 sm:h-16 sm:ml-0 md:ml-5 lg:ml-10"
                  src={polygon}
                  alt="polygon logo"
                />
                <h2 className="font-normal text-sm md:font-semibold md:text-xl">
                  POLYGON CHAIN
                </h2>
              </div>
              <div className="right text-sm sm:mt-3 md:text-lg ml-4">
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
        <section className="about p-5 md:p-10">
          <h2 className="text-center text-lg font-medium sm:font-semibold sm:text-xl md:text-2xl md:font-bold">
            About AcendEco
          </h2>
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
