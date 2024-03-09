import React from 'react'

const DashboardHeader = () => {
    return (
        <>
            <div className='col-span-4 xl:col-span-3 border-2 rounded-2xl p-4 mx-4'>
                <h2 className='text-3xl font-semibold'>Lucas Medina Wallet</h2>
                <p className='text-2xl font-medium'>$500,000.00</p>
            </div>

            <div className='col-span-4 xl:col-span-1 border-2 rounded-2xl p-4 m-4 xl:m-0'>
                <h2 className='text-3xl font-semibold'>This Month</h2>
                <p className='text-2xl font-medium'>+ $25,350.00</p>
            </div>
        </>
    )
}

export default DashboardHeader
