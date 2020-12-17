import React from 'react';

export default function StartPage() {
    return (
        <div>
            <button onClick={() => window.open('/viewer')}>Open document</button>
        </div>
    );
}