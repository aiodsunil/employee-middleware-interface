export default `

  scalar Date

  type Employees{
   _id: ID,
   empId: Int,
   age: Int
   gender: String,
   name: String,
   salary: Int,
   createdAt: Date
  }

  type Query {
      getEmployees(_id: ID,
        empId: Int,
        name: String,
        gender: String,
        salary: Int
        createdAt: Date) : [Employees]
  }

  type Mutation {
    saveEmployee(
      empId: Int,
      name: String,
      gender: String,
      salary: Int) : Employees
  }
`;