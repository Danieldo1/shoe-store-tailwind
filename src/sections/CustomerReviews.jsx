import ReviewCard from "../components/ReviewCard"
import {reviews} from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">What Our
        <span className="text-coral-red " > Customers </span>
        Say?
      </h3>
      <p className="mt-4 max-w-lg text-center info-text m-auto">Hear stories from our customers and discover how Nike has transformed not only their style but their lives as well. From remarkable adventures to everyday comfort, our footwear has been an integral part of their journeys, and we're proud to share their experiences with you.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard key={review.customer}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews