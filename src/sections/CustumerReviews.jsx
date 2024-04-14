import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustumerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palaquin text-center text-4xl font-bold">What Our <span className="text-coral-red">Costumers</span> Say?</h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Hear geuine stories from our satisfied costumers about their exceptional experiences with us.</p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
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

export default CustumerReviews