import Image from "next/image";
import Link from "next/link";


const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-container">
           <Link href="/" ><Image src="/logo.svg" alt="Logo" width={120} height={40} /></Link>
              <ul className="header-list">
                    <li className="header-item"><Link href={} ></Link></li>
              </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;