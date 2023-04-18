import React from 'react'
import "./SingleProduct2.css"

const SingleProduct2 = () => {
return (
<section className="product-detail-container">
    {/*=============== product image container============= */}

    <div className="product-image-container">
        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8923841/2019/6/3/736b9f2c-3a49-41a9-828c-1e0218b62e431559550212164-Minions-by-Kook-N-Keech-Men-Purple-Printed-Round-Neck-T-shir-1.jpg" alt=""/>
        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8923841/2019/6/3/a21db48e-5fa4-4bd6-8a52-203745f247611559550212145-Minions-by-Kook-N-Keech-Men-Purple-Printed-Round-Neck-T-shir-2.jpg" alt="" />
        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8923841/2019/6/3/7d2bb3b5-b6a9-4cac-ab1f-814071ac32f11559550212123-Minions-by-Kook-N-Keech-Men-Purple-Printed-Round-Neck-T-shir-3.jpg" alt="" />
        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8923841/2019/6/3/c8e2c851-ad44-4623-9df0-b03995554c431559550212101-Minions-by-Kook-N-Keech-Men-Purple-Printed-Round-Neck-T-shir-4.jpg" alt="" />
        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8923841/2019/6/3/361af51e-4174-419c-aebc-3bb80120d8f31559550212090-Minions-by-Kook-N-Keech-Men-Purple-Printed-Round-Neck-T-shir-5.jpg" alt="" />
    </div>

    {/*=============== product Details container============= */}

    <div className="product-details-container">
        <div className="product-price-info">
            <h1 className='product-title'>Roadstar</h1>
            <h1 className='product-name'>Men White Pure Cotton T-shirt</h1>
            <div>
                <p>4.3K | 35.3K Ratings</p>
            </div>
        </div>
    </div>

</section>
)
}

export default SingleProduct2