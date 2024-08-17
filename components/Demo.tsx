// components/DemoComponent.tsx
import React from 'react';

interface DemoComponentProps {
    message: string;
}

const DemoComponent: React.FC<DemoComponentProps> = ({ message }) => {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
            <h1>Demo Component</h1>
            <p>{message}</p>
        </div>
    );
};

export default DemoComponent;
