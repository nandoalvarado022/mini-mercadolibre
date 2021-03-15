import Head from 'next/head'
import Wrapper from '../src/components/wrapper/Wrapper'
import ProductList from '../src/components/productList/ProductList'
export default function Home(props) {
  return (<>
    <Head>
      <title>Mercadolibre Developer Test</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Wrapper>
    </Wrapper>
  </>
  )
}