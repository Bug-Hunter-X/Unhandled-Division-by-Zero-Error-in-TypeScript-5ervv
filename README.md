# Unhandled Division by Zero Error in TypeScript

This repository demonstrates a common error in TypeScript: not handling potential runtime errors, like division by zero.

The `bug.ts` file contains a function that performs division without checking for a zero divisor. The `bugSolution.ts` file shows how to fix this by adding error handling.

This example highlights the importance of comprehensive error handling in production code even when using statically typed languages like TypeScript.  While TypeScript helps catch many errors at compile time, runtime errors still need to be considered and addressed appropriately.