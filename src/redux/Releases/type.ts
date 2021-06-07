export const SET_NEW_RELEASES = 'SET_NEW_RELEASES';
export const SET_FEATURED = 'SET_FEATURED';
export const SET_CATEGORIES = 'SET_CATEGORIES';


interface SetNewReleases {
    type: typeof SET_NEW_RELEASES;
    payload: any;
}

interface SetFeatured {
    type: typeof SET_FEATURED;
    payload: any;
}

interface SetCategories {
    type: typeof SET_CATEGORIES;
    payload: any;
}

export type ReleasesActionTypes = SetNewReleases | SetFeatured | SetCategories;