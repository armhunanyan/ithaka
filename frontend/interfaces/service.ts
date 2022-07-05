export interface IService {
    id: number;
    title: string;
    image: string;
    description: string;
    hasSurvey: boolean;
}

export enum ServiceOrientation{
    horizontal, vertical
}