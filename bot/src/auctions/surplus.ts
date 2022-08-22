import type { SurplusAuctionActive } from 'auctions-core/dist/src/types';
import { fetchActiveSurplusAuctions } from 'auctions-core/dist/src/surplus';
import { notifySurplus } from '../notify';

const THRESHOLD_FOR_NEW_AUCTIONS = 5 * 60 * 1000;
const knownAuctionIds = new Set();

const checkIfAuctionIsAlreadyKnown = function (auction: SurplusAuctionActive): boolean {
    return !knownAuctionIds.has(auction.id);
};

const markAuctionAsKnown = function (auction: SurplusAuctionActive): void {
    knownAuctionIds.add(auction.id);
};

export const getNewSurplusAuctionsFromActiveSurplusAuctions = function (
    activeActions: SurplusAuctionActive[]
): SurplusAuctionActive[] {
    const newAuctions = activeActions.filter(activeAction => {
        const isNew = activeAction.auctionStartDate > new Date(Date.now() - THRESHOLD_FOR_NEW_AUCTIONS);
        return isNew && checkIfAuctionIsAlreadyKnown(activeAction);
    });
    console.info(`surplus auctions: "${newAuctions.length}" of "${activeActions.length}" auctions are new`);

    newAuctions.map(markAuctionAsKnown);
    return newAuctions;
};

export const getAllActiveSurplusAuctions = async function (network: string): Promise<SurplusAuctionActive[]> {
    const auctions = await fetchActiveSurplusAuctions(network);
    const auctionIds = auctions.map(auction => `"${auction.id}"`).join(', ');

    console.info(`surplus auctions: found "${auctions.length}" auctions ${auctionIds} on "${network}" network`);

    return auctions;
};

export const loopSurplus = async function (network: string): Promise<void> {
    try {
        const activeAuctions = await getAllActiveSurplusAuctions(network);
        if (activeAuctions.length === 0) {
            return;
        }
        const newAuctions = getNewSurplusAuctionsFromActiveSurplusAuctions(activeAuctions);
        newAuctions.map(notifySurplus);
    } catch (error) {
        console.error('loop error:', error);
    }
};
