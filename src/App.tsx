import type { Component } from 'solid-js';
import styles from './App.module.scss';

import GameCanvas from './components/game-canvas/game-canvas';

const App: Component = () => {
    return (
        <div class={styles.App}>
            <GameCanvas></GameCanvas>
        </div>
    );
};

export default App;
