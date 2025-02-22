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
            <div className='px-3'>
              <span className={styles.title}>Xác nhận thanh toán</span>
            </div>
          </div>
        </div>
        <div className='pt-5'>
          <div className='row'>
            <div className='col-sm-6'>
              <div>
                <span className={styles.subTitle}>Chuyến đi của bạn</span>
              </div>
              <div className='row pt-4'>
                <div className='col-sm-6'>
                  <span>Ngày</span>
                  <div>1 - 6 thg 3</div>
                </div>
                <div className='col-sm text-end'>Chỉnh sửa</div>
              </div>
              <div className='row pt-4'>
                <div className='col-sm-6'>
                  <span>Khách</span>
                  <div>1 khách</div>
                </div>
                <div className='col-sm text-end'>Chỉnh sửa</div>
              </div>
              <hr />

              <div className='row pt-4'>
                <button className={styles.buttonCheckout}>Yêu cầu đặt phòng</button>
              </div>
            </div>
            <div className='col-sm d-flex justify-content-center'>
              <div className={styles.blockInfoBooking}>
                <div className='row border p-4 rounded'>
                  <div className='col-sm-3'>
                    <Image
                      src='https://a0.muscache.com/im/pictures/miso/Hosting-629905767604040204/original/c7435555-a4dc-4c8b-84fe-2f92c81ce710.jpeg?aki_policy=large'
                      alt='imgs'
                      width={100}
                      height={100}
                      className='rounded'
                    />
                  </div>
                  <div className='col-sm-8 m-auto'>
                    <div>
                      <span>Say’s house in the herb garden</span>
                    </div>
                    <div>
                      <span>Toàn bộ cabin</span>
                    </div>
                    <div>
                      <span>5,00 (13 đánh giá)</span>
                    </div>
                  </div>

                  <hr className='mt-4' />
                  <div className='row mt-3'>
                    <div className='col-sm-12 fs-5'><b>Chi tiết giá</b></div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-sm'>₫670.000 x 5 đêm</div>
                    <div className='col-sm text-end'>₫3.350.000</div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-sm'>Phí dịch vụ Airbnb</div>
                    <div className='col-sm text-end'>₫472.943</div>
                  </div>
                  <hr className='mt-4' />
                  <div className='row mt-3'>
                    <div className="col-sm"><b>Tổng (VND)</b></div>
                    <div className="col-sm text-end">₫3.822.943</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
