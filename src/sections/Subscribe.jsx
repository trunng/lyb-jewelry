import Button from '../components/Button';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Subscribe = () => {
	return (
		<TrackVisibility partialVisibility once>
			{({ isVisible }) => (
				<section
					id="contact-us"
					className={`max-container flex justify-evenly items-center max-lg:flex-col gap-10  ${
						isVisible ? 'animate__animated animate__fadeIn animate__slow' : ''
					}`}
				>
					<h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
						Đăng Ký Nhận Ngay
						<span className="text-blue-800"> Voucher </span> & Ưu Đãi
					</h3>
					<div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
						<input
							type="text"
							placeholder="customer@gmail.com"
							className="input"
						/>
						<div className="flex max-sm:justify-end items-center max-sm:w-full">
							<Button label="Đăng ký" fullWidth />
						</div>
					</div>
				</section>
			)}
		</TrackVisibility>
	);
};

export default Subscribe;
