import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  let headers = {
    "Content-Type": "application/graphql",
    "X-Shopify-Storefront-Access-Token": process.env.SF_TOKEN || "",
  };
  const productQuery = () => `
  query {
    products(first: 10) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
  `;

  let options = {
    method: "POST",
    headers: { ...headers },
    body: productQuery(),
  };

  let res = await fetch(
    "https://cuka-estudio.myshopify.com/api/2022-10/graphql.json",
    options
  );
  let data = await res.json();
  return data;
};

export default function Index() {
  let { data } = useLoaderData();
  let productArray = data.products.edges;
  return (
    <section>
      {productArray.map(({ node }) => (
        <div key={node.id}>{node.title}</div>
      ))}
    </section>
  );
}
