import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({plugins:[react()],base:'./',build:{rollupOptions:{output:{manualChunks(id){if(id.includes('/node_modules/'))return 'libraries';if(id.includes('/content/de/guides/'))return 'chapters';if(id.includes('/content/de/'))return 'templates';}}}}});
