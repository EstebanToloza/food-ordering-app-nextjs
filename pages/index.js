import Head from 'next/head'
import axios from 'axios'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'

export default function Home({allProducts}) {
  return (
    <div>
      <Head>
        <title>Food order - Rosario</title>
        <meta name="description" content="La mejor comida de Rosario" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Featured />
        <ProductList allProducts={allProducts} />
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      allProducts: res.data
    }
  }
}
