
import { BsCheck2, BsX } from 'react-icons/bs'

// import images
import axios from 'axios'
import React, { useState } from 'react'
import Link from 'next/link'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import { client } from '../../lib/client'

function PricingScreen({headers, footers}) {

  const [country, setCountry] = useState('')

  const ipinfo_token = '5f46cd99918dd4'

  axios.get(`https://ipinfo.io/json?token=${ipinfo_token}`)
  .then(response => {
    // console.log(response.data.country);
    let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    setCountry(regionNames.of(response.data.country))
  })
  .catch(e => {
    console.log(e);
  });

  return (
    <>
      <Layout headers={headers} footers={footers}>
        <section className='featured-section'>
          <div className='container'>
            <div className='featured-container'>

              {/* title */}
              <div className='section-title'>
                {/* <span className='sub-title purple-color'>Our Affortable Pricing</span> */}
                <h2>Goal-oriented pricing that scales with you</h2>
              </div>

              {/* pricing wrapper */}
              <div className='pricing-wrapper'>

                {/* single item */}
                <div className="single-item-wrap">

                  {/* special offer for country */}
                  {/* <div className="special-offer-for-country">
                    <p>We noticed that you're from <span className='country-name'>{country}</span>. I want to make this course affordable for everyone around the world. 
                    A special <span className="country-off">60% off</span> discount code will automatically be applied for you during checkout. Enjoy! 🙂</p>
                  </div> */}

                  <div className="single-features-item pricing-item comment-style">
                                  
                  {/* <div className="icon">
                    <img src={chatbot} alt="comment" />
                  </div> */}
                  <div className="text-center border-bottom">
                    <h3 className="plan-name">Standard</h3>
                    <div className="discriptive">Perfect for Small Businesses</div>
                    <Link href="/demo?plan=standard"><button className="pricing-get-demo-btn">Get a Demo</button></Link>
                    {/* <div className="price">
                      <span className="notranslate">
                        <span>$</span>
                        <span className="livechat-adv-numb">20</span>
                        <span className="regular-price"><sub>$220</sub></span>
                      </span>
                    </div>
                    <div className="plan-det">Per Agent/Month</div> */}
                  </div>
                  <div className="pricing-features">
                    <ul>
                      <li> <BsCheck2 /> WhatsApp/Telegram</li>
                      <li> <BsCheck2 /> Chat Monitoring</li>
                      <li> <BsCheck2 /> Live Chat</li>
                      <li> <BsCheck2 /> Auto Responders</li>
                      <li> <BsCheck2 /> CRM</li>
                      <li> <BsCheck2 /> SMS Marketing</li>
                      <li> <BsCheck2 /> Helpdesk</li>
                      <li> <BsCheck2 /> Push Notifications</li>
                      <li> <BsCheck2 /> 3rd Party Integration's</li>
                      <li> <BsCheck2 /> Multi-site</li>
                      <li> <BsCheck2 /> Multilingual</li>
                      <li> <BsCheck2 /> Sales Chatbots Templates</li>
                      <li> <BsCheck2 /> FAQ Chatbots Templates</li>
                      <li> <BsCheck2 /> Analytics</li>
                      <li className='not-eligible-icon'> <BsX /> AI Chatbot</li>
                      {/* <li className='not-eligible-icon'> <BsX /> Auto Triggers</li> */}
                    </ul>
                  </div>
                  {/* <button className='pricing-buy-button'>Enquire Now</button> */}
                </div>
                </div>

                {/* single item */}
                <div className="single-item-wrap">
                  {/* special offer for country */}
                  {/* <div className="special-offer-for-country">
                    <p>We noticed that you're from <span className='country-name'>{country}</span>. I want to make this course affordable for everyone around the world. 
                    A special <span className="country-off">70% off</span> discount code will automatically be applied for you during checkout. Enjoy! 🙂</p>
                  </div> */}
                  <div className="single-features-item pricing-item ai-style">
                    {/* <div className="icon">
                      <img src={ai} alt="comment" />
                    </div> */}
                    <div className="text-center border-bottom">
                      <h3 className="plan-name">Advanced</h3>
                      <div className="discriptive">Ideal for Growing Businesses</div>
                      <Link href="/demo?plan=advanced"><button className="pricing-get-demo-btn">Get a Demo</button></Link>
                      {/* <div className="price">
                        <span className="notranslate">
                          <span>$</span>
                          <span className="livechat-adv-numb">50</span>
                          <span className="regular-price"><sub>$310</sub></span>
                        </span>
                      </div>
                      <div className="plan-det">Per Agent/Month</div> */}
                      
                    </div>
                    <div className="pricing-features">
                      <ul>
                        <li> <BsCheck2 /> WhatsApp/Telegram</li>
                        <li> <BsCheck2 /> Chat Monitoring</li>
                        <li> <BsCheck2 /> Live Chat</li>
                        <li> <BsCheck2 /> Auto Responders</li>
                        <li> <BsCheck2 /> CRM</li>
                        <li> <BsCheck2 /> SMS Marketing</li>
                        <li> <BsCheck2 /> Helpdesk</li>
                        <li> <BsCheck2 /> Push Notifications</li>
                        <li> <BsCheck2 /> 3rd Party Integration's</li>
                        <li> <BsCheck2 /> Multi-site</li>
                        <li> <BsCheck2 /> Multilingual</li>
                        <li> <BsCheck2 /> Sales Chatbots Templates</li>
                        <li> <BsCheck2 /> FAQ Chatbots Templates</li>
                        <li> <BsCheck2 /> Analytics</li>
                        <li> <BsCheck2 /> AI Chatbot</li>
                      </ul>
                    </div>
                    {/* <button className='pricing-buy-button'>Enquire Now</button> */}
                  </div>
                </div>

                {/* single item */}
                <div className="single-item-wrap">
                    {/* special offer for country */}
                    {/* <div className="special-offer-for-country">
                      <p>We noticed that you're from <span className='country-name'>{country}</span>. I want to make this course affordable for everyone around the world. 
                      A special <span className="country-off">80% off</span> discount code will automatically be applied for you during checkout. Enjoy! 🙂</p>
                    </div> */}
                  <div className="single-features-item pricing-item analysis-style">
                      {/* <div className="icon">
                        <img src={analysis} alt="comment" />
                      </div> */}
                      <div className="text-center border-bottom">
                        <h3 className="plan-name">Enterprise</h3>
                        <div className="discriptive">Best for Enterprise Teams</div>
                        <Link href="/demo?plan=enterprise"><button className="pricing-get-demo-btn">Get a Demo</button></Link>
                        {/* <div className="price">
                          <span className="notranslate">
                            <span>$</span>
                            <span className="livechat-adv-numb">70</span>
                            <span className="regular-price"><sub>$420</sub></span>
                          </span>
                        </div>
                        <div className="plan-det">Per Agent/Month</div> */}

                      </div>
                      <div className="pricing-features enterprice-wrap">
                          <div className="pricing-logo">
                            <img src="http://localhost:3000/static/media/aceva.023c6ceea74e217ff5bc.png" alt="" />
                          </div>
                          {/* <div className="pricing-review">
                            <img src="https://www.haptik.ai/hubfs/3star.png" alt="review" />
                          </div> */}
                          <h3>For Enterprise Customers</h3>
                      </div>
                      {/* <button className='pricing-buy-button'>Enquire Now</button> */}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default PricingScreen


export async function getServerSideProps() {

  const headerQuery = '*[_type == "header"]'
  const footerQuery = '*[_type == "footer"]'

  const headers = await client.fetch(headerQuery)
  const footers = await client.fetch(footerQuery)

  return {
    props: {
      headers,
      footers
    }
  }
}