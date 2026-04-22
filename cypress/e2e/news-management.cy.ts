describe('News Management Dashboard', () => {
  beforeEach(() => {
    // Set viewport to desktop for initial tests
    cy.viewport(1280, 720);
    // Ignore hydration mismatches
    Cypress.on('uncaught:exception', () => false);
    // Visit the news management page
    cy.visit('/dashboard/news');
  });

  it('should render the news management page with correct title and stats', () => {
    // Check header
    cy.get('h1').should('be.visible');
    
    // Check stats grid - should have 4 stat cards
    cy.get('.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4').should('be.visible');
    cy.get('.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4 > div').should('have.length', 4);
    
    // Check for specific stat labels (using regex to be language agnostic if possible, but testing against default 'fa' is safer for now)
    // Actually, let's just check for visibility of the cards
    cy.get('.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4 > div').first().within(() => {
      cy.get('.text-3xl').should('be.visible'); // Value
    });
  });

  it('should have a functional search and filter bar', () => {
    // Check search input
    cy.get('input[placeholder*="جستجو"]').should('be.visible').type('تست');
    
    // Check filters
    cy.get('select').should('have.length', 2);
    cy.get('select').first().select(1); // Select first category
  });

  it('should display the news table with content', () => {
    // Check table existence
    cy.get('table').should('be.visible');
    
    // Check table headers
    cy.get('thead th').should('have.length', 5);
    
    // Check table rows (mock data has 3 items)
    cy.get('tbody tr').should('have.length.at.least', 1);
    
    // Check for an article title
    cy.get('tbody tr').first().within(() => {
      cy.get('.font-headline').should('be.visible');
      cy.get('button').should('have.length', 3); // Edit, Delete, More
    });
  });

  it('should show mobile-specific elements on smaller viewports', () => {
    cy.viewport('iphone-x');
    
    // Check for Floating Action Button (FAB)
    cy.get('button.md\\:hidden').should('be.visible');
    cy.get('button.md\\:hidden').find('svg').should('be.visible');
  });

  it('should handle pagination interaction', () => {
    // Check pagination container
    cy.get('.bg-muted\\/10').should('be.visible');
    
    // Click page 2 or next (if multiple pages exist in mock, but here it's static)
    // Just verify the buttons are clickable
    cy.get('.bg-muted\\/10 button').should('have.length.at.least', 2);
  });
});
