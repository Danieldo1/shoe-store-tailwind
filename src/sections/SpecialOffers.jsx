import Button from "../components/Button"
import { arrowRight } from "../assets/icons";
import { offer, shoe8 } from "../assets/images";

const SpecialOffers = () => {
  return (
    <section id="about-us" className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full " />
      </div>
      <div className="flex flex-1 flex-col">
    
    <h2 className="font-palanquin capitalize text-4xl  font-bold">
      <span className="text-coral-red"> Special </span>Offer
    </h2>

    <p className="mt-4 lg:max-w-lg info-text">
    we believe that exceptional footwear should not only be a luxury but also an accessible pleasure. That's why we are thrilled to introduce our range of exclusive special offers designed to enhance your shopping experience and help you step out in style without breaking the bank.    </p>
    <p className="mt-6 lg:max-w-lg info-text">
    We've curated exclusive bundle deals for those who appreciate variety. Mix and match your favorite shoe styles, colors, and sizes, and enjoy significant savings on your footwear collection.</p>
       <div className="mt-11 flex flex-wrap gap-4">
    <Button label="Shop now" iconUrl={arrowRight}  />
    <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"    />
   </div>
  </div>
    </section>
  )
}

export default SpecialOffers