import{Navbar,Hero,Stats,Business,Billing, CardDeal,Testimonials,CTA,Footer} from './index';
import { styles } from './styles/Styles';
function App() {
  return (
  <body>
      <Navbar/>
      <Hero/>
      <div className={ `${styles.primary} flex flex-col sm:gap-[100px] gap-[50px]`} >
         <Stats/>
         <Business/>
         <Billing/>
         <CardDeal/>
         <Testimonials/>
         <div className='flex justify-center items-center'>
          <CTA/>
         </div>
         <Footer/>
      </div>
     
  </body>
  )
}

export default App
