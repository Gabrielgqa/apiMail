import { UserData } from "../../src/usecases/create-user/user-data"
import { InMemoryUserRepository } from "../../src/repositories/in-memory-user-repository"

describe('In memory user repository', () => {
    test('should return null if user is not found', async() => {
        const users: UserData[] = []
        const userRepository = new InMemoryUserRepository(users)
        const user = await userRepository.findUserByEmail('any@email.com')
        expect(user).toBeNull()
    })
})