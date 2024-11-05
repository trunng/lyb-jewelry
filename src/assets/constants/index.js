import {
	facebook,
	instagram,
	shieldTick,
	support,
	truckFast,
	twitter,
} from '../icons';
import {
	bigImage1,
	bigImage2,
	bigImage3,
	customer1,
	customer2,
	jewelry1,
	jewelry2,
	jewelry3,
	jewelry4,
} from '../images';

export const navLinks = [
	{ href: '#home', label: 'Trang chủ' },
	{ href: '#about-us', label: 'Giới thiệu' },
	{ href: '#products', label: 'Sản phẩm ' },
	{ href: '#contact-us', label: 'Liên hệ' },
];

export const shoes = [
	{
		thumbnail: bigImage1,
		bigShoe: bigImage1,
	},
	{
		thumbnail: bigImage2,
		bigShoe: bigImage2,
	},
	{
		thumbnail: bigImage3,
		bigShoe: bigImage3,
	},
];

export const statistics = [
	{ value: '1k+', label: 'Chi nhánh' },
	{ value: '500+', label: 'Cửa hàng' },
	{ value: '250k+', label: 'Khách hàng' },
];

export const products = [
	{
		imgURL: jewelry1,
		name: 'Nhẫn Kim cương Vàng 14K Disney',
		price: '13.573.680 ₫',
	},
	{
		imgURL: jewelry2,
		name: 'Mặt dây chuyền Kim cương Vàng trắng 14K Disney',
		price: '23.062.000 ₫',
	},
	{
		imgURL: jewelry3,
		name: 'Lắc tay Vàng 14K đính đá Citrine Disney',
		price: '9.252.000 ₫',
	},
	{
		imgURL: jewelry4,
		name: 'Nhẫn Kim cương Vàng 14K Disney',
		price: '29.806.000 ₫',
	},
];

export const services = [
	{
		imgURL: truckFast,
		label: 'TRẢ GÓP 0% LÃI SUẤT',
		subtext: 'Áp dụng dễ dàng qua thẻ tín dụng của 80 ngân hàng.',
	},
	{
		imgURL: shieldTick,
		label: 'GIAO HÀNG 3H',
		subtext: 'Sở hữu ngay món trang sức yêu thích chỉ trong vòng 3 giờ.',
	},
	{
		imgURL: support,
		label: 'NGƯỜI BẠN VÀNG',
		subtext:
			'Giải pháp tài chính cầm đồ, thu mua kim cương, túi hiệu và đồng hồ cơ.',
	},
];

export const reviews = [
	{
		imgURL: customer1,
		customerName: 'Chị Tôn Khánh Quỳnh',
		rating: 4.5,
		feedback:
			'Sự chú ý đến từng chi tiết tinh tế và chất lượng sản phẩm đã vượt xa mong đợi của tôi. Tôi luôn toả sáng trước ống kính nhờ LYB!',
	},
	{
		imgURL: customer2,
		customerName: 'Chị Lê Hoàng Phương',
		rating: 4.5,
		feedback:
			'Gắn bó cùng với LYB cũng đã được 5 năm cho thấy niềm tin cũng như lòng đam mê của tôi dành cho trang sức nơi đây! Quá sang trọng và tinh tế từng chi tiết!',
	},
];

export const footerLinks = [
	{
		title: 'SẢN PHẨM',
		links: [
			{ name: 'Trang Sức Cưới', link: '/' },
			{ name: 'Trang Sức Đá Màu', link: '/' },
			{ name: 'Dây Chuyền', link: '/' },
			{ name: 'Trang Sức Ngọc Trai', link: '/' },
			{ name: 'Trang Sức Kim Cương', link: '/' },
			{ name: 'Trang Sức Ý', link: '/' },
		],
	},
	{
		title: 'DỊCH VỤ KHÁCH HÀNG',
		links: [
			{ name: 'Hướng dẫn đo size trang sức', link: '/' },
			{ name: 'Mua hàng trả góp', link: '/' },
			{ name: 'How it works', link: '/' },
			{ name: 'Cẩm nang sử dụng trang sức', link: '/' },
			{ name: 'Hướng dẫn mua hàng và thanh toán', link: '/' },
		],
	},
	{
		title: 'KẾT NỐI VỚI CHÚNG TÔI',
		links: [
			{ name: 'lybjewelry@company.com', link: 'mailto:lybjewelry@company.com' },
			{ name: '+087 9692476', link: 'tel:+0879692476' },
		],
	},
];

export const socialMedia = [
	{ src: facebook, alt: 'facebook logo' },
	{ src: twitter, alt: 'twitter logo' },
	{ src: instagram, alt: 'instagram logo' },
];
