import React, {Component } from 'react';
import Structure from "../Containts/Structure"
import './SecContaints.css';

class SecondContaints extends Component {
    
    render() { 
        return ( 
            <section className="second-hightlight-wrapper">
				<Structure  alert="" titleColor="black" title="Psikoteknik Belgesi" priceColor ="grey" price = ""
				colorClass="black" description="Testlerin tamamı bireyin aynı zamanda tutum ve davranışlarını da göstermektedir. Bilgisayar ortamında bir program aracılığı ile yapılan bu testler psikolog eşliğinde yaklaşık bir saat sürmektedir. Sürücülerin her 5 yılda bir bu belgeyi yeniletmesi gerekmektedir.

                Psikoteknik belgesi işlemleriniz ve aklınıza takılan herhangi bir soru için bizimle iletişime geçebilir veya bizi ziyaret edebilirsiniz."
				/>
				
	        </section>
         );
    }
}
export default SecondContaints;