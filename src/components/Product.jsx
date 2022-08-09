import React from 'react'
import styled from 'styled-components'
import {AiOutlineShoppingCart, AiOutlineSearch, AiOutlineHeart} from 'react-icons/ai'
import product1 from '../assets/product1.jpeg'
import product2 from '../assets/product2.jpeg'

const Info = styled.div`
opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease;
`

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f5fbfd;
	position: relative;

	&:hover ${Info}{
		opacity: 1;
	}
`

const Circle = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: white;
	position: absolute;
`
const Image = styled.img`
	height: 75%;
	z-index: 2;
`
const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
	transition: all 0.2s ease;

	&:hover{
		background-color: #f1f8f8;
		transform: scale(1.1);
	}
`

const Product = ({item}) => {
	return (
		<Container>
			<Circle />
			<Image src = {item.img}/>
			<Info>
				<Icon>
					<AiOutlineShoppingCart style = {{fontSize: '22px'}}/>
				</Icon>
				<Icon>
					<AiOutlineSearch style = {{fontSize: '22px'}}/>
				</Icon>
				<Icon>
					<AiOutlineHeart style = {{fontSize: '22px'}}/>
				</Icon>
			</Info>
		</Container>
	)
}

export default Product