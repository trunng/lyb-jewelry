import { aboutUs } from '../assets/images';
import Button from '../components/Button';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const SuperQuality = () => {
	return (
		<section
			id="about-us"
			className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
		>
			<div className="flex flex-1 flex-col">
				<h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
					<span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-3">
						A Little Story
					</span>
					<span className="text-blue-800">About LYB</span>
					<span> - LYB Story</span>
				</h2>
				<p className="mt-4 lg:max-w-lg info-text">
					Mọi câu chuyện đều có sự mở đầu. Bắt đầu từ cửa hàng kinh doanh Vàng
					bạc <span className="text-blue-800">Lời Yến Bản</span> vào năm 2000 và
					đến hiện tại 2021, LYB đã phát triển trở thành một trong những tập
					đoàn đi đầu trong lĩnh vực sản xuất kinh doanh trang sức chuyên
					nghiệp.
				</p>
				<p className="mt-6 lg:max-w-lg info-text">
					2 màu chủ đạo là vàng nhũ và xanh dương. Màu vàng nhũ: là màu của kim
					loại vàng, chất liệu chính trong lĩnh vực chế tác trang sức quý. Đó
					cũng là biểu tượng của sự phồn thịnh, giàu có, mang lại cảm xúc vui
					tươi và may mắn. Màu xanh dương: là màu của bầu trời, của đại dương và
					là biểu tượng của niềm tin. Màu xanh dương được xem như là màu của sự
					hợp tác, thành công và bền vững. Sự phối hợp giữa vàng nhũ và xanh
					dương đậm thể hiện tính thời trang, phong cách và một niềm tin vững
					chắc
				</p>
				<div className="mt-11">
					{' '}
					<Button label="Biết thêm về LYB Story" />
				</div>
			</div>
			<TrackVisibility partialVisibility once>
				{({ isVisible }) => (
					<div
						className={`flex-1 flex justify-center items-center w-full ${
							isVisible
								? 'animate__animated animate__fadeIn animate__slower'
								: ''
						}`}
					>
						<img
							src={aboutUs}
							alt="About Us"
							width={650}
							height={600}
							className="object-contain rounded-lg"
						/>
					</div>
				)}
			</TrackVisibility>
		</section>
	);
};

export default SuperQuality;
