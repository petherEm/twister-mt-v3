import { Container } from "@/components/util/container";
import { Calendar } from "lucide-react";
import { PrintButton } from "@/components/print-button";

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date("2024-05-26");

  return (
    <>
      <Container className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden print:shadow-none">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between print:hidden">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span>05.2025</span>
            </div>
            <PrintButton />
          </div>

          <div className="px-6 py-8 md:p-10 prose prose-gray max-w-none text-black">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Privacy and Cookies Policy (hereinafter referred to as: "Policy")
            </h1>

            <div className="space-y-8">
              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-lg">
                  The Privacy and Cookies Policy set forth below defines
                  primarily the purposes and principles of storing, as well as
                  rights of access to information on Clients' devices using
                  Cookies files, through which it is possible to provide
                  services electronically by Moneytransfer.pl, which are used by
                  Clients.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
                  1. Definitions
                </h2>
                <div className="space-y-4">
                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      1. Administrator and/or Moneytransfer.pl
                    </p>
                    <p>
                      RAFAŁ ZAWISZA, conducting business activity under the
                      company name RAFAŁ ZAWISZA TWISTER with headquarters in
                      Wrocław, postal code 50-011, at ul. T. Kościuszki 27,
                      being a VAT taxpayer, having tax identification number
                      NIP: 8942376235, possessing REGON: 931982471, providing
                      Electronic Services through the Service, as well as
                      storing and gaining access to information in the equipment
                      used by the Client.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">2. Cookies</p>
                    <p>
                      Information technology data, and primarily small text
                      files, which are saved and stored on Clients' equipment,
                      through which the Client uses the Service.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">3. Service</p>
                    <p>
                      The internet service located at: https://moneytransfer.pl,
                      through which Moneytransfer.pl provides electronic
                      services, remote services through the Moneytransfer.pl
                      Information Center and stationary services at the
                      Moneytransfer.pl Customer Service Point (POK).
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">
                      4. Provision of Electronic Services
                    </p>
                    <p>
                      Performance of services provided by Moneytransfer.pl
                      without the required simultaneous presence of parties
                      (i.e., remotely), by means of transmitting data at the
                      individual request of the Client, sent and received using
                      equipment for electronic processing (including digital
                      compression), and data storage, which are sent, received
                      or transmitted entirely through a telecommunications
                      network within the meaning of the Telecommunications Law
                      Act of July 16, 2004 (Journal of Laws No. 171, item 1800,
                      as amended).
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">5. Equipment</p>
                    <p>
                      Any electronic equipment/device through which the Client
                      gains access to the Service.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-amber-200">
                    <p className="font-semibold">6. Client</p>
                    <p>
                      A person using Moneytransfer.pl services through the
                      Service or other Moneytransfer.pl services, who is a party
                      to the electronic service agreement, to which the
                      provisions of the Terms of Use of the Moneytransfer.pl
                      website posted on the Service website at
                      https://moneytransfer.pl also apply, as well as the Terms
                      of Electronic Service Provision, which is posted on the
                      Service website at: https://moneytransfer.pl and the
                      Personal Data Protection Policy, which is available at
                      https://moneytransfer.pl.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
                  2. Policy Provisions
                </h2>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                      <span className="font-semibold text-amber-800">1</span>
                    </div>
                    <div>
                      <p>
                        Moneytransfer.pl provides Electronic Services in
                        accordance with the provisions of the Terms of
                        Electronic Service Provision, which is located on the
                        Moneytransfer.pl Service website.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                      <span className="font-semibold text-amber-800">2</span>
                    </div>
                    <div>
                      <p>
                        Moneytransfer.pl acts in accordance with privacy
                        protection law and therefore makes every effort to
                        guarantee every person completing contact forms,
                        registering and logging in to the Service site that all
                        Cookies data will be properly protected. Each Service
                        Client remains anonymous, and it depends on the
                        individual decision of the Client whether and when they
                        complete an application, log in or register to use the
                        services provided by Moneytransfer.pl.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                      <span className="font-semibold text-amber-800">3</span>
                    </div>
                    <div>
                      <p>
                        Moneytransfer.pl uses Own Cookies, i.e., Cookies placed
                        in the Service by the Administrator, and External
                        Cookies, i.e., Cookies placed through the Service by the
                        Administrator's contractors.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                      <span className="font-semibold text-amber-800">4</span>
                    </div>
                    <div>
                      <p>
                        Moneytransfer.pl stores data contained in system logs,
                        i.e., data that is transmitted to the Moneytransfer.pl
                        server by the Client's equipment.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                      <span className="font-semibold text-amber-800">5</span>
                    </div>
                    <div>
                      <p>
                        The data specified in this paragraph is used by
                        Moneytransfer.pl mainly for technical purposes, while IP
                        addresses are used by Moneytransfer.pl to collect
                        statistical information.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                      <span className="font-semibold text-amber-800">6</span>
                    </div>
                    <div>
                      <p>
                        Based on collected Cookies files, data concerning
                        Clients is stored for marketing purposes within
                        Moneytransfer.pl's own framework and third parties,
                        which the Client accepts by entering the Service
                        website.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                      <span className="font-semibold text-amber-800">7</span>
                    </div>
                    <div>
                      <p>
                        The Moneytransfer.pl Service Owner reserves that the
                        Service uses technologies such as social media plugins,
                        through which social media service providers can gain
                        access to the Client's personal data. For this purpose,
                        in appropriate sections and pages of the Service, code
                        or other reference referring to a specific social media
                        service has been placed. By using the code or other
                        reference referring to a specific social media service,
                        it is clearly considered that the Client has read and
                        accepted the privacy policy of the specific social media
                        service company. These policies can be found on the
                        appropriate social media service pages.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                      <span className="font-semibold text-amber-800">8</span>
                    </div>
                    <div>
                      <p>
                        The Service is surrounded by SSL security protocol,
                        which ensures the Client has maximum protection of data
                        transmission when using the Service's services and
                        functions. At the same time, the Moneytransfer.pl
                        Service Owner informs that the Cookies files used by the
                        Service are also safe for the equipment that the Client
                        uses to access the Service.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                      <span className="font-semibold text-amber-800">9</span>
                    </div>
                    <div>
                      <p>
                        The Client has the right at any time to independently
                        change settings regarding Cookies files within their own
                        scope, indicating the method of their storage and
                        gaining access by Cookies to the Client's equipment.
                        These changes can be made using web browser settings,
                        which contains detailed information about forms of
                        handling Cookies files. The Client can also delete
                        Cookies files at any time using available functions of
                        the web browser they use. Moneytransfer.pl warns that
                        individual Client settings regarding the use of Cookies
                        files may affect the functionality of some services and
                        functions of the Service.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                      <span className="font-semibold text-amber-800">10</span>
                    </div>
                    <div>
                      <p>
                        Moneytransfer.pl uses session Cookies files in the
                        Service, i.e., files that are stored on the Client's
                        equipment until the end of a specific web browser
                        session of the Client, after which they are
                        automatically deleted from the Client's equipment; and
                        persistent ones, i.e., Cookies files that are stored on
                        the Client's equipment until they are deleted by the
                        Client. Both types of Cookies files used by
                        Moneytransfer.pl do not allow downloading personal data
                        or confidential data from the Client's equipment.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                      <span className="font-semibold text-amber-800">11</span>
                    </div>
                    <div>
                      <div>
                        <p className="mb-2">
                          Moneytransfer.pl uses own Cookies files for the
                          following purposes:
                        </p>
                        <ul className="list-disc pl-8 space-y-2">
                          <li className="text-gray-800">
                            ensuring security and required functionality and
                            proper operation of all processes and available
                            services of the Service website;
                          </li>
                          <li className="text-gray-800">
                            Service configuration to adapt Service pages to
                            individual Client preferences, as well as optimal
                            operation of Service websites, including
                            identification of the type of equipment used by the
                            Client and determining their location;
                          </li>
                          <li className="text-gray-800">
                            research and all kinds of analyses, including
                            anonymous statistics, conducted to learn about and
                            optimize processes that Service Clients use when
                            using Service websites, as well as providing
                            advertising services, including advertising services
                            tailored to Client preferences.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                      <span className="font-semibold text-amber-800">12</span>
                    </div>
                    <div>
                      <div>
                        <p className="mb-2">
                          Moneytransfer.pl uses external Cookies files for the
                          following purposes:
                        </p>
                        <ul className="list-disc pl-8 space-y-2">
                          <li className="text-gray-800">
                            providing Clients with multimedia content on Service
                            pages, previously downloaded from external services
                            belonging to entities other than Moneytransfer.pl;
                          </li>
                          <li className="text-gray-800">
                            acquiring and storing anonymous statistical data
                            through analytical programs;
                          </li>
                          <li className="text-gray-800">
                            Service cooperation with social media services for
                            logging into them;
                          </li>
                          <li className="text-gray-800">Email marketing.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                      <span className="font-semibold text-amber-800">13</span>
                    </div>
                    <div>
                      <p>
                        An integral part of this Policy is the following
                        document: Personal Data Protection Policy, posted on the
                        service website at: https://Moneytransfer.pl
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-1">
                      <span className="font-semibold text-amber-800">14</span>
                    </div>
                    <div>
                      <p>
                        Moneytransfer.pl will inform about any changes in the
                        provisions of this Policy each time by posting its new
                        version in an updated version on the Service website.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-600">
              <p>
                © {new Date().getFullYear()} Twister Money Transfers. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
