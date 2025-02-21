import styles from '@/styles/components/itemAccommodation.module.scss';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';

interface ItemAccommodationProps {
  img: string;
  title: string;
  tag: string;
  price: number;
  isFavorite: boolean;
  evaluate: number;
}

export default function ItemAccommodation(props: ItemAccommodationProps) {
  return (
    <div className={styles.container}>
      <div className={styles.frameItem}>
        <Image
          className={styles.imageItem}
          src={props.img}
          alt={props.title}
          width={280}
          height={280}
        />

        <div className={styles.contentItem}>
          <div className='row'>
            <div className='col-sm-9'>
              <div className={styles.title}>
                <b>{props.title}</b>
                <div>{props.tag}</div>
                <p>
                  <b>${props.price}</b> / đêm
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <b>{props.evaluate - Math.floor(Math.random() * 5)}</b> <span><StarIcon/></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
