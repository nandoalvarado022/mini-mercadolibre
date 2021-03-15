import Head from 'next/head'
import Wrapper from '../../src/components/wrapper/Wrapper'
import ProductList from '../../src/components/productList/ProductList'
export default function Items(props) {
  return (<>
    <Head>
      <title>Mercadolibre Developer Test</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Wrapper>
      <ProductList products={props.products} />
    </Wrapper>
  </>
  )
}

Items.getInitialProps = async ({ query }) => {
  let url = "http://localhost:8080/api/items"
  if (query.search) url = `http://localhost:8080/api/items?q=${query.search}`
  const res = await fetch(url)
  const products = await res.json()
  return { products }
}