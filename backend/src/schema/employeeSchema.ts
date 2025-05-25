// src/schema/schema.ts
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
} from 'graphql';
import Employee from '../models/employee';

const EmployeeType = new GraphQLObjectType({
    name: 'Employee',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLNonNull(GraphQLInt) },
        class: { type: GraphQLNonNull(GraphQLString) },
        subjects: { type: GraphQLList(GraphQLString) },
        attendance: { type: GraphQLNonNull(GraphQLInt) },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        employees: {
            type: new GraphQLList(EmployeeType),
            args: {
                class: { type: GraphQLString },
                name: { type: GraphQLString },
            },
            resolve(parent, args) {
                const filter: any = {};
                if (args.class) filter.class = args.class;
                if (args.name) filter.name = new RegExp(args.name, 'i');
                return Employee.find(filter);
            },
        },
        employee: {
            type: EmployeeType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Employee.findById(args.id);
            },
        },
    },
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addEmployee: {
            type: EmployeeType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                age: { type: GraphQLNonNull(GraphQLInt) },
                class: { type: GraphQLNonNull(GraphQLString) },
                subjects: { type: GraphQLList(GraphQLString) },
                attendance: { type: GraphQLNonNull(GraphQLInt) },
            },
            resolve(parent, args) {
                const employee = new Employee(args);
                return employee.save();
            },
        },
        updateEmployee: {
            type: EmployeeType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
                class: { type: GraphQLString },
                subjects: { type: GraphQLList(GraphQLString) },
                attendance: { type: GraphQLInt },
            },
            async resolve(parent, args) {
                const { id, ...updates } = args;
                return await Employee.findByIdAndUpdate(id, updates, {
                    new: true,
                });
            },
        },
    },
});

export const employeeSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
