export interface GamesParams {
    id: string;
    title: string;
    bannerUrl: string;
}

import { GAMES } from './../utils/games';
export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            games: GamesParams;
    }
}