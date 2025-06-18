import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

const getBase = () => {
    if (process.env.NODE_ENV === 'development') return '/';
    return `/${
    process.env.GITHUB_REPOSITORY?.split('/')[1] || 'idle_test'
  }/`;
}

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  base: getBase(),
  build: {
    target: 'esnext',
  },
});
