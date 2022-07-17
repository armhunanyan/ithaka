import { INews } from './../../interfaces/news';
import { IAbout } from './../../interfaces/about';
import { IClient } from './../../interfaces/client';
import React from 'react';

interface IInitialDataContext {
    aboutInfo?: IAbout | null;
    setAboutInfo?: any;
    recentNews?: INews[] | null,
    setRecentNews?: any;
    clients?: IClient[] | null,
    setClients?: any;
}

export const InitialDataContext: React.Context<IInitialDataContext> = React.createContext({});