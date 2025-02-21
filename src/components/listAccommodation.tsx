import styles from '@/styles/components/listAccommodation.module.scss';
import ItemAccommodation from './itemAccommodation';

const loopItemAccommodation = () => {
  const item = {
    img: 'https://a0.muscache.com/im/pictures/d682f7bf-caa4-4433-9038-c5f81a01845b.jpg?im_w=960&im_format=avif',
    title: 'Nha Trang, Việt Nam',
    tag: 'Hướng Biển và biển',
    price: 200,
    isFavorite: true,
    evaluate: 5,
  };
  return (
    <>
      {Array.from({ length: 100 }).map((_, index) => (
        <ItemAccommodation key={index} {...item} />
      ))}
    </>
  );
};
export default function ListAccommodation() {
  return (
    <div className='container-fluid'>
      <div className={styles.container}>{loopItemAccommodation()}</div>
    </div>
  );
}
