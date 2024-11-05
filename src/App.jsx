import {
	CustomerReviews,
	Footer,
	Hero,
	PopularProducts,
	Services,
	SpecialOffer,
	Subscribe,
	SuperQuality,
} from './sections';

import Nav from './components/Nav';

const App = () => (
	<main className="relative">
		<Nav />
		<section className="xl:padding-l wide:padding-r padding-b">
			<Hero />
		</section>
		<section className="padding">
			{' '}
			<video
				src="https://cdn.pnj.io/images/2024/03/DisneyPNJ_VIDEOR4.mp4"
				autoPlay
				muted
				loop
				playsInline
				className=" left-0 w-full object-cover -z-10"
			></video>
		</section>
		<section className="padding">
			<PopularProducts />
		</section>
		<section className="padding">
			<SuperQuality />
		</section>
		<section className="padding-x py-10">
			<Services />
		</section>
		<section className="padding">
			<SpecialOffer />
		</section>
		<section className="bg-pale-blue padding">
			<CustomerReviews />
		</section>
		<section className="padding-x sm:py-32 py-16 w-full">
			<Subscribe />
		</section>
		<section className="padding bg-black padding-x padding-y pb-8">
			<Footer />
		</section>
	</main>
);

export default App;
