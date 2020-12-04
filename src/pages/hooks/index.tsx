import React from 'react';

import { App, Counter } from '../../components/hooks/BasicState';

const Hooks: React.FC = () => {
    return (
        <React.Fragment>
            <div>
                <Counter />
                <App name="ぺんぺん" price={100} />
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
