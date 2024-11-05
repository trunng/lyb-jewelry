import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../icons";
import {
  bigImage1,
  bigImage2,
  bigImage3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../images";

export const navLinks = [
  { href: "#home", label: "Trang chủ" },
  { href: "#about-us", label: "Giới thiệu" },
  { href: "#products", label: "Sản phẩm " },
  { href: "#contact-us", label: "Liên hệ" },
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
  { value: "1k+", label: "Chi nhánh" },
  { value: "500+", label: "Cửa hàng" },
  { value: "250k+", label: "Khách hàng" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Chuck Taylor All Star",
    price: "100.20 €",
  },
  {
    imgURL: shoe5,
    name: "Run Star Hike Sequins",
    price: "190.00 €",
  },
  {
    imgURL: shoe6,
    name: "Chuck Taylor All Star",
    price: "120.20 €",
  },
  {
    imgURL: shoe7,
    name: "Chuck 70 Y2K Heart",
    price: "130.00 €",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Chuck Taylor All Star", link: "/" },
      { name: "Run Star Hike Platform", link: "/" },
      { name: "Chuck 70 Tri-Color", link: "/" },
      { name: "Star Player 76", link: "/" },
      { name: "Chuck Taylor All Star Lift Platform", link: "/" },
      { name: "Run Star Legacy Chelsea CX", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@converse.com", link: "mailto:customer@converse.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
