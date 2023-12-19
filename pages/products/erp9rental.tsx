import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'

import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'

const erp9rental = () => {
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
          backgroundPosition: 'center 111.51px',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Glow IPS Tally ERP.9 Rental</h1>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Glow IPS Tally ERP.9 Rental
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
                      <a href="Tally-Solutions-Unit.php" className="collapsed">
                        Tally Academy Solution
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Corporate-Management-Services-India-International.php"
                        className="collapsed"
                      >
                        Corporate Management
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Tally-Vertical-Solutions-Authorized-Development-Unit.php"
                        className="collapsed"
                      >
                        Vertical Solutions for Tally{' '}
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="Tally-Integration-Services-Delhi-NCR-India-International.php"
                        className="collapsed"
                      >
                        Tally Integration
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a
                        href="glowips-tallyerp-9-customers.php"
                        className="collapsed"
                      >
                        Our Esteemed Clientage
                      </a>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <a href="instantsupport.php" className="collapsed">
                        Instant Support
                      </a>
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
                <h2 className="title">Tally.ERP 9 - Rental</h2>
                <p className="p-3">
                  With over 90% (estimated) businesses in India using Tally.ERP
                  9 (and earlier versions), there falls on us a tremendous
                  responsibility to further ease the availability. Your feedback
                  has reached us - We hear you!
                </p>
                <p className="p-3">
                  Tally.ERP 9 is now available in a rental model. Simply put,
                  you can now pay per quarter or even per month of use.
                </p>
                <p className="p-3">
                  At 10% per quarter (around 3% per month) we believe that with
                  this model, all your general and special needs have been
                  addressed:
                </p>
                <p className="p-3">
                  If you are presently operating in an environment where Capital
                  Expenses are constrained - the rental model offers you the
                  freedom to operate in an Operating Expenses mode.
                </p>
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>
                          There is sometimes the need for an additional license
                          for short term use:
                        </p>
                      </div>
                      <p className="p-3">
                        {' '}
                        A project site that will be operational for a few months
                      </p>
                      <p className="p-3">
                        An occasional use on a notebook while travelling
                      </p>
                      <p className="p-3">
                        An off-site festival/promotional sale
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>
                          For Silver edition sites, there can arise the need for
                          additional users:
                        </p>
                      </div>
                      <p className="p-3">
                        During audits or unanticipated peak loads, you can rent
                        a Silver or Gold edition while your regular work
                        continues as usual
                      </p>
                      <p className="p-3">
                        During initial implementation such additional rental
                        licenses can be used to punch in old entries, while you
                        take full advantage of Tally.ERP 9 from day one for
                        current business operations
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>
                          As a Tally education partner, rental opens up a new
                          world of convenience:
                        </p>
                      </div>
                      <p className="p-3">
                        With government and NGO thrust on vocational training
                        programs to help making people employment-ready, the
                        demand for Tally.ERP 9 training at hundreds or small
                        locations in growing. With the rental program, you can
                        easily rent Tally.ERP 9 for the duration of the training
                        programs and build the cost into operating expenses.
                        There is no need to carry the cost of hundreds of
                        Tally.ERP 9 licenses
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>As a supplier of PC&apos;s on rent:</p>
                      </div>
                      <p className="p-3">
                        You can carry options for business ready PC&apos;s with
                        Tally.ERP 9 pre-loaded
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>As a PC manufacturer or dealer:</p>
                      </div>
                      <p className="p-3">
                        Offer your business buyers a great experience - with
                        TallyERP 9 available out of the box, at a low start up
                        cost to you and to your customer
                      </p>
                      <p className="p-3">
                        Clubbed with an extremely simple process to acquire a
                        rental license, renew or move to a regular perpetual
                        license, Tally.ERP 9 - Rental offers everyone a great
                        experience.
                      </p>
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

export default erp9rental
