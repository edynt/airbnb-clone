'use client';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import Link from 'next/link';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import styles from '@/styles/components/booking.module.scss';

export default function BookPage() {
  return (
    <>
      <div className='container'>
        <header id='main-header'>
          <div className='row'>
            <div className='col'>
              <div className='menu-left'>
                <Link href={'/'}>
                  <Image src={logo} alt='logo air bnb'></Image>
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
      <hr />
      <div className='container'>
        <div className='pt-2'>
          <div className='d-flex align-items-center'>
            <KeyboardArrowLeftIcon />
            <div className='px-3'><span className={styles.title}>Xác nhận thanh toán</span></div>
          </div>
        </div>
      </div>
    </>
  );
}
