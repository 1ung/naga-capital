import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/naga-capital-logo.png";
import $ from "jquery";

function TermsAndConditionsModal(props: any) {
  const [isAccepted, setIsAccepted] = useState(false);
  const init = async () => {
    let _isAccepted = isAccepted;
    try {
      const isTermsAccepted = await localStorage.getItem("isTermsAccepted");
      if (isTermsAccepted) {
        _isAccepted = true;
      }

      if (_isAccepted) {
        $(".tnc-modal").addClass("hidden");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    init();
  }, [isAccepted]);

  const onAccept = () => {
    localStorage.setItem("isTermsAccepted", "true");
    setIsAccepted(true);
  };

  const onDecline = () => {
    const message =
      "For more information, please contact us at:\n\nT: Singapore: +65 6900 8388\nE: Cynthia.Lim@naga-capital.com\nA: 82 Telok Ayer Street, Far East Square, #02-04 Singapore 048467\n\n Please close this window to exit.";
    alert(message);
  };

  return (
    <div className="tnc-modal p-4">
      <div className="tnc-container p-4">
        <div className="row tnc-row">
          <div className="col-12 text-center pb-3">
            <img src={Logo} alt="logo" style={{ height: "40px" }} />
          </div>
          <div className="col-12">
            <p className="tnc-text tnc-bold">
            By accessing this website, you understand and agree to be bound by the following Terms and Conditions of Use.
            </p>
            <p className="tnc-text">
            Naga Capital Partners Private Limited is a Registered Fund Management Company under the regime of the Monetary Authority of Singapore to provide Fund Management Services to individuals and corporates who are Accredited Investors.
            </p>
            <p className="tnc-text tnc-bold">
              Accredited & Professional Investors
            </p>
            <p className="tnc-text">
            By using this site, you represent and warrant as an accredited and professional investor which is defined under Section4A(1)(a) of the Securities and Futures Act, either being an individual with personal net assets in excess of S$2 million; financial assets (net of any related liabilities) in excess of S$1 million; or income in the preceding 12 months of not less than S$300,000, or a company with net assets in excess of S$10 million. You may view the documents and material on this website, and is solely for personal, non-commercial, and informational purposes.
            </p>
            <p className="tnc-text tnc-bold">Information Purposes Only</p>
            <p className="tnc-text">
              The information published within this website is for information purposes only and shall not be construed as an offer, invitation, inducement or solicitation to subscribe in the funds or products referred herewith. This site does not constitute as an investment advice or counsel or solicitation for investment in any of the funds the Naga Capital Partners manage. The information contained on this website is not directed at or intended for distribution to, or use by, any person in any jurisdiction or country. Such usage or distribution would be contrary to any applicable local law or regulation and would subject Naga Capital Partners to any registration or licensing requirement in such jurisdiction. It is a personal responsibility to inform yourself of any applicable legal and regulatory restrictions and to ensure that your access and use of this information does not contravene any such restrictions and to observe all applicable laws and regulations of any relevant jurisdiction. Professional advice should be sought in cases of doubt, as any failure to do so may constitute a breach of the securities laws in any such jurisdiction. Any offer or solicitation will be made only upon execution of completed information memorandum, subscription application and relevant documentation, all of which must be read in their entirety. No offer to subscribe in shares will be made or accepted prior to receipt by the offeree documents and the completion of all appropriate documentation. Access to information about the funds is limited to investors who qualify as accredited investors only. The value of any investment made in the funds or otherwise and the income from such can fluctuate, and the investor may not get back the full original amount invested. Any projections or forward-looking statements are not necessary indicative of future or likely performance. Past performances do not serve as a guarantee to future performances of a fund. Funds that invest in asset classes which carry greater risks, such as forex trading, high yield securities and securities of small capitalisation companies may have a higher risk of loss of capital.
            </p>
            <p className="tnc-text tnc-bold">Conditions of Use</p>
            <p className="tnc-text">
              I have read and accept the terms and conditions of use.
            </p>
            <hr />
          </div>
          <div className="col-12 text-center pt-2">
            <button
              type="button"
              className="btn btn-tnc-accept btn-sm home-btn"
              onClick={onAccept}
            >
              I ACCEPT
            </button>
            <button
              type="button"
              className="btn btn-tnc-decline btn-sm home-btn"
              onClick={onDecline}
            >
              I DECLINE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditionsModal;
