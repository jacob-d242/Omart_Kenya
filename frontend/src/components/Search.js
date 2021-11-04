import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import listProducts  from '../actions/productActions';

export default function Search() {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const category = props.match.params.id ? props.match.params.id : '';
  
    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(listProducts(category));
  
      return () => {
        //
      };
    }, [category,dispatch]);
  
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(listProducts(category, searchKeyword, sortOrder));
    };
    const sortHandler = (e) => {
      setSortOrder(e.target.value);
      dispatch(listProducts(category, searchKeyword, sortOrder));
    };
    return (
        <div>
            <ul className="filter">
        <li>
          <form onSubmit={submitHandler}>
            <input
              name="searchKeyword"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </li>
        <li>
          Sort By{' '}
          <select name="sortOrder" onChange={sortHandler}>
            <option value="">Newest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </li>
      </ul>
        </div>
    )
}
