import React from 'react';

import { Effect } from '../../components/hooks/BasicEffect';

const Hooks: React.FC = () => {
    return (
        <React.Fragment>
            <div>
                <Effect />
            </div>
            <style jsx>{`
                div {
                    text-align: center;
                }
            `}</style>
        </React.Fragment>
    );
};

export default Hooks;
