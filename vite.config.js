import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/TshirtDesign/', // Change this to your repository name
  plugins: [react()],
});
