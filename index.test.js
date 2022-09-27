import { jest} from '@jest/globals';
import {randomSecretGeneration,
        playEngine,
        message} from './index.js';

// test('1+1 = 2',()=>expect(1+1).toBe(2));

describe('test game',()=>{
    beforeEach(()=>{
        jest.spyOn(Math,'random').mockReturnValue(0,5);
        jest.spyOn(Math,'floor').mockReturnValue(5);

    })

afterEach(()=>{
    jest.clearAllMocks();
})
    test('randomSecretGeneration should return 5',()=>{
        const secret = randomSecretGeneration();
        expect(secret).toBe(5);
    })
    test('playEngine return "YOU WIN" when number is 5',()=>{

        const promptSpy = jest.spyOn(window,'prompt').mockReturnValue("5");
        jest.spyOn(window,'alert').mockImplementation(()=>{})
        const result = playEngine(randomSecretGeneration()
        );

        expect(promptSpy).toBeCalledTimes(1);
        expect(result).toBe(message.win);
    })
})
