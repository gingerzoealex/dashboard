import { MetaTags } from '@redwoodjs/web'

import Stats from 'src/components/Stats/Stats'
import Table from 'src/components/Table/Table'
// import { useNonProfitContext } from 'src/layouts/MainLayout/MainLayout.context'

const HomePage = () => {
  // How to pull the nonpofit ID form context
  // const { nonprofit, setNonProfit } = useNonProfitContext()

  const homepageStats = [
    { name: 'Total Donations', statistic: '42' },
    {
      name: 'Total Donations Amount',
      statistic: '£20.50',
    },
    {
      name: 'Donations with Gift Aid (%)',
      statistic: '57%',
    },
  ]

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="mx-auto mb-4 max-w-7xl pb-2">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          Stats
        </h2>
      </div>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {homepageStats.map((item) => (
          <Stats key={item.name} {...item} />
        ))}
      </dl>

      <div className="relative my-4 pb-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>

      <div className="mx-auto mb-4 max-w-7xl pb-2">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          Donations
        </h2>
      </div>

      <div className="relative h-96 overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75">
        <Table tableData={homepageStats} />
      </div>
    </>
  )
}

export default HomePage
