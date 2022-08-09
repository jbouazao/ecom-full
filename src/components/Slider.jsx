import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import cover1 from '../assets/cover1.jpeg'
import cover2 from '../assets/cover2.jpeg'
import cover3 from '../assets/cover3.jpeg'

const Container = styled.div`
	width: 100%;
	height: 90vh;
	display: flex;
	background-color: #FAFAFA;
	position: relative;
	overflow: hidden;
`

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #e9e9e9;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${props => props.direction === "left" && "10px"};
	right: ${props => props.direction === "right" && "10px"};
	margin: auto;
	cursor: pointer;
	z-index: 2;
`

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(${props => props.slideIndex * -100}vw);
	transition: all 0.4s ease-out;
`

const Slide = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 100%;
`
const ImgContainer = styled.div`
	flex: 1;
`

const Image = styled.img`
	width: 100%;
	height: 100%;
`

const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`

const Title = styled.h1`
	font-size: 70px;
`

const Desc = styled.p`
	margin: 50px 0px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`

const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
`

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0)

	const SlideHandler = (direction) => {
		if (direction === 'left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
		}
		else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
		}
	}
	
	return (
		<Container>
			<Arrow direction = "left" onClick = {() => SlideHandler('left')}>
				<IoIosArrowBack />
			</Arrow>
			<Wrapper slideIndex = {slideIndex}>
				<Slide>
					<ImgContainer>
						<Image src = {cover1} alt = ''/>
					</ImgContainer>
					<InfoContainer>
						<Title>SUMMER SALE</Title>
						<Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</Slide>
				<Slide>
					<ImgContainer>
						<Image src = {cover2} alt = ''/>
					</ImgContainer>
					<InfoContainer>
						<Title>SUMMER SALE</Title>
						<Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</Slide>
				<Slide>
					<ImgContainer>
						<Image src = {cover3} alt = ''/>
					</ImgContainer>
					<InfoContainer>
						<Title>SUMMER SALE</Title>
						<Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</Slide>
			</Wrapper>
			<Arrow direction = "right" onClick = {() => SlideHandler('right')}>
				<IoIosArrowForward />
			</Arrow>
		</Container>
	)
}

export default Slider