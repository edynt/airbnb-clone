import FilterCatalog from '@/components/filterCatalog';
import Header from '@/components/header';
import ListAccommodation from '@/components/listAccommodation';
import headerStyle from '@/styles/components/header.module.scss';

export default function Home() {
  return (
    <div className='container-fluid'>
      <Header />
      <hr className={headerStyle.hrSpace}/>
      <FilterCatalog/>
      <ListAccommodation/>
    </div>
  );
}
