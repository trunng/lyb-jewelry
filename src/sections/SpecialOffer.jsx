import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import Button from '../components/Button';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const SpecialOffer = () => {
	return (
		<section
			className={`flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container `}
		>
			<TrackVisibility partialVisibility once className="w-1/2">
				{({ isVisible }) => (
					<div
						className={`flex-1  ${
							isVisible
								? 'animate__animated animate__fadeIn animate__slower'
								: ''
						}`}
					>
						<img src={offer} className="w-full rounded-lg" />
					</div>
				)}
			</TrackVisibility>
			<div className="flex flex-1 flex-col">
				<h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
					<span className="text-blue-800">Hàng Ngàn Ưu Đãi </span>
					Cho Mùa Giáng Sinh
				</h2>
				<p className="mt-4 info-text">
					Hãy bắt đầu hành trình mua sắm, nơi trải nghiệm của bạn được nâng tầm
					với những ưu đãi không thể bỏ qua. Từ các lựa chọn hàng đầu đến những
					khoản tiết kiệm đáng kinh ngạc, chúng tôi mang đến giá trị độc nhất vô
					nhị mà bạn không tìm thấy ở đâu khác.
				</p>
				<p className="mt-6 info-text">
					Khám phá một thế giới đa dạng, được thiết kế để đáp ứng những mong
					muốn độc đáo của bạn, vượt xa mọi kỳ vọng cao nhất. Hành trình cùng
					chúng tôi sẽ luôn là một trải nghiệm đặc biệt dành riêng cho bạn.
				</p>
				<div className="mt-11 flex flex-wrap gap-4">
					{' '}
					<Button label="Nhận Ngay Ưu Đãi" iconURL={arrowRight} />
					<Button
						label="Tìm Hiểu Thêm"
						backgroundColor="bg-white"
						borderColor="border-slate-gray"
						textColor="text-slate-gray"
					/>
				</div>
			</div>
		</section>
	);
};

export default SpecialOffer;
