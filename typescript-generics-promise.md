## Introduction:
Generics in TypeScript allow us to write code that can work with different data types. Rather than having to write a separate function for each type we might want to use, we can write one generic function which can then be used with any type. The result is simpler, more flexible and type safe code.

## How do Generics work?

Generics are a very useful feature of the language. They allow you to write code which can be used with different types of data. Generics use a type parameter (T) to work with different data types.

# Example Without Generics

```ts
function getValue(value: string): string {
    return value;
}

console.log(getValue("Hello TypeScript"));
```

This function will only take string values. If we want to use numbers or booleans we'll need to write separate functions.

# Example With Generics

```ts
function getValue<T>(value: T): T {
    return value;
}

console.log(getValue<string>("Hello TypeScript"));
console.log(getValue<number>(100));
console.log(getValue<boolean>(true));
```

Here the same function is used with different data types without the need to create separate functions.

# Type Inference With Generics

TypeScript can also work out the data type for you, without you having to specify it at all.

```ts
function getValue<T>(value: T): T {
    return value;
}

console.log(getValue("Hello TypeScript"));
console.log(getValue(100));
console.log(getValue(true));
```

**Note:** We haven't specified <string>, <number> or <boolean>. TypeScript will work out the actual type from the argument. That's called **Type Inference**.

## Understanding Promise<T>

A Promise is a JavaScript object that represents the result of an asynchronous operation. It can be fulfilled with a value or rejected with an error.

For example:

- Getting the data off the API.
- Fetching information from the database.
- Awaiting completion of an async task.

# Example: Generics With Promise<T>

```ts
async function getData<T>(data: T): Promise<T> {
    return data;
}
async function main() {
    const name = await getData<string>("Arif");
    const age = await getData<number>(25);
    console.log(name);
    console.log(age);
}
main();
```
In this case `Promise<T>` is the type of value returned by the async function. We use `async` and `await` to make working with the promise result much easier.

## Conclusion

Generics make TypeScript code more reusable and type safe, and Promise<T> is a great way of handling asynchronous results with a clear type. 