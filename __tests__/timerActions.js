/* Fake all setTimeout etc. We don't want to depend on the
 * event queue because it is unreliable. We don't want that in a test */
jest.useFakeTimers();