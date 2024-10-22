/**
 * Jest and React testing library:
 * 
 * 1. 
 */

/**
 * Packages that we need:
 * 1. @testing-library/react ---> uses ReactDOM to render a component for testing.
 * 2. @testing-library/user-event --> helps simulate user input like typing and clicking
 * 3. @testing-library/dom --> helps find elements that are rendered by our components. (no need to import, 1st import already includes these).
 * 4. jest --> runs our tests, reports results.
 * 5. jsdom --> simulates a browser when running in a node environment.
 */

/**
 * 1. Jest is incharge of finding all files in the src folder that ...
 *    a. end with .spec.js
 *    b. end with .test.js
 *    c. Any js files which are placed in a folder called __test__
 */

/**
 * 1. we use test() to write tests, it takes string and a func
 * 2. render() used to generate representation of html.
 * 3. we can then write some assertions after it got rendered.
 */

/**
 * 1. whenever you run a test cmnd, our components are rendered in the nodejs environment, 
 * i.e. Fake browser environment by js-dom.
 * 2. we can access the rendered tags/html using screen object
 * 
 */

/**
 * 1. Query system, find elements which are rendered. 
 * 2. In RTL, we have a collection of 48 functions
 */

/**
 * ARIA Role: 
 * 
 * 1. ARIA Roles clarify the purpose of an HTML Element.
 * 2. Traditionally used by screen readers - softwares to help people understand 
 *    the content on the screen.
 * 3. Many HTML elements have an 'implict' or automatically assigned, role.
 * 4. Elements can be assigned manually assigned a role. Even trained engineers do this incorrectly.
 * 
 */

/**
 * Roles (implict)
 * 
 * 1. 'heading' --> all h tags
 * 2. 'list' --> ul, li 
 * 3. 'button' --> button
 * 4. 'textbox' --> input, type="text"
 * 5. 'link' --> a 
 */

/**
 * 1. RTL enforces you to use role's to find elements
 */

/**
 * 1. Matchers --> to compare expected with the actual
 * 
 * Matchers from Jest :
 * 
 * toHaveLength
 * toEqual
 * toContain
 * toThrow
 * toHaveBeenCalled
 * 
 * Matchers from RTL: These are related to dom elements (it's attributes, rendered or not)
 * toBeInTheDocument
 * toBeEnabled
 * toHaveClass
 * toHaveTextContent
 * toHaveValue
 */

/**
 * 1. user event: 
 *    
 * a. user.click(element); ---> simulates clicking on the provided element.
 * b. user.keyboard('asd) --> simulates typing 
 * c. user.keyword('{Enter}') --> simulates pressing the enter key
 */

/**
 * 1. Jest has ability to run single test file as well.
 * 2. 
 */

/**
 * 1. Common error: whenever you see anything is not ... (it's probably because it's undefined).
 * 2. 
 */

/**
 * 1. Mock functions: not real, fake func that doesn't do anything
 * 2. Records whenever it gets called, and the arguments it was called with
 * 3. Used very often when we need to make sure a component calls a callback
 * 
 *   const mock = jest.fn();
     render(<UserForm handleUserAddition={mock} />);
     expect(mock).toHaveBeenCalled();
     expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@gmail.com" });
 */

/**
 * 1. Two ways in which input can be selected with.
 * screen.getByLabelText(/enter email/i)
 * screen.getByRole('textbox', {name:/enter email/i})
 */

