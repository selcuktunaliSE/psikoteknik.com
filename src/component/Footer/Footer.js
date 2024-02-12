import React, { Component } from "react";
import './Footer.css';

class Footer extends Component {
    render() { 
        return (
            <footer className="footer-wrapper">
                <div className="container footer-content">
                    {/* First Column */}
                    <div className="footer-column">
                        <h4><strong>Geçmişimiz</strong></h4>
                        <p>İncirli Psikoteknik Eğitim Kurumları 2009 yılında kurulmuştur. 2009 yılından bu yana İstanbul Bakırköy İncirli mahallesinde, 100 lerce kişiye eğitim vermiş ve belge almalarında yardımcı olmuştur.</p>
                    </div>
                    {/* Second Column */}
                    <div className="footer-column">
                        <h4><strong>İletişim</strong></h4>
                        <p><i class="fas fa-map-marker-alt"></i> Zuhuratbaba Mahallesi Haksever Sokak No:2 Daire:10 Paşa İş Merkezi Bakırköy / İstanbul</p>
                        <p><strong> <a href="tel:+02125612009"><i className="fas fa-phone"></i> 0 (212) 561 20 09</a> </strong> </p>
                        <p><strong><a href="mailto:psikoteknik@msn.com"><i className="fas fa-envelope"></i> psikoteknik@msn.com</a></strong> </p>
                    </div>
                    {/* Third Column */}
                    <div className="footer-column footer-map">
                        <iframe
                            title="Google Maps İncirli Psikoteknik Eğitim Kurumları"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.4838299092085!2d28.867077476270257!3d40.99278222037858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb50c1c52dc3%3A0x672edcb6ede4e9a!2zUGHFn2EgxLDFnyBNZXJrZXpp!5e0!3m2!1sen!2str!4v1707528562057!5m2!1sen!2str"
                            width="300"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
