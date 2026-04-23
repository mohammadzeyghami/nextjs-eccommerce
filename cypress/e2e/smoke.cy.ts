describe('Smoke Test - Page Rendering', () => {
  const routes = [
    '/',
    '/about',
    '/cart',
    '/contact-us',
    '/news',
    '/products',
    '/dashboard',
    '/dashboard/products',
    '/dashboard/news',
    '/dashboard/orders',
    '/dashboard/users',
    '/login',
    '/profile',
    '/reset-password',
  ];

  beforeEach(() => {
    // Set viewport to desktop size as requested
    cy.viewport(1280, 720);
  });

  routes.forEach((route) => {
    it(`should render the ${route} page correctly`, () => {
      cy.visit(route, { failOnStatusCode: false });
      
      // Ensure the page body is visible
      cy.get('body').should('be.visible');
      
      // We can check if the page content has loaded by checking for common elements
      // or simply ensuring the URL is correct (in case of redirects)
      cy.url().should('include', route === '/' ? '' : route);
    });
  });
});
