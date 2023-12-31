import Footer from '../../../components/Footer/Footer'
import MyNavbar from '../../../components/Navbar/MyNavbar'
import ProductContainer from '../../../components/ProductContainer/ProductContainer'
import Geared_Motor_data from './Data'
import geared_motor_types from './Types'

const GearedMotor = () => {
  return (
    <div>
      <MyNavbar />
      <ProductContainer productData={Geared_Motor_data} productTypes={geared_motor_types} />
      <Footer />
    </div>
  )
}

export default GearedMotor