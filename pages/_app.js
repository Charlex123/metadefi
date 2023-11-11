import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import "../styles/main.css";
import "../styles/Home.module.css";
import "../styles/globals.css";
import "../styles/ozc.css";
import Layout from "../components/Layout";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'


config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
