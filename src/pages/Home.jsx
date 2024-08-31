import React from "react";
import AuroraBackground from "../components/ui/aurora-background";
import WavyBackground from "../components/ui/wavy-background";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation/Navigation";
import peacockImage from "../assets/images/peacock_main.png";
import ImgPeacockCall from "../assets/images/peacock-call.png";
import {
  iconCompany,
  iconDatabase,
  iconInternet,
  iconPhone,
  iconCheck,
  iconUser,
  iconConnect,
  iconSearch,
  iconMail,
  iconAdd,
  iconSheet,
  iconWeb,
  iconFilter,
  iconData,
  iconBadge,
} from "../assets/icons";
import IconCard from "../components/Card/IconCard";
import ArticleCard from "../components/Card/ArticleCard";

const home = () => {
  return (
    <div>
      <Navigation />
      <AuroraBackground>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center">
            <img
              src={peacockImage}
              alt="peacock in a business suit with approved thumbs up"
              className="max-w-full lg:max-w-md mt-4 lg:mt-0"
            />
            <div className="text-center lg:text-left mt-6 lg:mt-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950">
                Get the
                <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  {" "}
                  Sales Intelligence
                </span>
                🦚 made for
                <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                  {" "}
                  HubSpot
                </span>
                🚀
              </h1>
              <p className="py-4 md:py-6 text-lg md:text-xl lg:text-2xl">
                Add contacts and companies from anywhere: LinkedIn, the web, ...
                and even HubSpot itself.
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 mt-4">
                Save Time, Sell More.
              </h1>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
              >
                Discover our offers
              </button>
            </div>
          </div>
        </div>
      </AuroraBackground>
      <div
        className="flex flex-col items-center justify-center text-center py-10"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <h1 className="text-5xl font-bold mb-6">Discover our key features</h1>
        <p className="max-w-2xl mb-10 text-lg">
          Our clients save an average of 8 hours per month by connecting Charik
          to HubSpot, thanks to our advanced features, which are often unique at
          this level of integration with your favorite CRM.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl">

          <IconCard
            image={iconConnect}
            title="Made for HubSpot"
            text="The finest integration experience you'll encounter with HubSpot"
            backgroundColor="bg-base-100"
          />
          <IconCard
            image={iconConnect}
            title="Made for HubSpot"
            text="The finest integration experience you'll encounter with HubSpot"
            backgroundColor="bg-base-100"
          />
          <IconCard
            image={iconCompany}
            title="Search Companies"
            text="Discover companies based on a variety of criteria."
            backgroundColor="bg-base-100"
          />
          <IconCard
            image={iconAdd}
            title="Add Companies"
            text="Segment your HubSpot database with dedicated fields."
            backgroundColor="bg-base-100"
          />
          <IconCard
            image={iconDatabase}
            title="Segment your CRMS"
            text="Segment your HubSpot database with dedicated fields."
            backgroundColor="bg-base-100"
          />
          <IconCard
            image={iconInternet}
            title="Domain Finder"
            text="HubSpot requires a domain name. We'll find it for you."
            backgroundColor="bg-base-100"
          />
          <IconCard
            image={iconSearch}
            title="Search Contacts"
            text="Generate a contact list directly from the company profile."
            backgroundColor="bg-base-100"
          />
          <IconCard
            image={iconBadge}
            title="Add Contacts"
            text="Toss your keyboards aside, add a contact with just one click."
            backgroundColor="bg-base-100"
          />
          <IconCard
            image={iconMail}
            title="Email Finder"
            text="Uncover the professional email addresses of your contacts."
            backgroundColor="bg-base-100"
          />
          <IconCard
            image={iconPhone}
            title="Phone Finder"
            text="Link your favorite data provider: Kaspr, Apollo, ..."
            backgroundColor="bg-base-100"
          />
          <IconCard
            image={iconWeb}
            title="LinkedIn Contact"
            text="Add a contact from LinkedIn with just one click."
            backgroundColor="bg-base-100"
          />
          <IconCard
            image={iconCheck}
            title="No Duplicates"
            text="Finally, an app that doesn't add duplicates."
            backgroundColor="bg-base-100"
          />
          <IconCard
            image={iconUser}
            title="Gender Reveal"
            text="Feeling your greetings lack spark? Allow us to assist."
            backgroundColor="bg-base-100"
          />
          <IconCard
            image={iconData}
            title="Get Financial Data"
            text="Corporate financial information, directly within HubSpot."
            backgroundColor="bg-base-100"
          />
          <IconCard
            image={iconSheet}
            title="Balance Sheets"
            text="Access and annotate the latest 3 financial statements of companies (France only)"
            backgroundColor="bg-base-100"
          />
          <IconCard
            image={iconFilter}
            title="Finances Filters"
            text="Refine your search by focusing on revenue or profit growth (French companies)"
            backgroundColor="bg-base-100"
          />
        </div>
      </div>
      <WavyBackground>
        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container px-6 py-12 mx-auto">
            <div className="grid items-center gap-4 xl:grid-cols-5">
              <div className="p-6 xl:col-span-3">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-md glass">
                      <p>
                        "Charik is an essential tool for any company looking to
                        leverage HubSpot to its full potential"
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <div className="avatar">
                          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                            <img src="https://www.charik.fr/hs-fs/hubfs/antoine-charpin-hubspot-partner.jpeg?width=400&name=antoine-charpin-hubspot-partner.jpeg" />
                          </div>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">
                            Antonie Charpin
                          </p>
                          <p className="text-sm dark:text-gray-600">
                            CEO, Digita Web
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-md glass">
                      <p>
                        "Charik enabled us to quickly enter a new market by
                        integrating new contacts very rapidly."
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <div className="avatar">
                          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                            <img src="https://www.charik.fr/hs-fs/hubfs/toufik-numoo-partner-hubspot.jpeg?width=408&name=toufik-numoo-partner-hubspot.jpeg" />
                          </div>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">Toufik Tellai</p>
                          <p className="text-sm dark:text-gray-600">
                            CEO, Numoo Agency
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded shadow-md glass">
                      <p className="text-lg">
                        "The financial features integrated directly into HubSpot
                        allow for a quick analysis."
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <div className="avatar">
                          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                            <img src="https://www.charik.fr/hs-fs/hubfs/soukanda-vc-invest.jpeg?width=400&name=soukanda-vc-invest.jpeg" />
                          </div>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">
                            Soukanda Bentaleb
                          </p>
                          <p className="text-sm dark:text-gray-600">
                            Directrice d'investissement | Private Equity
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                <h2 className="text-4xl font-bold">Need a demo?</h2>

                <div class="max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
                  <div class="rounded-[calc(1.5rem-1px)] p-8 bg-white dark:bg-gray-900">
                    <div class="mt-3 flex gap-4 items-center">
                      <img
                        class="h-12 w-12 rounded-full"
                        src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg"
                        alt=""
                      />
                      <div>
                        <h3 class="text-lg font-medium text-gray-700 dark:text-white">
                          Have you met Jimmy?
                        </h3>
                        <button
                          type="button"
                          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          See his agenda
                          <svg
                            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </WavyBackground>
      <div
        className="flex flex-col items-center py-10 "
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <h1 className="font-bold text-3xl mb-6">Sales Intelligence Blog</h1>
        <p className="max-w-2xl mb-10 text-lg">
          Dive into the future of selling with our blog on Sales Intelligence –
          where data meets strategy.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ArticleCard
            imageSrc={ImgPeacockCall}
            title="Comprendre le Social Selling Index (SSI) de LinkedIn"
            date="28 August 2024"
            badgeText="Prospection"
            readTime="3 min read"
          />
          <ArticleCard
            imageSrc={ImgPeacockCall}
            title="Optimisation de la Prospection de Leads"
            date="25 August 2024"
            badgeText="Prospection"
            readTime="5 min read"
          />
          <ArticleCard
            imageSrc={ImgPeacockCall}
            title="Trust Journey: The new frontier in sales process"
            date="5 June 2024"
            badgeText="Prospection"
            readTime="6 min read"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default home;
