function tribonacci(N) {
    if (N === 0) {
        return 0;
    }
    if (N === 1 || N === 2) {
        return 1;
    }
    return tribonacci(N - 1) + tribonacci(N - 2) + tribonacci(N - 3);
}
