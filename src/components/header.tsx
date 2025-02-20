'use client';
import logo from '@/assets/images/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import LanguageIcon from '@mui/icons-material/Language';
import TableRowsIcon from '@mui/icons-material/TableRows';
import Search from './search';

export default function Header() {
  return (
    <header id='main-header'>
      <div className='row'>
        <div className='col'>
          <div className='menu-left'>
            <Link href={'/'}>
              <Image src={logo} alt='logo air bnb'></Image>
            </Link>
          </div>
        </div>

        <div className='col'>
          <div className='d-flex justify-content-center'>
            <div className='p-3'>
              <span>Chỗ ở</span>
            </div>
            <div className='p-3'>
              <span>Trải nghiệm</span>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className='d-flex justify-content-end align-items-center'>
            <div className='p-3'>
              <span>Cho thuê chỗ ở qua Airbnb</span>
            </div>
            <div className='p-3'>
              <span>
                <LanguageIcon />
              </span>
            </div>
            <div className='p-3'>
              <span>
                <TableRowsIcon />
              </span>
            </div>
          </div>
        </div>
      </div>

      <Search/>
    </header>
  );
}
