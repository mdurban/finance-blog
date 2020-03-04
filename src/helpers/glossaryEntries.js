const glossaryEntries = () => ([
    { entry: "Asset", definition: "A resource you own that has economic value and can generate money. Cash, stocks, bonds and your home are all considered assets." },
    { entry: "Bond", definition: "A loan taken out by someone (usually the government or a corporation) when they want to raise money. This debt is then payed back at a later date to the investor, or issuer (the person who bought the bond). It usually accrues interest, which is also payed to the issuer." },
    { entry: "Dividend", definition: "Money that is payed on a regular schedule by a company to its shareholders (those who own stock in the company). Not all stocks yield dividends." },
    { entry: "ETF (Exchange-Traded Fund)", definition: "A fund that is made up of a collection of assets (usually stocks) and are traded on the stock exchange like traditional stocks. Most ETFs track an index, similar to an index fund. They tend to have low fees." },
    { entry: "Fiduciary", definition: "Someone that is legally obligated to give financial advice that is in the best interest of the client." },
])

export { glossaryEntries }
/*
        <div className='glossary-container'>
            <h1 className='glossary-title'>Glossary of Terms</h1>
            <div className='glossary-entry'>
                <span className='entry-name'>Asset</span>
                <span className='entry-definition'> - Something can generate cash flow, reduce expenses, or improve sales, regardless of whether it's manufacturing equipment or a patent.</span>
            </div>
            <div className='glossary-entry'>
                <span className='entry-name'>Bond</span>
                <span className='entry-definition'> - Something that represents a loan made by an investor to a borrower (typically corporate or governmental).</span>
            </div>
            <div className='glossary-entry'>
                <span className='entry-name'>Dividend</span>
                <span className='entry-definition'> - The distribution of reward from a portion of the company's earnings and is paid to a class of its shareholders.</span>
            </div>
            <div className='glossary-entry'>
                <span className='entry-name'>Stock</span>
                <span className='entry-definition'> - A type of security that signifies proportionate ownership in the issuing corporation. This entitles the stockholder to that proportion of the corporation's assets and earnings. Stocks are bought and sold predominantly on stock exchanges, though there can be private sales as well, and are the foundation of many individual investors' portfolios</span>
            </div>

            <div className='glossary-entry'>
                <span className='entry-name'>Liquidity</span>
                <span className='entry-definition'> - Liquidity describes the degree to which an asset or security can be quickly bought or sold in the market at a price reflecting its intrinsic value. In other words: the ease of converting it to cash.</span>
            </div>

            <div className='glossary-entry'>
                <span className='entry-name'>IRA (Individual Retirement Account)</span>
                <span className='entry-definition'> - Liquidity describes the degree to which an asset or security can be quickly bought or sold in the market at a price reflecting its intrinsic value. In other words: the ease of converting it to cash.</span>
            </div>

            <div className='glossary-entry'>
                <span className='entry-name'>401(k)</span>
                <span className='entry-definition'> - Liquidity describes the degree to which an asset or security can be quickly bought or sold in the market at a price reflecting its intrinsic value. In other words: the ease of converting it to cash.</span>
            </div>

            <div className='glossary-entry'>
                <span className='entry-name'>Traditional Investing Account</span>
                <span className='entry-definition'> - Liquidity describes the degree to which an asset or security can be quickly bought or sold in the market at a price reflecting its intrinsic value. In other words: the ease of converting it to cash.</span>
            </div>

            <div className='glossary-entry'>
                <span className='entry-name'>Roth Investing Account</span>
                <span className='entry-definition'> - Liquidity describes the degree to which an asset or security can be quickly bought or sold in the market at a price reflecting its intrinsic value. In other words: the ease of converting it to cash.</span>
            </div>

            <div className='glossary-entry'>
                <span className='entry-name'>Mutual Fund</span>
                <span className='entry-definition'> - Liquidity describes the degree to which an asset or security can be quickly bought or sold in the market at a price reflecting its intrinsic value. In other words: the ease of converting it to cash.</span>
            </div>

            <div className='glossary-entry'>
                <span className='entry-name'>Index Fund</span>
                <span className='entry-definition'> - Liquidity describes the degree to which an asset or security can be quickly bought or sold in the market at a price reflecting its intrinsic value. In other words: the ease of converting it to cash.</span>
            </div>

            <div className='glossary-entry'>
                <span className='entry-name'>ETF (Exchange-Traded Fund)</span>
                <span className='entry-definition'> - Liquidity describes the degree to which an asset or security can be quickly bought or sold in the market at a price reflecting its intrinsic value. In other words: the ease of converting it to cash.</span>
            </div>

            <div className='glossary-entry'>
                <span className='entry-name'>Yield</span>
                <span className='entry-definition'> - Liquidity describes the degree to which an asset or security can be quickly bought or sold in the market at a price reflecting its intrinsic value. In other words: the ease of converting it to cash.</span>
            </div>

            <div className='glossary-entry'>
                <span className='entry-name'>Inflation</span>
                <span className='entry-definition'> - Liquidity describes the degree to which an asset or security can be quickly bought or sold in the market at a price reflecting its intrinsic value. In other words: the ease of converting it to cash.</span>
            </div>


             <div>Investing</div>
            <div>401(k)</div>
            <div>Roth</div>
            <div>Traditional</div>
            <div>IRA - An individual retirement account (IRA) is a tax-advantaged investing tool that individuals use to earmark funds for retirement savings.</div>
            <div>Fiduciary - A fiduciary is a person or organization that acts on behalf of another person or persons to manage assets.</div>
            <div>Hedge Fund</div>
            <div>Inflation</div>
            <div>Net Worth - Net worth is the measure of the wealth of an entity, person, or corporation, as well as sectors and countries. Simply, net worth is defined as the difference between assets and liabilities.</div>
            <div>Rule of 72 - If an investment scheme promises an 8% annual compounded rate of return, it will take approximately (72 / 8) = 9 years to double the invested money.</div>
            <div>Trust Fund - A trust fund is an estate planning tool that is legally established to hold property or assets for a person or organization, managed by a trustee, who is a neutral third party. Trust funds can hold a variety of assets such as money, property, stock, a business, or a combination of many different properties or assets.</div>
            <div>Yield - Yield refers to the earnings generated and realized on an investment over a particular period of time. It's expressed as a percentage based on the invested amount, current market value, or face value of the security. It includes the interest earned or dividends received from holding a particular security. Depending on the valuation (fixed vs. fluctuating) of the security, yields may be classified as known or anticipated.</div>
            <div>ETF - An exchange-traded fund (ETF) is a type of security that involves a collection of securities—such as stocks—that often tracks an underlying index, although they can invest in any number of industry sectors or use various strategies. ETFs are in many ways similar to mutual funds; however, they are listed on exchanges and ETF shares trade throughout the day just like ordinary stock.</div>
            <div>Index Fund - An index fund is a type of mutual fund with a portfolio constructed to match or track the components of a financial market index. An index mutual fund is said to provide broad market exposure, low operating expenses and low portfolio turnover. Index funds are generally considered ideal core portfolio holdings for retirement accounts, such as individual retirement accounts (IRAs) and 401(k) accounts.</div>
            <div>Mutual Fund - A mutual fund is a type of financial vehicle made up of a pool of money collected from many investors to invest in securities like stocks, bonds, money market instruments, and other assets. Mutual funds are operated by professional money managers, who allocate the fund's assets and attempt to produce capital gains or income for the fund's investors.</div>

*/
