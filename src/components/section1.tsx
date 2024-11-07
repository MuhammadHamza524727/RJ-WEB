import Image from 'next/image'
import React from 'react'

const section1 = () => {
  return (
    <section className="section-1">
    <div className="sec-div1">
      <p className="div-p1">DESCRIPTION BY POWER</p>
      <p className="div-p2">Artwork & <br /> Exhibitions News</p>
      <p className="div-p3">Molestiae neque perspiciatis quidem ut.</p>
      <div className="sec-div-main">
        <button className="sec-div-b1">BUY NOW $25</button>
        <button className="sec-div-b2">LIVE DEMO</button>
      </div>
    </div>
    <Image src="/pic11.jpg" alt=" pic1" width={600} height={250} className="sec-div2-img1" />
  </section>
  )
}

export default section1
