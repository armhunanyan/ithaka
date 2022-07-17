export interface IService {
    id: number;
    title: string;
    image: string;
    content: string;
    hasSurvey: boolean;
}

export enum ServiceOrientation{
    horizontal, vertical
}