import { Slug } from "@sanity/types";

export interface ProductModel {
    _id: string;
    name: string;
    slug: slug;
    price: number;
    details: string;
    quantity: number;

    image:{
        asset:{
            _ref: string;
        };
    }
}

export interface BannerModel {
    _id: string;
    image:{
        asset:{
            _ref: string;
        };
    }
    buttonText: string;
    product: string;
    desc: string;
    discount: string;
    saleTime: string;
}

export interface PromoBannerModel {
    _id: string;
    image:{
        asset:{
            _ref: string;
        };
    }
    buttonText: string;
    product: string;
    desc: string;
    discount: string;
    saleTime: string;
}

