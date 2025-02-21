import headerStyle from '@/styles/components/header.module.scss';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <div className='w-100 d-block d-flex justify-content-center mt-3 position-sticky top-0'>
      <div className='d-block shadow p-2 bg-white rounded-pill align-items-center'>
        <div>
          <div className='row'>
            <div className='col-sm-4'>
              <div className={headerStyle.searchLocation}>
                <span className={headerStyle.searchTitle}>Địa điểm</span>
                <div>
                  <input
                    type='text'
                    className={headerStyle.searchInput}
                    placeholder='Tìm kiếm điểm đến'
                  />
                </div>
              </div>
            </div>

            <div className='col-sm-2'>
              <div className={headerStyle.searchLocation + ' border-start'}>
                <span className={headerStyle.searchTitle}>Nhận phòng</span>
                <div>
                  <input type='text' className={headerStyle.searchInput} placeholder='Thêm ngày' />
                </div>
              </div>
            </div>

            <div className='col-sm-2'>
              <div className={headerStyle.searchLocation + ' border-start'}>
                <span className={headerStyle.searchTitle}>Trả phòng</span>
                <div>
                  <input type='text' className={headerStyle.searchInput} placeholder='Thêm ngày' />
                </div>
              </div>
            </div>

            <div className='col-sm-4'>
              <div className={headerStyle.searchLocation + ' border-start'}>
                <div className='row'>
                  <div className='col-sm'>
                    <span className={headerStyle.searchTitle}>Khách</span>
                    <div>
                      <input
                        type='text'
                        className={headerStyle.searchInput}
                        placeholder='Thêm khách'
                      />
                    </div>
                  </div>
                  <div className='col-sm position-relative'>
                    <button className={headerStyle.searchButton}>
                      <SearchIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
