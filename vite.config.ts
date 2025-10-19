import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega as variáveis de ambiente do Vercel
  // FIX: Replaced `process.cwd()` with `'.'` to avoid a TypeScript type error on `process.cwd`.
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    // Define as variáveis para que fiquem acessíveis como 'process.env' no código do frontend
    define: {
      'process.env.SUPABASE_URL': JSON.stringify(env.SUPABASE_URL),
      'process.env.SUPABASE_ANON_KEY': JSON.stringify(env.SUPABASE_ANON_KEY),
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})
