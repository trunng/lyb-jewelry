import { footerLinks, socialMedia } from '../assets/constants';
import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';

const Footer = () => {
	return (
		<footer className="max-container">
			<div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
				<div className="flex flex-col items-start">
					<a href="/">
						<img src={footerLogo} width={250} height={46} />
					</a>
					<p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
						© 2024 Công Ty Cổ Phần Vàng Bạc Đá Quý Lời Yến Bản
						<br />
						613 Âu Cơ, Phường Phú Trung, Quận Tân Phú, TP.HCM
						<br />
						ĐT: 087 9692476 - Fax: 083 9132 6593 <br />
						Giấy chứng nhận đăng ký doanh nghiệp: 1302521658 do Sở Kế hoạch &
						Đầu tư TP.HCM cấp lần đầu ngày 02/01/2015.
					</p>
				</div>
				<div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
					{footerLinks.map((section) => (
						<div key={section.title}>
							<h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
								{section.title}
							</h4>
							<ul>
								{section.links.map((link) => (
									<li
										key={link.name}
										className="mt-3 text-white-400 font-montserrat text-base leading-normal"
									>
										<a>{link.name}</a>
									</li>
								))}
							</ul>
							{section.title == 'KẾT NỐI VỚI CHÚNG TÔI' && (
								<div className="flex items-center gap-5 mt-8">
									{socialMedia.map((icon) => (
										<div
											key={icon.src}
											className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
										>
											<img
												src={icon.src}
												alt={icon.alt}
												width={24}
												height={24}
											/>
										</div>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
				<div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
					<img
						src={copyrightSign}
						alt="copy right sign"
						width={20}
						height={20}
						className="rounded-full m-0"
					/>
					<p>Copyright. All rights reserved.</p>
				</div>

				<p className="font-montserrat cursor-pointer">
					Điều khoản & Chính sách
				</p>
			</div>
		</footer>
	);
};

export default Footer;
