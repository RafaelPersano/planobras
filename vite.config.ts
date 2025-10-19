import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega as variáveis de ambiente do Vercel
  // FIX: Replaced process.cwd() with '.' to resolve a TypeScript error where 'process.cwd' was not recognized. This is functionally equivalent as it resolves to the current working directory.
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    // Define as variáveis para que fiquem acessíveis como 'process.env' no código do frontend
    define: {
      'process.env': env
    }
  }
})
