import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Definición de la configuración de Vite/Vitest
export default defineConfig({
  plugins: [react()],
  
  // CRÍTICO: Configuración de Vitest para testeo unitario
  test: {
    environment: 'jsdom', // Simula el entorno del navegador (DOM)
    globals: true, // Permite usar 'describe', 'it', 'expect' globalmente
    setupFiles: './src/setupTests.js', // Archivo para configuración inicial de RTL
    css: true, 
    // Patrón para incluir archivos de prueba
    // Busca archivos .test.jsx dentro de src y src/__tests__
    include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)', 'src/**/__tests__/*.{test,spec}.?(c|m)[jt]s?(x)'],
  },
})
