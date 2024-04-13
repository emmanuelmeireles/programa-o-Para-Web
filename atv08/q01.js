function somaAteN(N) {
    if (N === 1) {
        return 1;
    }
    return N + somaAteN(N - 1);
}
