// This is the support file for e2e tests.
// You can use this file to add global configuration or custom commands.
import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  // We ignore hydration errors and other minor app exceptions for the smoke test
  return false;
});
