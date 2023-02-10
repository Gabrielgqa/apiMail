import { UserData } from "../../../src/usecases/create-user/user-data";

describe('Create user use case', () => {
    test('should add user with complete data to db', async () => {
        const users: UserData[] = [];
        console.log(users)
        //const repository: UserRepository = new InMemoryUserRepository(users)
        //const usecase: CreateUser = new CreateUser(repository)
        //const name = 'any_name'
        //const email = 'any@email.com'
        //const response = await usecase.createUser({ name, email })
        //const user = repository.findUserByEmail('any@email.com')
        //expect((await user).name).toBe('any_name')
    })
})