import Footer from '../../../components/Footer/Footer';
import MyNavbar from '../../../components/Navbar/MyNavbar'
import ProductContainer from '../../../components/ProductContainer/ProductContainer';
import MDR_data from './Data';
import "./MDR.scss"
import MDR_types from './Types';

const MDR = () => {
  return (
    <div>
      <MyNavbar />
      <ProductContainer productData={MDR_data} productTypes={MDR_types} />
      <Footer />
    </div>
  )
}

export default MDR;