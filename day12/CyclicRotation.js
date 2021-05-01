function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length < 1) return undefined;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop())
    }
    return A;
}