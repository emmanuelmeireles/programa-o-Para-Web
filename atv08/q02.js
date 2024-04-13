function somaImparesAteN(N) {
    if (N === 1) {
        return 1;
    }
    return 2 * N - 1 + somaImparesAteN(N - 1);
}
