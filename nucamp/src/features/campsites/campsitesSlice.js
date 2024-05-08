import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { PROMOTIONS } from '../../app/shared/PROMOTIONS';


export const selectAllCampsites = () => {
    return CAMPSITES;
};


// export const selectCampsiteById = (id) => {
//     return CAMPSITES.find((campsite) => campsite.id === id);
// };


export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};



export const selectFeaturedPromotion = () => {
    return PROMOTIONS.find((promotion) => promotion.featured);
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};