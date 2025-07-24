export type stage = 'login' | 'registration' | 'none'

export interface IAuthScheme {
    currentStage: stage
}