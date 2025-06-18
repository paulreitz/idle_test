import type { Component } from 'solid-js';
import { createSignal, onMount, onCleanup } from 'solid-js';
import CharacterScene from '../../game/character-scene';
import styles from './game-canvas.module.scss';

const GameCanvas: Component = () => {
    const [canvasId, _setCanvasId] = createSignal<string>('game-canvas');
    let game: CharacterScene | null = null;

    onMount(() => {
        if (!game) {
            game = new CharacterScene(canvasId());
        }
    });

    onCleanup(() => {
        if (game) {
            game.dispose();
            game = null;
        }
    })

    return (
        <div class={styles.container}>
            <canvas class={styles.canvas} id={canvasId()}></canvas>
        </div>
    );
};

export default GameCanvas;