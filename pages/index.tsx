import React from 'react';
import { Layout } from '../src/components/Layout/Layout';
import Link from 'next/link';

const Index = () => (
  <Link href='/build/[buildId]' as='/build/1'>
    <a>Build 1</a>
  </Link>
);

Index.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Index;
