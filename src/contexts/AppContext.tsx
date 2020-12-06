import React, { createContext } from 'react';

import { Event, EventsAction } from '../reducers';

type ContextType = {
    state: Event[];
    dispatch: React.Dispatch<EventsAction>;
};

const AppContext = createContext({} as ContextType);

export default AppContext;
