import { Lang } from '../../Lang/Lang';
import * as constants_en from '../../Constants/Constants_en';
import * as constants_kr from '../../Constants/Constants_kr';
import { Figure, Row, Card } from 'react-bootstrap';

import { useState } from 'react';
import Modal from '../../Preview/Preview';
import * as shiftImages from '../../Preview/ScrollImages';
import '../../Preview/Preview.css';

const r1 =
	'https://client-static-files-front-end.s3.us-east-2.amazonaws.com/media/Manpoktong/IMG_9331.jpg';
const r2 =
	'https://client-static-files-front-end.s3.us-east-2.amazonaws.com/media/Manpoktong/IMG_9434.jpg';
const r3 =
	'https://client-static-files-front-end.s3.us-east-2.amazonaws.com/media/Manpoktong/IMG_9445.jpg';
const r4 =
	'https://client-static-files-front-end.s3.us-east-2.amazonaws.com/media/Manpoktong/IMG_9476.jpg';
const r5 =
	'https://client-static-files-front-end.s3.us-east-2.amazonaws.com/media/Manpoktong/IMG_9500.jpg';
const r6 =
	'https://client-static-files-front-end.s3.us-east-2.amazonaws.com/media/Manpoktong/IMG_9515.jpg';
const r7 =
	'https://client-static-files-front-end.s3.us-east-2.amazonaws.com/media/Manpoktong/IMG_9518.jpg';
const r8 =
	'https://client-static-files-front-end.s3.us-east-2.amazonaws.com/media/Manpoktong/IMG_9539_Stitch.jpg';
const r9 =
	'https://client-static-files-front-end.s3.us-east-2.amazonaws.com/media/Manpoktong/IMG_9594.jpg';
const r10 =
	'https://client-static-files-front-end.s3.us-east-2.amazonaws.com/media/Manpoktong/IMG_9604.jpg';
const f2 =
	'https://client-static-files-front-end.s3.us-east-2.amazonaws.com/media/Manpoktong/AAOK_KumgangsanAreas_Manpoktong.jpg';

const Manpoktong = props => {
	const regions = [
		{
			img: r1,
			title_en: constants_en.manpoktongTitle1,
			title_kr: constants_kr.manpoktongTitle1,
		},
		{
			img: r2,
			title_en: constants_en.manpoktongTitle2,
			title_kr: constants_kr.manpoktongTitle2,
		},
		{
			img: r3,
			title_en: constants_en.manpoktongTitle3,
			title_kr: constants_kr.manpoktongTitle3,
		},
		{
			img: r4,
			title_en: constants_en.manpoktongTitle4,
			title_kr: constants_kr.manpoktongTitle4,
		},
		{
			img: r5,
			title_en: constants_en.manpoktongTitle5,
			title_kr: constants_kr.manpoktongTitle5,
		},
		{
			img: r6,
			title_en: constants_en.manpoktongTitle6,
			title_kr: constants_kr.manpoktongTitle6,
		},
		{
			img: r7,
			title_en: constants_en.manpoktongTitle7,
			title_kr: constants_kr.manpoktongTitle7,
		},
		{
			img: r8,
			title_en: constants_en.manpoktongTitle8,
			title_kr: constants_kr.manpoktongTitle8,
		},
		{
			img: r9,
			title_en: constants_en.manpoktongTitle9,
			title_kr: constants_kr.manpoktongTitle9,
		},
		{
			img: r10,
			title_en: constants_en.manpoktongTitle10,
			title_kr: constants_kr.manpoktongTitle10,
		},
	];

	const [clickedImg, setClickedImg] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(null);

	const ImageClick = index => {
		setClickedImg(regions[index].img);
		setCurrentIndex(index);
	};
	const nextImage = () => {
		ImageClick(shiftImages.nextImageIndex(regions.length, currentIndex));
	};
	const previousImage = () => {
		ImageClick(shiftImages.previousImageIndex(regions.length, currentIndex));
	};
	return (
		<>
			<div className="centered-row featured-img-row mb-4">
				<div id="featured-img-sizer" className="centered-row">
					<Figure className="featured-img">
						<Figure.Image alt="Manpoktong image" src={f2} />
						<Figure.Caption style={{ color: 'white' }}>
							<Lang
								isEn={props.isEn}
								en={constants_en.manpoktong_imageCaption}
								kr={constants_en.manpoktong_imageCaption}
							></Lang>
						</Figure.Caption>
					</Figure>
				</div>
			</div>
			<div className="centered-row">
				<div className="featured-info">
					<hr />
					<div className="map-page-content round-bg">
						<Row className="img-card-display">
							{regions.map((region, index) => {
								return (
									<div className="featured-card-container">
										<Card className="featured-card  round-bg">
											<Card.Img
												className="round-bg"
												variant="top"
												src={region.img}
												onClick={() => ImageClick(index)}
											/>
											<Card.Body style={{ padding: '0px' }}>
												<Card.Title style={{ marginTop: '8px' }}>
													<Lang
														isEn={props.isEn}
														en={region.title_en}
														kr={region.title_kr}
													/>
												</Card.Title>
											</Card.Body>
										</Card>
									</div>
								);
							})}
							<div>
								{clickedImg && (
									<Modal
										clickedImg={clickedImg}
										setClickedImg={setClickedImg}
										nextImage={nextImage}
										previousImage={previousImage}
									/>
								)}
							</div>
						</Row>
					</div>
				</div>
			</div>
		</>
	);
};
export { Manpoktong };
