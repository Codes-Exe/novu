/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByTestId(dataTestAttribute: string, args?: any): Chainable<Element>;

    getBySelectorLike(dataTestPrefixAttribute: string, args?: any): Chainable<Element>;

    /**
     *  Window object with additional properties used during test.
     */
    window(options?: Partial<Loggable & Timeoutable>): Chainable<CustomWindow>;

    seed(): Chainable<any>;

    openWidget(): Chainable<any>;

    clear(): Chainable<any>;

    /**
     * Logs-in user by using UI
     */
    login(username: string, password: string): void;

    initializeOrganization(): Chainable<Response>;

    initializeShellSession(userId: string, identifier: string): Chainable<Response>;

    initializeWidget(session: any, shell?: boolean): Chainable<Response>;
    /**
     * Logs-in user by using API request
     */
    initializeSession(settings?: { noEnvironment?: boolean; shell?: boolean }): Chainable<Response>;

    logout(): Chainable<Response>;
  }
}
