import { reviews } from '../assets/constants';
import ReviewCard from '../components/ReviewCard';

const CustomerReviews = () => {
	return (
		<section className="max-container">
			<h3 className="font-palanquin text-center text-4xl font-bold">
				Khách Hàng
				<span className="text-blue-800"> Nghĩa Gì Về </span>
				Chúng Tôi?
			</h3>
			<p className="info-text m-auto mt-4 max-w-lg text-center">
				Lắng nghe những câu chuyện chân thật từ các khách hàng hài lòng của
				chúng tôi về những trải nghiệm tuyệt vời mà họ đã có cùng chúng tôi.
			</p>
			<div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
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
	);
};

export default CustomerReviews;
