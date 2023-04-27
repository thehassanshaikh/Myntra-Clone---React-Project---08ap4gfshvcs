import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../Context/ApiContext";
import "./Sidebar.css"
export const Sidebar = () => {

    const { apiData, setApiData } = useContext(ApiContext);

    //Created new use State with empty array to store the checked catgeory data
    const [checkedCategory, setCheckedCategory] = useState([]);
    //created new product use State and copying the apidata init
    const [newProduct, setNewProduct] = useState(apiData);

    console.log(apiData);

    const filterProduct = (e) => {
        if (e.target.checked) {
            setCheckedCategory([...checkedCategory, e.target.name]);
        } else {
            checkedCategory.splice(checkedCategory.indexOf(e.target.name), 1);
            setCheckedCategory([...checkedCategory]);
        }
    }


    const searchAndFilter = () => {
        const searchResult = apiData.filter((product) => {
            console.log(product.category, checkedCategory.includes(product.category))
            if (checkedCategory.includes(product.category)) {
                return product;
            }
        });
        setApiData(searchResult);
    }

    useEffect(() => {
  
        if (checkedCategory.length === 0) {
            setApiData(newProduct);
        } else {

            searchAndFilter();
        }

    }, [checkedCategory])

    useEffect(() => {
        setApiData(apiData);
        setNewProduct(apiData);
    }, [])

    return (
        <aside className="sidebar-container">
            <div className="filter-holder">
                {/* Brands category */}
                <div className="brands">
                    <h3 className="sidebar-lable">Filter</h3>
                    <ul>
                        <li className="category-items"><input type="checkbox" name="all" onChange={filterProduct} />All</li>
                        <li className="category-items"><input type="checkbox" name="men's clothing" onChange={filterProduct} />Mens</li>
                        <li className="category-items"><input type="checkbox" name="women's clothing" onChange={filterProduct} />Womens</li>
                        <li className="category-items"><input type="checkbox" name="jewelery" onChange={filterProduct} />Jewellry</li>
                        <li className="category-items"><input type="checkbox" name="electronics" onChange={filterProduct} />Electronics</li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}