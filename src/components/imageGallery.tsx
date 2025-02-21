import Image from 'next/image';
import styles from '@/styles/components/detail.module.scss';

export default function ImageGallery() {
  return (
    <div className={styles.imageGalleryContainer}>
      <Image
        src='https://a0.muscache.com/im/pictures/d682f7bf-caa4-4433-9038-c5f81a01845b.jpg?im_w=960&im_format=avif'
        alt='Image 1'
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%', height: '410px' }}
      />

      <div className={styles.blockOne}>
        <Image
          alt='Image 2'
          src='https://a0.muscache.com/im/pictures/2002b9b6-e4d8-48b2-af01-a058e400ef02.jpg?im_w=720&im_format=avif'
          width={300}
          height={200}
        />

        <div className={styles.blockTwo}>
          <Image
            alt='Image 3'
            src='https://a0.muscache.com/im/pictures/610236d1-a9e3-40cf-86a6-65616e8e6b80.jpg?im_w=720&im_format=avif'
            width={300}
            height={200}
          />
        </div>
      </div>

      <div className={styles.blockOne}>
        <Image
          alt='Image 4'
          src='https://a0.muscache.com/im/pictures/113bd9ea-b92c-4ab1-81cd-13825260e442.jpg?im_w=720&im_format=avif'
          width={300}
          height={200}
        />

        <div className={styles.blockTwo}>
          <Image
            alt='Image 4'
            src='https://a0.muscache.com/im/pictures/8a704e59-1657-4c9f-b167-ceffc5f87d1d.jpg?im_w=720&im_format=avif'
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
