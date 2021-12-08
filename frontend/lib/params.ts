import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';
import memoizee from 'memoizee';
import getProvider from '~/lib/provider';
import abacABI from '~/lib/abis/ABACI.json';
import { getAllCollateralTypes } from '~/lib/constants/COLLATERALS';
import { RAY_NUMBER_OF_DIGITS } from '~/lib/constants/UNITS';
import { getLiquidationsContractsByNetwork } from '~/lib/contracts';

const PARAMS_CACHE_SECONDS = 60 * 60 * 24 * 30;

const getCalcAddressByCollateralType = function (network: string, collateralType: string): string {
    const suffix = collateralType.replace('-', '_');
    const contracts = getLiquidationsContractsByNetwork(network);
    const calcAddress = contracts[`MCD_CLIP_CALC_${suffix}`];

    if (!calcAddress) {
        throw new Error(`"${collateralType}" contract is not found on the "${network}" network`);
    }
    return calcAddress;
};

const _fetchCalcParametersByCollateralType = async function (
    network: string,
    collateralType: string
): Promise<MakerParams> {
    const address = getCalcAddressByCollateralType(network, collateralType);
    const provider = getProvider(network);
    const contract = await new ethers.Contract(address, abacABI, provider);

    const cut = await contract.cut();
    const step = await contract.step();

    return {
        step: new BigNumber(step),
        cut: new BigNumber(cut).shiftedBy(-RAY_NUMBER_OF_DIGITS),
    };
};

export const fetchCalcParametersByCollateralType = memoizee(_fetchCalcParametersByCollateralType, {
    maxAge: PARAMS_CACHE_SECONDS,
    promise: true,
});

export const checkAllCalcParameters = async function (network: string): Promise<void> {
    const errors = [];
    const successes = [];
    for (const collateral of getAllCollateralTypes()) {
        try {
            const calcParameters = await fetchCalcParametersByCollateralType(network, collateral);
            successes.push(collateral);
            console.info(
                'getAllCacParameters:',
                collateral,
                new BigNumber(calcParameters.step).toNumber(),
                new BigNumber(calcParameters.cut).toNumber()
            );
        } catch (error) {
            errors.push(collateral);
            console.error('getAllCacParameters error', collateral, error);
        }
    }
    console.info('fetchCalcParameters finished, could not fetch collaterals:', errors, successes);
};
