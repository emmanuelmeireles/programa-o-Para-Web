function pell(N) {
    if (N === 0) {
        return 0;
    }
    if (N === 1) {
        return 1;
    }
    return 2 * pell(N - 1) + pell(N - 2);
}
v