import Head from 'next/head'
import Wrapper from '../../src/components/wrapper/Wrapper'
import ProductDetail from "../../src/components/ProductDetail/ProductDetail";

export default function PageProductDetail(props) {
    return <>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Wrapper>
            {!props.product.description.error && <ProductDetail data={props.product} />}
            {props.product.description.error && <div>no se encontro el producto :(</div>}
        </Wrapper>
    </>
}

PageProductDetail.getInitialProps = async ({ query: { id } }) => {
    // Consultando detalle del producto
    const res = await fetch(`http://localhost:8080/api/items/${id}`)
    const product = await res.json()
    return { product }
}