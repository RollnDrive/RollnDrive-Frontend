import Footer from '../../../components/Footer/Footer'
import MyNavbar from '../../../components/Navbar/MyNavbar'
import ProductContainer from '../../../components/ProductContainer/ProductContainer'
import Controller_data from './Data'
import Controller_types from './Types'

const MotorController = () => {
  return (
    <div>
      <MyNavbar />
      <ProductContainer productData={Controller_data} productTypes={Controller_types} />
      <Footer />
    </div>
  )
}

export default MotorController