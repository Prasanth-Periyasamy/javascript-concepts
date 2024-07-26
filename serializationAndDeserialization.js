// Serialization is the process of converting a data structure, such as JavaScript object or array, into a format that can be easily stored.
// In JavaScript, the most common serialization format is JSON (JavaScript Object Notation). The JSON format is easy for both human and machine to read and write.
// Example
// const data = { name: "John", age: 30 };
// const jsonString = JSON.stringify(data);
// Output: '{"name":"John","age":30}'

// Deserialization
// Deserialization is the opposite process of Serialization. It converts data in its serialized format into its original data structure, such as a JavaScript object or array, to make the data usable and accessible in the application.
// Example of deserialization in JavaScript using JSON:
// const jsonString = '{"name":"John","age":30}';
// const data = JSON.parse(jsonString);
// Output: { name: "John", age: 30 }

// In Bson
// BSON is a binary-encoded data interchange format designed to be more efficient in terms of storage and transmission compared to JSON. It extends JSON with additional data types and is typically used in the context of MongoDB.
import { BSON, ObjectId } from "bson";
const data = { _id: new ObjectId(), name: "John", age: 30 };
// serialization
const bytes = BSON.serialize(data);
// Output: <Buffer 2e 00 00 00 07 5f 69 64 00 64 ca 53 01 9d 14 77 b6 a1 a2 89 e4 02 6e 61 6d 65 00 05 00 00 00 4a 6f 68 6e 00 10 61 67 65 00 1e 00 00 00 00>

// deserialization
const doc = BSON.deserialize(bytes);
// Output: {
//  _id: new ObjectId("64ca53019d1477b6a1a289e4"),
//  name: 'John',
//  age: 30
// }

// EJSON
// Extended JSON (EJSON) is a superset of JSON, which means it includes all features of standard JSON and extends it additional conventions for representing certain data type and MongoDB specific constructs.
// Example of serialization & deserialization of EJSON using bson package:
import { EJSON } from "bson";
// const data = { "_id": { "$oid": "613e8693499f15328a17e8b1" }, "name": "John", "age": 30 }
// serialization
const jsonString = EJSON.stringify(data, { relaxed: false });
// Output: '{"_id":{"$oid":"613e8693499f15328a17e8b1"},"name":"John","age":{"$numberInt":"30"}}'
// deserialization
// const data = EJSON.stringify(data, { relaxed: false });
// Output: {
//  _id: new ObjectId("613e8693499f15328a17e8b1"),
//  name: 'John',
//  age: new Int32(30)
// }
