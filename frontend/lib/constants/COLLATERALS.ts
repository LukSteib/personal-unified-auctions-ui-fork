const COLLATERALS: Record<string, CollateralConfig> = {
    'AAVE-A': {
        title: 'AAVE',
        ilk: 'AAVE-A',
        symbol: 'AAVE',
        decimals: 18,
    },
    'BAL-A': {
        title: 'Balancer',
        ilk: 'BAL-A',
        symbol: 'BAL',
        decimals: 18,
    },
    'BAT-A': {
        title: 'Basic Attention Token',
        ilk: 'BAT-A',
        symbol: 'BAT',
        decimals: 18,
    },
    'COMP-A': {
        title: 'Compound',
        ilk: 'COMP-A',
        symbol: 'COMP',
        decimals: 18,
    },
    'ETH-A': {
        title: 'Ether',
        ilk: 'ETH-A',
        symbol: 'ETH',
        decimals: 18,
    },
    'ETH-B': {
        title: 'Ether',
        ilk: 'ETH-B',
        symbol: 'ETH',
        decimals: 18,
    },
    'ETH-C': {
        title: 'Ether',
        ilk: 'ETH-C',
        symbol: 'ETH',
        decimals: 18,
    },
    'GUSD-A': {
        title: 'Gemini Dollar',
        ilk: 'GUSD-A',
        symbol: 'GUSD',
        decimals: 2,
    },
    'KNC-A': {
        title: 'Kyber Network Crystal',
        ilk: 'KNC-A',
        symbol: 'KNC',
        decimals: 18,
    },
    'LINK-A': {
        title: 'Chainlink',
        ilk: 'LINK-A',
        symbol: 'LINK',
        decimals: 18,
    },
    'LRC-A': {
        title: 'Loopring',
        ilk: 'LRC-A',
        symbol: 'LRC',
        decimals: 18,
    },
    'MANA-A': {
        title: 'Decentraland',
        ilk: 'MANA-A',
        symbol: 'MANA',
        decimals: 18,
    },
    'PAXUSD-A': {
        title: 'Paxos Standard',
        ilk: 'PAXUSD-A',
        symbol: 'PAX',
        decimals: 18,
    },
    'RENBTC-A': {
        title: 'renBTC',
        ilk: 'RENBTC-A',
        symbol: 'RENBTC',
        decimals: 8,
    },
    'TUSD-A': {
        title: 'True USD',
        ilk: 'TUSD-A',
        symbol: 'TUSD',
        decimals: 18,
    },
    'UNI-A': {
        title: 'Uniswap',
        ilk: 'UNI-A',
        symbol: 'UNI',
        decimals: 18,
    },
    'USDC-A': {
        title: 'USD Coin',
        ilk: 'USDC-A',
        symbol: 'USDC',
        decimals: 6,
    },
    'USDC-B': {
        title: 'USD Coin',
        ilk: 'USDC-B',
        symbol: 'USDC',
        decimals: 6,
    },
    'USDT-A': {
        title: 'Tether USD',
        ilk: 'USDT-A',
        symbol: 'USDT',
        decimals: 6,
    },
    'WBTC-A': {
        title: 'Wrapped Bitcoin',
        ilk: 'WBTC-A',
        symbol: 'WBTC',
        decimals: 8,
    },
    'YFI-A': {
        title: 'yearn.finance',
        ilk: 'YFI-A',
        symbol: 'YFI',
        decimals: 18,
    },
    'ZRX-A': {
        title: '0x',
        ilk: 'ZRX-A',
        symbol: 'ZRX',
        decimals: 18,
    },
    'UNIV2DAIETH-A': {
        title: 'UNIV2DAIETH LP',
        ilk: 'UNIV2DAIETH-A',
        symbol: 'UNIV2DAIETH',
        decimals: 18,
    },
    'UNIV2USDCETH-A': {
        title: 'UNIV2USDCETH LP',
        ilk: 'UNIV2USDCETH-A',
        symbol: 'UNIV2USDCETH',
        decimals: 18,
    },
    'UNIV2ETHUSDT-A': {
        title: 'UNIV2ETHUSDT LP',
        ilk: 'UNIV2ETHUSDT-A',
        symbol: 'UNIV2ETHUSDT',
        decimals: 18,
    },
    'UNIV2WBTCDAI-A': {
        title: 'UNIV2WBTCDAI LP',
        ilk: 'UNIV2WBTCDAI-A',
        symbol: 'UNIV2WBTCDAI',
        decimals: 18,
    },
    'UNIV2WBTCETH-A': {
        title: 'UNIV2WBTCETH LP',
        ilk: 'UNIV2WBTCETH-A',
        symbol: 'UNIV2WBTCETH',
        decimals: 18,
    },
    'UNIV2LINKETH-A': {
        title: 'UNIV2LINKETH LP',
        ilk: 'UNIV2LINKETH-A',
        symbol: 'UNIV2LINKETH',
        decimals: 18,
    },
    'UNIV2UNIETH-A': {
        title: 'UNIV2UNIETH LP',
        ilk: 'UNIV2UNIETH-A',
        symbol: 'UNIV2UNIETH',
        decimals: 18,
    },
    'UNIV2AAVEETH-A': {
        title: 'UNIV2AAVEETH LP',
        ilk: 'UNIV2AAVEETH-A',
        symbol: 'UNIV2AAVEETH',
        decimals: 18,
    },
    'UNIV2DAIUSDT-A': {
        title: 'UNIV2DAIUSDT LP',
        ilk: 'UNIV2DAIUSDT-A',
        symbol: 'UNIV2DAIUSDT',
        decimals: 18,
    },
    'UNIV2DAIUSDC-A': {
        title: 'UNIV2DAIUSDC LP',
        ilk: 'UNIV2DAIUSDC-A',
        symbol: 'UNIV2DAIUSDC',
        decimals: 18,
    },
};

export const getAllCollateralSymbols = function (): string[] {
    const collateralSymbols = Object.values(COLLATERALS).map(collateral => collateral.symbol);
    return Array.from(new Set(collateralSymbols));
};

export default COLLATERALS;
