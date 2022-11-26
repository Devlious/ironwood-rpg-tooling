import '/styles/globals.css'
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
          <div className="mx-auto w-full max-w-[72rem] mt-[4rem]">
              <Component {...pageProps} />
          </div>
      </Layout>
  )
}

export default MyApp
