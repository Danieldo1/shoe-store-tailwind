import Button from "../components/Button"
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SpecialOffers = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
    
        <h2 className="font-palanquin capitalize text-4xl  font-bold">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red"> Quality </span>
          Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
        Super Quality Shoes are more than footwear; they're a symbol of elegance, comfort, and sustainability. They reflect your lifestyle and values. Elevate your shoe game and experience the difference.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
Our dedication to details is woven into the very fabric of each shoe, ensuring that you experience perfection with every step you take.</p>
       <div className="mt-11">
        <Button label="View details"  />
       </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoes" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SpecialOffers