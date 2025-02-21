import Header from '@/components/header';
import headerStyle from '@/styles/components/header.module.scss';

import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ImageGallery from '@/components/imageGallery';
import ContentDetail from '@/components/contentDetail';

interface RoomDetailParams {
  params: { id: string };
}

export default async function RoomDetail({ params }: RoomDetailParams) {
  const { id } = await params;
  return (
    <div className='container-fluid'>
      <Header />
      <hr className={headerStyle.hrSpace} />
      <div className='row'>
        <div className='col-sm-9'>
          <h3>VILLA VENITY Sky</h3>
        </div>

        <div className='col-sm-3 d-flex justify-content-center align-items-center'>
          <div className='px-3'>
            <IosShareIcon /> Chia sẻ
          </div>
          <div className='px-3'>
            <FavoriteBorderIcon /> Lưu
          </div>
        </div>

        <div className='pt-3'>
          <div className='d-flex'>
            <ImageGallery />
          </div>
        </div>

        <div className='pt-5'>
          <ContentDetail />
        </div>
      </div>
    </div>
  );
}
