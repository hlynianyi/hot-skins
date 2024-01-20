type Topic = {
  name: string;
  id: string;
  type: 'unique' | 'loremipsum';
};

interface SidebarProps {
  currentArticleKey: string;
  changeArticle: Function;
}

const Sidebar: React.FC<SidebarProps> = ({
  currentArticleKey,
  changeArticle,
}) => {
  const topics: Topic[] = [
    { name: 'Main information', id: 'main_info', type: 'unique' },
    {
      name: 'Subscription generation',
      id: 'subscription_gen',
      type: 'loremipsum',
    },
    { name: 'Order creation', id: 'order_creation', type: 'unique' },
    {
      name: 'Getting information about order with callback',
      id: 'get_callback_info',
      type: 'loremipsum',
    },
    {
      name: 'Checking order status',
      id: 'checking_order',
      type: 'loremipsum',
    },
    {
      name: 'Getting list of deposits',
      id: 'get_deposit_list',
      type: 'loremipsum',
    },
    {
      name: 'Getting balance on site',
      id: 'get_balance',
      type: 'loremipsum',
    },
    {
      name: 'Getting currencies and courses',
      id: 'get_curr_cour',
      type: 'loremipsum',
    },
    { name: 'Server status', id: 'server_status', type: 'loremipsum' },
    {
      name: 'Market: price-list',
      id: 'market_pricelist',
      type: 'loremipsum',
    },
    { name: 'Market: search', id: 'market_search', type: 'loremipsum' },
    { name: 'Market: buy a skin', id: 'market_buy', type: 'loremipsum' },
    {
      name: 'Market: get information',
      id: 'market_get_info',
      type: 'loremipsum',
    },
    { name: 'Market: history', id: 'market_history', type: 'loremipsum' },
    {
      name: 'Market: websockets',
      id: 'market_websockets',
      type: 'loremipsum',
    },
  ];

  return (
    <aside className="sidebar">
      {topics.map(topic => (
        <button
          onClick={() => changeArticle(topic.id)}
          key={topic.id}
          className={currentArticleKey === topic.id ? 'active' : ''}
        >
          {topic.name}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
