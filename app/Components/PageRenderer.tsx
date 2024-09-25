"use client"
import React, { Suspense, useContext } from 'react';
import { PageContext } from '../Controllers/pageContext';
import ArticleLoading from './ArticleLoading';
const PageRenderer = () => {
  const { currentPage } = useContext(PageContext)

  // Dynamically import the component based on currentPage
  const LazyPage = React.lazy(() => import(`/app/pages/${currentPage}.tsx`));

  return (
    <div>
      <Suspense fallback={<ArticleLoading />}>
        <LazyPage />
      </Suspense>
    </div>
  );
};

export default PageRenderer;