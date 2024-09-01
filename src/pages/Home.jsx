import React from "react";
import AuroraBackground from "../components/ui/aurora-background";
import WavyBackground from "../components/ui/wavy-background";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation/Navigation";
import {
  imgPeacockBoss,
  imgPeacockCall,
  imgPeacockChat,
  imgPeacockMain,
} from "../assets/images";
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
import { IconCard, ArticleCard, GlassCard } from "../components/Card";

const home = () => {
  return (
    <div className="bg-base-200">
      <Navigation />
      <AuroraBackground>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex flex-col lg:flex-row-reverse items-center">
            <img
              src={imgPeacockMain}
              alt="peacock in a business suit with approved thumbs up"
              className="w-full max-w-[120px] sm:max-w-[150px] md:max-w-[150px] lg:max-w-[200px] xl:max-w-md mt-4 lg:mt-0"
            />

            <div className="text-center sm:text-sm md:text-sm lg:text-left mt-6 lg:mt-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950">
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
              <p className="py-2 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl lg:text-2xl">
                Add contacts and companies from anywhere: LinkedIn, the web, ...
                and even HubSpot itself.
              </p>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mt-4">
                Save Time, Sell More.
              </h1>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm sm:text-base md:text-lg px-5 py-2.5 text-center mt-4"
              >
                Discover our offers
              </button>
            </div>
          </div>
        </div>
      </AuroraBackground>

      <div className="flex flex-col items-center justify-center text-center py-10 bg-gradient-to-r from-[#a6e1ee] to-[#abc3d9] rounded-t-[150px] sm:rounded-t-[200px] md:rounded-t-[300px] lg:rounded-t-[500px]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Discover our key features
          </h1>
          <div className="w-72 h-2 mx-auto mb-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
          <p className="max-w-2xl mx-auto mb-10 text-lg sm:text-lg md:text-lg lg:text-2xl">
            Our clients save an average of 8 hours per month by connecting
            Charik to HubSpot, thanks to our advanced features, which are often
            unique at this level of integration with your favorite CRM.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
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
              title="Segment your CRMs"
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
              backgroundColor="bg-base-200"
            />
            <IconCard
              image={iconSheet}
              title="Balance Sheets"
              text="Access and annotate the latest 3 financial statements of companies (France only)"
              backgroundColor="bg-base-200"
            />
            <IconCard
              image={iconFilter}
              title="Finances Filters"
              text="Refine your search by focusing on revenue or profit growth (French companies)"
              backgroundColor="bg-base-200"
            />
          </div>
        </div>
      </div>

      <WavyBackground>
        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container px-6 py-12 mx-auto">
            <div className="grid items-center gap-4 xl:grid-cols-5">
              <div className="p-6 xl:col-span-3">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid content-center gap-4">
                    <GlassCard
                      text='"Charik is an essential tool for any company looking to leverage HubSpot to its full potential"'
                      imageSrc="https://www.charik.fr/hs-fs/hubfs/antoine-charpin-hubspot-partner.jpeg?width=400&name=antoine-charpin-hubspot-partner.jpeg"
                      name="Antonie Charpin"
                      title="CEO, Digita Web"
                    />
                  </div>
                  <div className="grid content-center gap-4">
                    <GlassCard
                      text='"Charik enabled us to quickly enter a new market by integrating new contacts very rapidly."'
                      imageSrc="https://www.charik.fr/hs-fs/hubfs/toufik-numoo-partner-hubspot.jpeg?width=408&name=toufik-numoo-partner-hubspot.jpeg"
                      name="Toufik Tellai"
                      title="CEO, Numoo Agency"
                    />
                    <GlassCard
                      text='"The financial features integrated directly into HubSpot allow for a quick analysis."'
                      imageSrc="https://www.charik.fr/hs-fs/hubfs/soukanda-vc-invest.jpeg?width=400&name=soukanda-vc-invest.jpeg"
                      name="Soukanda Bentaleb"
                      title="Directrice d'investissement | Private Equity"
                    />
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
                        src="https://media.licdn.com/dms/image/v2/D4E03AQGNyKzSSZsk-w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715874243174?e=1730332800&v=beta&t=lKMAzJM7f9T5CWC9XF4zwuhagUWSsnqhcFGPRo-Nnvg"
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
        <div className="flex flex-col items-center justify-center text-center my-12">
          <p className="text-xl text-gray-700 mb-2 font-bold ">
            The Art of Smart Selling
          </p>

          <h1 className="font-bold text-4xl mb-4 text-blue-950">
            Sales Intelligence Blog
          </h1>

          <p className="max-w-3xl text-lg  text-blue-950">
            Dive into the future of selling with our blog on Sales Intelligence
            – where data meets strategy.
          </p>
        </div>

        <div className="w-72 h-2 mx-auto mb-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ArticleCard
            imageSrc={imgPeacockCall}
            title="Comprendre le Social Selling Index (SSI) de LinkedIn"
            date="28 August 2024"
            badgeText="Prospection"
            readTime="3 min read"
          />
          <ArticleCard
            imageSrc={imgPeacockBoss}
            title="Optimisation de la Prospection de Leads"
            date="25 August 2024"
            badgeText="Prospection"
            readTime="5 min read"
          />
          <ArticleCard
            imageSrc={imgPeacockChat}
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
