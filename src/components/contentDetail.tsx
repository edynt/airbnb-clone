import detailStyle from '@/styles/components/detail.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function ContentDetail() {
  return (
    <div className='row'>
      <div className='col-sm-7'>
        <div>
          <h4>Toàn bộ biệt thự tài Thành phố Nha Trang, Việt Nam</h4>
          <p>14 khách - 7 phòng ngủ - 7 giường - 7 phòng tắm đầy đủ và 1 phòng vệ sinh cơ bản</p>
          <div className='w-100'>
            <div className='shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
              <div className='row'>
                <div className='col-sm-2'>Được khách yêu thích</div>
                <div className='col-sm-5'>
                  Khách đánh giá đây là một trong những ngôi nhà được yêu thích trên Airbnb
                </div>
                <div className='col-sm-3'>
                  <div className='text-center'>
                    5.0
                    <div>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FavoriteBorderIcon className='fs-6' key={index} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className='col-sm-2'>
                  <div>18</div>
                  <div className={detailStyle.rateFontSize}>đánh giá</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-sm-5'>
        <div className={detailStyle.cardBooking}>asdasd</div>
      </div>
    </div>
  );
}
