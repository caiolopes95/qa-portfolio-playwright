
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Diretório onde estão os testes
  testDir: './tests',

  // Permite executar testes em paralelo
  fullyParallel: true,

  // Impede o uso acidental de test.only no CI
  forbidOnly: !!process.env.CI,

  // Em CI, repete testes com falha até 2 vezes
  retries: process.env.CI ? 2 : 0,

  // Em CI, utiliza apenas 1 worker
  workers: process.env.CI ? 1 : undefined,

  // Relatórios de execução
  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }],
    ['junit', {
      outputFile: 'test-results/results.xml'
    }]
  ],

  // Configurações compartilhadas entre os testes
  use: {

    // URL base da aplicação
    baseURL: 'https://www.saucedemo.com/',

    // Guarda o trace quando um teste falha
    trace: 'retain-on-failure',

    // Captura screenshot somente em falhas
    screenshot: 'only-on-failure',
  },

  // Navegadores utilizados nos testes
  projects: [

    // Chromium
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Firefox - habilitaremos na etapa de cross-browser    
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    

    // WebKit - habilitaremos na etapa de cross-browser

    
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    

  ],

});
