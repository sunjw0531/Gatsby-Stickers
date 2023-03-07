import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function AboutUs() {
  return (
    <Layout title="About us">
      <p>We are the happies sticker store</p>
    </Layout>
  );
}

// export function Head() {
//   return <title>About Us!</title>;
// }

export const Head = () => <Seo title="About Us" />;
