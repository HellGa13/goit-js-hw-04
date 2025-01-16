function isEnoughCapacity(products, containerSize) {
    let totalProducts = 0;

    const values = Object.values(products);

    for (const quantity of values) {
        totalProducts += quantity;
    }

    return totalProducts <= containerSize;
}