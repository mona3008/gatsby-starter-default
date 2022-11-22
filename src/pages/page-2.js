import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <h2>This is About me I hope</h2>
    <p> test </p>
    <Link to= "/about">get there maybe</Link>
  </Layout>
  
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
