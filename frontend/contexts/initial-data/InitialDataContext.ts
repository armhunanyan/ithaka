import React from 'react';
import { IClientProps } from './../../components/clients/Clients';

interface IInitialDataContext {
    aboutInfo?: {
        image: string;
        title: string;
        content: string;
    };
    recentNews?: {
        title: string;
        content: string;
    }[],
    clients?: IClientProps[]
}

export const InitialDataContext: React.Context<IInitialDataContext> = React.createContext({});