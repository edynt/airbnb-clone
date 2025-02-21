import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from '@/styles/components/filterCatalog.module.scss';
import IOSSwitch from '@mui/material/Switch';

const catalogs: string[] = [
  'Khung cảnh tuyệt vời',
  'Biểu tượng',
  'Hồ bơi tuyệt vời',
  'Nông thôn',
  'Ven hồ',
  'Thật ấn tượng!',
  'Phòng',
  'Nhà trên cây',
  'Nhà nhỏ',
  'Biệt thự',
  'Được ưa chuộng',
  'Cabin',
  'Grand piano',
  'Đảo',
  'Nhà khung chữ A',
  'Lâu đài',
  'Nhà dưới lòng đất',
  'Luxe',
  'Hướng biển',
  'Container',
  'Hanok',
  'Lều mục đồng',
  'Nông trại',
  'Bãi biển',
  'Thiết kế',
  'Nhà mái vòm',
  'Bắc Cực',
  'Hang động',
  'Dammuso',
  'Bếp của bếp trưởng',
  'Đường trượt tuyết thẳng tới chỗ ở',
  'Không gian sáng tạo',
  'Ryokan',
  'Chơi golf',
  'Vui chơi',
  'Nhà nông trại',
  'Nhà không sử dụng điện lưới',
  'Minsu',
  'Nhiệt đới',
  'Vườn nho',
  'Mới',
  'Thành phố hàng đầu',
  'Khu cắm trại',
  'Công viên quốc gia',
  'Xe cắm trại',
  'Lướt sóng',
  'Phục vụ bữa sáng',
  'Nhà mang tính lịch sử',
  'Trượt tuyết',
  'Nhà trên núi',
  'Nhà phong cách Cycladic',
  'Cối xay gió',
  'Casa Particular',
  'Tháp',
  'Lều yurt',
  'Sa mạc',
  'Thuyền',
  'Hỗ trợ người dùng xe lăn',
  'Nhà thuyền',
  'Nhà chỏm nón',
  'Riad',
  'Hồ',
];

export default function FilterCatalog() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <div className='px-2'>
      <div className='row'>
        <div className='col-sm-9 position-relative'>
          <div className={styles.scrollView + ' d-flex overflow-auto'}>
            {catalogs.map((catalog, index) => (
              <div
                key={index}
                className={styles.catalogItem + ' ' + (index == 0 ? styles.active : 'false')}
              >
                <div>
                  <AddIcon />
                </div>
                <div>{catalog}</div>
              </div>
            ))}
          </div>

          <button type='button' className={styles.buttonStyle + ' ' + styles.buttonRight}>
            <ChevronRightIcon />
          </button>
        </div>
        <div className='col-sm-1 d-flex justify-content-center'>
          <button type='button' className={styles.buttonStyle}>
            <FilterListIcon /> Bộ lọc
          </button>
        </div>
        <div className='col-sm-2'>
          <button type='button' className={styles.buttonStyle}>
            Hiển thị tổng trước thuế <IOSSwitch {...label} />
          </button>
        </div>
      </div>
    </div>
  );
}
