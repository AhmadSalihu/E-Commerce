import React, { useEffect } from 'react';
import ProductsCard from './ProductsCard';
import { useSelector, useDispatch } from 'react-redux';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { productActions } from './ReduxStore/productAction';

const HomeScreen = () => {
	const productList = useSelector(state => state.productList);
	const { products, error, loading } = productList;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(productActions())
	}, [dispatch]);

	return (
		<div>
			{
				loading ? <LoadingBox></LoadingBox>
					: error ? <MessageBox variant="danger">{error}</MessageBox>
						:
				<div className="row center">
					{
						products.map(products => (
							<ProductsCard key={products._id} products={products} />
						))
					}
			</div>
			}
		</div>
	)
}

export default HomeScreen


