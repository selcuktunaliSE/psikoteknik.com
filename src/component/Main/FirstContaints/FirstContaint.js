import React, { Component } from "react";
import "./FirstContaint.css";
import Structure from "../Containts/Structure";

class FirstContaint extends Component {
  render() {
    // Construct the description with JSX, making "İncirli Psikoteknik" bold
    const descriptionWithBold = (
      <span>
        <strong style={{ color: 'white' }}>İncirli Psikoteknik</strong>
        <br />
        Eğitim Kurumları
      </span>
    );

    return (
      <section className="first-hightlight-wrapper">
        <div className="center-content"> {/* New container for centering content */}
          <Structure
            titleColor="black"
            title=""
            colorClass="black"
            description={descriptionWithBold} // Pass JSX with bold text and a line break
          />
        </div>
        <div className="links-wrapper">
    <ul>
        <li><a href="#top" className="contact-button">İletişim</a></li>
    </ul> 
</div>
  
        <div className="ipod-caption row"></div>
      </section>
    );
  }
}

export default FirstContaint;
