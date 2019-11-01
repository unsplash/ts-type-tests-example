# ts-type-tests-example

Video tutorial: https://www.youtube.com/watch?v=55OwY6RKMIw

A bare-bones example of how to test your types using the [TSLint `expect` rule], provided by [dtslint].

```ts
const add = (a: number, b: number): number => a + b;

add(1, 'oo') // $ExpectError
const result = add(1, 2) // $ExpectType number
```

```bash
tslint --project ./type-tests/ './type-tests/**/*.{ts,tsx}'
```

## TypeScript version

By default, this TSLint rule runs expectations against `typescript@next`. However, we want it to use our local version of TS, so we must specify `resolutions` in our `package.json`.

Note: the logs will still show `next`, because of a [hardcoded string](https://github.com/microsoft/dtslint/blob/3bda597a50554c16f694461b5575fac7f04bde20/src/rules/expectRule.ts#L41). To avoid confusion, we patched this (using the excellent [`patch-package`](https://github.com/ds300/patch-package)).

## Separate TS project

Our tests live in a separate TS project to avoid `tsc` from erroring where we have an _expected_ error (`$ExpectError`).

## Show test errors in VS Code

Whilst developing, the TSLint extension for VS Code provides inline feedback. Note: this extension requires TSLint to be installed as a top level dependency. dtslint depends on TSLint, but it will not be hoisted to the top level of `node_modules`. For this reason we add TSLint as an explicit dependency.

[dtslint]: https://github.com/microsoft/dtslint
[TSLint `expect` rule]: https://github.com/microsoft/dtslint/blob/4a9823c1fd459a047f57982da6e894d35a6603e6/src/rules/expectRule.ts