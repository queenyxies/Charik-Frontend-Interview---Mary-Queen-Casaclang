import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Customize the port if needed
  },
  build: {
    outDir: 'dist', // Customize the output directory if needed
  },
});