import Image from 'next/image';
import Link from 'next/link';
import { linksWithDescription } from '@/constants';
import logo from '@/assets/logos/spa-logo.png';

function Navbar() {
  return (
    <nav>
      <div>
        <Image src={logo} alt="Spa Logo" />
        <p>Luxe Animal Spa</p>
      </div>
      <ul>
        {linksWithDescription.map((link) => (
          <li key={link.name}>
            <Link href={link.uri}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
