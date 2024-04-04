import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaCircleUser, FaGaugeHigh, FaBook, FaCalendarDays, FaEnvelopeOpenText, FaClock, FaNetworkWired, FaRightFromBracket, FaCircleQuestion } from 'react-icons/fa6';
import React from "react";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = (link: string) => {
    switch(link){
    case "Account": 
      return <FaCircleUser className="kb-nav-icon fa-2xl account-icon" />;
    case "Dashboard":
        return <FaGaugeHigh className="kb-nav-icon fa-flip-horizontal fa-2xl" />;
    case "Courses":
        return <FaBook className="kb-nav-icon fa-2xl" />;
    case "Calendar":
        return <FaCalendarDays className="kb-nav-icon fa-2xl" />;
    case "Inbox":
        return <FaEnvelopeOpenText className="kb-nav-icon fa-2xl" />;
    case "History":
        return <FaClock className="kb-nav-icon fa-2xl" />;
    case "Studio":
        return <FaNetworkWired className="kb-nav-icon fa-2xl" />;
    case "Commons":
        return <FaRightFromBracket className="kb-nav-icon fa-2xl" />;
    case "Help":
        return <FaCircleQuestion className="kb-nav-icon fa-2xl" />;
    default:
        return null;
    }
  }
    

  const { pathname } = useLocation();
  return (
    <ul className="kanbas-nav min-vh-100 position-fixed top-0 bottom-0 overflow-x-none overflow-y-auto">
            <li>
                <Link to="/Kanbas/Dashboard">
                    <img src="/images/nu_logo.png" alt="NU Logo" className="nu-logo" />
                </Link>
            </li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link) ? "kanbas-nav-selected" : ""}>
                    <Link to={`/Kanbas/${link}`} className="kanbas-nav-link">
                        {linkToIconMap(link)}<br />
                        <span className="kanbas-nav-text">{link}</span>
                    </Link>
                </li>
            ))}
    </ul>
  );
}
export default KanbasNavigation;