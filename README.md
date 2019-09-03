# jest-only-changed-vs-mocks

Example project to show issue with `jest --only-changed` when using mocks.

## Scenario

We have a module `a.js` depending on module `b.js`. We mock module `b.js` in the
test ([a.spec.js](./src/a.spec.js)).

When we change `b.js` (try adding a comment) `jest --only-changed` behaves as
expected - runs the `a.spec.js` test.

But when we change `__mocks__/b.js` - it doesn't happen. This is not uncommon
behavior, may happen when e.g. someone is developing another module that also
depends on `b.js`.

## License

MIT
