import Product from "./product/Product";

export default function ProductList(props) {
    const products = props.products.items
    return <div id="ProductList" className="width980">
        {
            products.map(item => {
                return <Product data={item} />
            })
        }
    </div>
}