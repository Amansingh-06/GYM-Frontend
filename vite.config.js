import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/GYM-Frontend/', // Replace 'GYM-Frontend' with your GitHub repository name
});
