import React from 'react'

import StatCard from '../StatCard/StatCard'

const DonationStatistics = ({ paymentData }) => {
  const getTotalNumberDonations = () => {
    return paymentData.length
  }
  const getTotalDonationAmount = () => {
    return paymentData.reduce(
      (total, currentItem) => (total = total + currentItem.amountPaid),
      0
    )
  }

  const getGiftAidDonationPercentage = () => {
    const giftAidCount = paymentData.filter(({ giftAided }) => {
      return giftAided === true
    })
    const percentage = (getTotalNumberDonations() / giftAidCount.length) * 100
    return Math.round(percentage)
  }

  console.log('payments??', paymentData)
  getGiftAidDonationPercentage()

  return (
    <div className="donation-statistics">
      <StatCard
        title="Total Donations"
        statistic={getTotalNumberDonations().toString()}
      />
      <StatCard
        title="Total Donations Amount"
        statistic={'£' + getTotalDonationAmount().toString()}
      />
      <StatCard
        title="Donations with Gift Aid (%)"
        statistic={getGiftAidDonationPercentage().toString() + '%'}
      />
    </div>
  )
}

export default DonationStatistics
