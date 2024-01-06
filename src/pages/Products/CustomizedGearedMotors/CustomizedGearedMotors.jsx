import Footer from '../../../components/Footer/Footer'
import MyNavbar from '../../../components/Navbar/MyNavbar'
import ProductContainer from '../../../components/ProductContainer/ProductContainer'
import CustomizedMotors_data from './Data'
import CustomizedMotor_types from './Types'

const CustomizedGearedMotors = () => {
  return (
    <div>
      <MyNavbar />
      <ProductContainer productData={CustomizedMotors_data} productTypes={CustomizedMotor_types} />
      <Footer />
    </div>
  )
}

export default CustomizedGearedMotors