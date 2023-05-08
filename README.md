QuoteBot legacy kata
===

This is a code exercise to practice how to manage and improve legacy code. It's not very big, and you can make it evolve progressively:

* Make it run.
* Make it testable and create some tests.
* Refactor and fix.
* Make it evolve, so it becomes a well-structured application.
* Make it Hexagonal :-)

## Notes from the original README:

A legacy codebase that resist a bit testing, by Cyrille Martraire.

[Original kata](https://github.com/cyriux/legacy-testing-kata-java)

First try to run it.

Then your goal is to make it testable so that you can make changes (FIXME inside) and perhaps refactor it a bit.

This code draws on a C# code kata authored by my distinguished colleague Nicolas M.; Thanks Nicolas for the good ideas in the kata!

## Notes on TypeScript version

This TypeScript version tries to mimic the behavior of the original java.

To try the code, clone or download this repo.

Then, install the dependencies:

```
npm i
```

This will install [jest](https://jestjs.io/).

Finally, to execute the application use this command:

```
npx ts-node src/Application.ts
```

Or use the IDE facilities to run.

**Important note:** you must not touch the `src/thirdparty` folder, given it is considered a vendor. 

## Where to start? Extracted notes from the original

If you hesitate where to start, here are some of the tricky bits that make it hard to test:

* Lack of dependency injection:
* A static main with no args
* Static service
* Hard-coded instantiation of a service that itself instantiates its dependencies, and again

Implementation issues:

* Very slow service
* Hidden dependency to a license key in env variable
* Random return value -> non-deterministic test
* Dialog popping up prompting for user input

Other tricks:

* New Date() in the middle of calculations -> non-deterministic test
* High combinatorial of calculations lead to too many required test cases
* Stateful behavior from internal cache: first call different from next calls
* Heavy dependency called within a large loop with different values
* Use a dependency or another depending on the passed parameter
