import Sidebar from './Sidebar';
import Article1 from './Article1';
import Article2 from './Article2';
import { useState } from 'react';
import LoremIpsum from './LoremIpsum';

// Figma project does not contain information/view about other topics so it will be lorem ipsums..

type ArticleComponentMap = {
  [key: string]: () => React.ReactElement;
};

const articleComponents: ArticleComponentMap = {
  main_info: () => <Article1 />,
  subscription_gen: () => <Article2 />,
  order_creation: () => <LoremIpsum />,
  get_callback_info: () => <LoremIpsum />,
  checking_order: () => <LoremIpsum />,
  get_deposit_list: () => <LoremIpsum />,
  get_balance: () => <LoremIpsum />,
  get_curr_cour: () => <LoremIpsum />,
  server_status: () => <LoremIpsum />,
  market_pricelist: () => <LoremIpsum />,
  market_search: () => <LoremIpsum />,
  market_buy: () => <LoremIpsum />,
  market_get_info: () => <LoremIpsum />,
  market_history: () => <LoremIpsum />,
  market_websockets: () => <LoremIpsum />,
};

const ApiPage = () => {
  const [currentArticleKey, setCurrentArticleKey] =
    useState<string>('main_info');

  const CurrentArticle = articleComponents[currentArticleKey];

  const changeArticle = (articleKey: string) => {
    return articleKey === 'main_info' || 'subscription_gen'
      ? setCurrentArticleKey(articleKey)
      : setCurrentArticleKey('loremipsum');
  };

  return (
    <section className="subpage">
      <h1 className="subpage_title">API</h1>
      <div className="content">
        <Sidebar
          currentArticleKey={currentArticleKey}
          changeArticle={changeArticle}
        />
        <CurrentArticle />
      </div>
    </section>
  );
};

export default ApiPage;
