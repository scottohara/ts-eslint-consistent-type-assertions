# Isolated reproduction for issue <tbd>

```
npm i
eslint
```

## Expected result

No errors

## Actual result

```
Oops! Something went wrong! :(

ESLint: 9.16.0

Error: Key "rules": Key "@typescript-eslint/consistent-type-assertions":
        Value {"objectLiteralTypeAssertions":"never"} should NOT have additional properties.
                Unexpected property "objectLiteralTypeAssertions". Expected properties: "assertionStyle".
        Value {"objectLiteralTypeAssertions":"never"} should have required property 'assertionStyle'.
        Value {"objectLiteralTypeAssertions":"never"} should match exactly one schema in oneOf.
```
