import styled from 'styled-components';

export const Wrapper = styled.div`
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`;

export const Title = styled.h1`
	font-weight: 200;
`;

export const Item = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === 'total' && '500'};
	font-size: ${(props) => props.type === 'total' && '24px'};
`;

export const ItemText = styled.span``;

export const ItemPrice = styled.span``;

export const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
`;
