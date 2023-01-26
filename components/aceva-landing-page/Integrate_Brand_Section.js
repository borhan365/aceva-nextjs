import Image from 'next/image'
import React from 'react'
const logoOne = '/assets/images/brands/forbes.svg'
const WhatsApp = '/assets/images/social-media/whatsapp-2.png'
const Telegram = '/assets/images/social-media/telegram.png'

const dynamic = '/assets/images/brands/dynamics365.png'
const sap = '/assets/images/brands/sap.png'
const salesforce = '/assets/images/brands/salesforce.png'
const oracle = '/assets/images/brands/oracle-erp.png'
const sage = '/assets/images/brands/sage.png'
const robocrop = '/assets/images/brands/robocrop.png'
const infor = '/assets/images/brands/infor.png'

function Integrate_Brand_Section() {
  return (
    <>
      <section className="int-brand-section">
        <div className="container">
          <div className="container-box">
            <div className="int-brand-title">
              <h2>ACEVA integrates with all your work tools</h2>
              <p>Connect ACEVA to dozens of tools and platforms in less than 5 minutes</p>
            </div>
            <div className="int-brand-wrapper">
              <div className="int-brand-two-col-wrap">
                <div className="int-brand-col-item">
                  <Image width={200} height={200} style={{objectFit: "contain"}} src={WhatsApp} alt="w" />
                </div>
                <div className="int-brand-col-item">
                  <Image width={200} height={200} style={{objectFit: "contain"}} src={Telegram} alt="t" />
                </div>
              </div>

              {/* all logo wrapper */}
              <div className="int-brand-all-wrapper">
                <div className="int-brand-all-item">
                  <Image width={200} height={200} style={{objectFit: "contain"}} src={dynamic} alt="" />
                </div>
                <div className="int-brand-all-item">
                  <Image width={200} height={200} style={{objectFit: "contain"}} src={infor} alt="" />
                </div>
                <div className="int-brand-all-item">
                  <Image width={200} height={200} style={{objectFit: "contain"}} src={oracle} alt="" />
                </div>
                <div className="int-brand-all-item">
                  <Image width={200} height={200} style={{objectFit: "contain"}} src={sap} alt="" />
                </div>
                <div className="int-brand-all-item">
                  <Image width={200} height={200} style={{objectFit: "contain"}} src={robocrop} alt="" />
                </div>
                <div className="int-brand-all-item">
                  <Image width={200} height={200} style={{objectFit: "contain"}} src={sage} alt="" />
                </div>
                <div className="int-brand-all-item">
                  <Image width={200} height={200} style={{objectFit: "contain"}} src={salesforce} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Integrate_Brand_Section