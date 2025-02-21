import styles from '@/styles/components/detail.module.scss';

export default function BookingRoom() {
  return (
    <div className='w-75'>
      <div className='shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
        <div className='p-3'>
          <h4>₫3.716.019 / đêm</h4>

          <div className='w-100'>
            <div className='row'>
              <div className='col-sm border'>
                <div>Nhận phòng</div>
                <input type='date' className={styles.inputDate}/>
              </div>
              <div className='col-sm border'>
                <div>Trả phòng</div>
                <input type='date' className={styles.inputDate}/>
              </div>
            </div>
            <div className="row border">
              <div className="col-sm">
                <div>Khách</div>
                <div>1 Khách</div>
              </div>
            </div>
          </div>

          <div className='w-100 text-center mt-3'>
            <button type='button' className={styles.buttonCheckout}>
              Đặt phòng
            </button>

            <p className='mt-3'>Bạn vẫn chưa bị trừ tiền</p>
          </div>
          <div className='w-100 mt-5'>
            <div className='row mt-1'>
              <div className='col-sm-9'>₫3.716.019 x 5 đêm</div>
              <div className='col-sm-3 text-right'>₫18.580.095</div>
            </div>
            <div className='row mt-1'>
              <div className='col-sm-9'>Phí dịch vụ Airbnb</div>
              <div className='col-sm-3 text-right'>₫3.047.136</div>
            </div>
            <hr />
            <div className='row mt-1'>
              <div className='col-sm-9'>
                <b>Tổng trước thuế</b>
              </div>
              <div className='col-sm-3 text-right'>
                <b>₫21.627.231</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
