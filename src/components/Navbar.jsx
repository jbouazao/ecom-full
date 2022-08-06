import React from 'react'
import styled from "styled-components"
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Container = styled.div`
	height: 60px;
`

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`
const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
`

const SearchContainer = styled.div`
	border: 1px solid lightgrey;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`

const Input = styled.input`
	border: none;
`

const Center = styled.div`
	flex: 1;
	text-align: center;
`

const Logo = styled.h1`
	font-weight: bold;
`

const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 30px;
`

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
`

const CartIconWrapper = styled.div`
	position: relative;
	width: 40px;
`

const CartBadge = styled.div`
	position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			right: 0px;
			top: -3px;
			width: 18px;
			height: 18px;
			background-color: rgb(151, 0, 0);
			border-radius: 100%;
			font-size: 12px;
			color: white;
`


const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<AiOutlineSearch style = {{color: 'gray'}}/>
					</SearchContainer>
				</Left>
				<Center>
					<Logo>YooCommerce.</Logo>
				</Center>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<MenuItem>
						<CartIconWrapper>
							<CartBadge>2</CartBadge>
							<AiOutlineShoppingCart style = {{color: 'rgb(52, 65, 40)', width: '30px', height: '30px'}}/>
						</CartIconWrapper>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	)
}

export default Navbar