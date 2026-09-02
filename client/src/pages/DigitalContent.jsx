import React from 'react'

export default function DigitalContent(){
  return (
    <div className="container">
      <h2>Digital Library</h2>
      <div className="card">Sample images and resources below.</div>
      <div style={{display:'flex',gap:12,marginTop:12}}>
        <img src="/images/3ac5830d-68f6-46f0-94b1-a294aff85bf9-fb05de70-aea1-44dc-a517-efa53604521d-clipboard.png" alt="campus" style={{height:120}}/>
        <img src="/images/0e86209e-9114-46c9-9689-fb91369a7287-7ed8a51b-9cc0-47cf-80e4-9eada94c89b8-clipboard.png" alt="crest" style={{height:120}}/>
      </div>
    </div>
  )
}
