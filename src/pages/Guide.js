import React from 'react'

const Guide = () => {

  return (
    <div className='mt-20'>
    <h1 className='text-2xl font-bold text-center'>Guide</h1>
    <div className="w-full px-8 mx-auto mt-20 space-y-2 shadow lg:max-w-md">
        <details className="p-4 rounded-lg">
            <summary className="font-semibold"> Fund your account using  Gift cards</summary>
            <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                1. Purchase a gift card
                </p>
            </div>
            <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                2. For example if you purchased a steam gift card, click on steam icon.
                </p>
            </div>
            <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                3. Upload photo of the card and click confirm. Funds will be available in your account within 7 minutes.
                </p>
            </div>
        </details>
        <details className="p-4 rounded-lg">
            <summary className="font-semibold">
            Fund your account using USDT
            </summary>
            <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                1. Sign up to any Crypto Exchange available in your country. For example we highly recommend binance, crypto.com and many more. Also feel free to check crypto exchanges available in your country.
                </p>
            </div>
            <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                2. Buy USDT from any of the Crypto Exchange available in your country and send to your Google realestate USDT walllet address. Always make sure to select BNB Smart Chain Network also known as (BEP20) When sending USDT.

                </p>
            </div>
            <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                3. Take a screenshot/photo of the successful transaction and upload.
It takes only 2 mins to confirm your transaction. Funds will be available immediately.
                </p>
            </div>
        </details>
        <details className="p-4 rounded-lg">
            <summary className="font-semibold">
            How to withdraw
            </summary>
            <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                1. Open your  exa realestate account 
                </p>
            </div>
            <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                2. Click on withdraw
                </p>
            </div>
            <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                3. Enter Amount
                </p>
            </div>
            <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                4. Confirm 
                </p>
            </div>
            <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                5. Enter your Usdt wallet address. For example if you use binance, simply enter your binance address (usdt)
                </p>
            </div>
            <div className="mt-3">
                <p className="text-sm leading-6 text-gray-600">
                6. Click withdraw.
                </p>
            </div>
        </details>
    </div>
</div>

  )
}

export default Guide