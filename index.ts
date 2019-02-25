export function getTheAnswer() { return 42; }

export async function wait(millis: number) {
    return new Promise((resolve) => setTimeout(resolve, millis));
}
