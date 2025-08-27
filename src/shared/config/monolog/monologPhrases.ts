import type { phrases } from "./types";

export const monologPhrases: Record<phrases, string> = {
    usernameMinLength: 'Мне кажется псевдоним коротковат',
    usernameRequired: 'Без псевдонима не кайф',
    passwordMinLength: 'Мне кажется пароль слишком короткий',
    passwordRequired: 'Без пароля не выйдет',
    registrationComplete: 'Осталось только запросить пропуск',
    loginComplete: 'С пропуском гораздо лучше',
    registrationFailed: 'Кажется я уже видел такой псевдоним в списке участников',
    loginFailed: 'Вроде пароль был другим... ничего не помню',
    jwtExp: 'Кажется я потерял пропуск... а может у меня его и не было. Надо зайти в таверну',
    jwtCorrect: 'Пропуск вроде на месте',
    passMissing: 'Без пропуска меня сюда не пустят, нфдо сначала сходить в таверну'
}