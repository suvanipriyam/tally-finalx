import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'

import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'

const developmentPlatform = () => {
  return (
    <div>
      <Navbar />

      <section
        className="page-title parallaxie"
        data-bg-img="/images/08.jpg"
        style={{
          backgroundImage: 'url("/images/08.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 120.63px',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>About Tally Erp9 Software</h1>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Tally Erp9 Softwarex
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <Marquee className="theme-bg marqueeData">
        <h1>
          Top Tally Solutions Dealers and Partners across New Delhi - Gurgaon -
          Noida - Faridabad - NCR | Tally Software Dealers and Solution Provides
          - Across New Delhi - NCR - Gurgaon - Noida
        </h1>
      </Marquee>

      <section className="pb-3">
        <div className="container">
          <div className="row justify-content-center flex-flow-row-reverse">
            <div className="col-md-4">
              <div className="tab-head">
                <h4 className="service-head mb-0">Tally Products</h4>
                <div
                  id="accordion"
                  className="accordion tabArea"
                  style={{
                    paddingLeft: '30px',
                    paddingRight: '30px',
                    paddingTop: '15px',
                    paddingBottom: '15px',
                  }}
                >
                  <Accordian />
                </div>
              </div>
              <div className="tab-head">
                <h4 className="service-head mb-0">Tally Products</h4>
                <div id="accordion" className="accordion tabArea">
                  {/*<div class="card-header1">*/}
                  {/*  <h6 class="mb-0">*/}
                  {/*    <Link="tally-erp9-software-quotation.php" class="collapsed">Our Quotation</a>*/}
                  {/*  </h6>*/}
                  {/*</div>*/}
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/customization/dedicated"
                        className="collapsed"
                      >
                        Customization Services
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/training/site"
                        className="collapsed"
                      >
                        Tally Corporate Training
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/netsubscription"
                        className="collapsed"
                      >
                        Tally.Net Services
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/advisoryservices"
                        className="collapsed"
                      >
                        Business Advisory Services
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link href="/services/supportcover" className="collapsed">
                        {' '}
                        Annual Support Cover
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/syncimplementaion"
                        className="collapsed"
                      >
                        {' '}
                        Data Synchronization
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/download/instantsupport"
                        className="collapsed"
                      >
                        Priority Tally Support
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="tab-head">
                <h4 className="service-head mb-0">Useful Links</h4>
                <div id="accordion" className="accordion tabArea">
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/solutions/addonmodules"
                        className="collapsed"
                      >
                        Tally Academy Solution
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/solutions/corpmanangement"
                        className="collapsed"
                      >
                        Corporate Management
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/solutions/verticalsolutions"
                        className="collapsed"
                      >
                        Vertical Solutions for Tally{' '}
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/solutions/tallyintegration"
                        className="collapsed"
                      >
                        Tally Integration
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link href="/company/clientage" className="collapsed">
                        Our Esteemed Clientage
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/download/instantsupport"
                        className="collapsed"
                      >
                        Instant Support
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="tab-head">
                <h4 className="service-head mb-0">Ask for a service</h4>
                <div
                  className="tabArea"
                  style={{
                    paddingTop: '50px',
                    paddingRight: '15px',
                    paddingBottom: '50px',
                  }}
                >
                  <FormComponent />
                </div>
              </div>{' '}
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="section-title">
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>
                          Tally Developer - The Development Platform of
                          Tally.ERP 9
                        </p>
                      </div>
                      <div className="p-3">
                        <p>
                          The language used to build Tally.ERP 9 is called TDL -
                          Tally Definition Language, briefly touched upon in
                          Internal Architecture &amp; Design.
                        </p>

                        <p>
                          As a Tally Service Partner, a Tally Integrator, an
                          internal IT 'shop' at a customer location or a free
                          lancer developing extensions to Tally.ERP 9, we make
                          available Tally.Developer 9, an Integrated Development
                          Environment (IDE) along with the full TDL source code.
                        </p>

                        <p>
                          TDL has been designed to provide the following
                          features:
                        </p>

                        <p>
                          <strong>Rapid Development</strong>
                          <br />
                          TDL is a language based on definitions. A definition
                          language provides the users with 'Definitions' that
                          can be used to specify the task to be performed. It is
                          possible to reuse the existing definitions and deploy
                          applications quickly. This is a language meant for
                          rapid development. It is possible to develop complex
                          reports within minutes. User can extend the default
                          functionalities of the product by writing only a few
                          lines of code.
                        </p>

                        <p>
                          <strong>
                            Action Driven Language with Procedural Capabilities
                          </strong>
                          <br />
                          TDL is an Action Driven language where the programmer
                          can only control as to what happens when a particular
                          event takes place. The action thus triggered can
                          either be a platform defined action or an Action
                          created by TDL programmer using User Defined
                          Functions. The fundamental aspects of conditional
                          evaluation and looping have been introduced into the
                          language. The non-procedural elements are largely
                          towards presentation layers and data gathering. The
                          procedural elements can be used for flow control,
                          computation and object data manipulation.
                        </p>

                        <p>
                          <strong>Multiple Output Capability</strong>
                          <br />
                          Using the same language it is possible to output to
                          multiple output devices and formats .Whenever an
                          output is generated this can be displayed on the
                          screen, printed ,transferred to a file in particular
                          format, mailed or transferred to a webpage using Http
                          protocol.
                        </p>

                        <p>
                          <strong>Data Management Capability</strong>
                          <br />
                          Tally follows a hierarchical object oriented data
                          structure. TDL provides the capability of creating and
                          manipulating these objects with ease. Apart from the
                          predefined objects user can also store and manipulate
                          data as required by him.
                        </p>

                        <p>
                          <strong>Integration Capability</strong>
                          <br />
                          To meet the challenges of business environment it
                          becomes absolutely mandatory to share information
                          seamlessly across applications. Integration becomes a
                          crucial factor in avoiding the duplication of data
                          entry. The available Tally API's ODBC, XML and DLL
                          allow integration between
                        </p>

                        <ul>
                          <li> Tally to Tally using Synchronisation</li>

                          <li>
                            Tally to External Application and vice versa using
                            the Interfaces Available
                          </li>

                          <li>Tally to Web Service using HTTP Interface</li>

                          <li>Tally to External Applications using Export</li>

                          <li>
                            Data from External Application in XML using Import
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default developmentPlatform
