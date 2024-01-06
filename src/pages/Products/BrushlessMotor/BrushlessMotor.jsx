import Footer from '../../../components/Footer/Footer'
import MyNavbar from '../../../components/Navbar/MyNavbar'
import ProductContainer from '../../../components/ProductContainer/ProductContainer'
import BLessMotors_data from './Data'
import BlessMotor_types from './Types'

const BrushlessMotor = () => {
  return (
    <div>
      <MyNavbar />
      <ProductContainer productData={BLessMotors_data} productTypes={BlessMotor_types} />
      <Footer />
    </div>
  )
}

export default BrushlessMotor