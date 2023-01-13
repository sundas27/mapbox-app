export interface IViewPort {
    width?: number;
    height?: number;
    latitude?: number;
    longitude?: number;
    zoom?: number;
}

export interface ILocation {
    company?: string;
    address?: string;
    viewPort?: IViewPort;
}
