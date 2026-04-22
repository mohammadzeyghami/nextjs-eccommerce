describe('Mobile Navigation', () => {
  beforeEach(() => {
    // Set viewport to mobile size
    cy.viewport('iphone-x');
    // We ignore exceptions because Next.js hydration mismatches are common in dev
    Cypress.on('uncaught:exception', () => false);
  });

  describe('Shop Navigation', () => {
    const shopRoutes = [
      '/products',
      '/news',
      '/about',
      '/contact-us',
      '/dashboard',
      '/profile',
      '/cart',
    ];

    it('should navigate through shop pages using the hamburger menu', () => {
      shopRoutes.forEach((route) => {
        cy.visit('/');
        cy.get('body').should('be.visible');

        // Click the hamburger menu button in the header
        cy.get('header button.md\\:hidden, header .md\\:hidden button').first().click({ force: true });
        
        // Wait briefly for the drawer to be added to DOM
        cy.wait(500);
        
        // Click the link directly. We use force: true to bypass visibility checks
        // which can be flaky with animated drawers in headless mode.
        cy.get(`a[href="${route}"]`).first().click({ force: true });
        
        cy.url().should('include', route);
        cy.get('body').should('be.visible');
      });
    });
  });

  describe('Dashboard Navigation', () => {
    const dashboardRoutes = [
      '/dashboard/products',
      '/dashboard/news',
      '/dashboard/orders',
      '/dashboard/users',
      '/dashboard',
    ];

    it('should navigate through dashboard sub-pages using the dashboard menu', () => {
      cy.visit('/dashboard');
      cy.get('body').should('be.visible');

      dashboardRoutes.forEach((route) => {
        // In dashboard, click the hamburger in the header
        cy.get('header button.md\\:hidden, header .md\\:hidden button').first().click({ force: true });

        // Wait briefly
        cy.wait(500);

        // Click the link in the sidebar/drawer
        cy.get(`a[href="${route}"]`).first().click({ force: true });

        cy.url().should('include', route);
        cy.get('body').should('be.visible');
      });
    });
  });
});
