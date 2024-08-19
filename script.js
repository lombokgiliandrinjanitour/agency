function order(packageName) {
    const phoneNumber = '62817366355';
    const message = `https://lombokgiliandrinjanitour.github.io/agency/ Halo, I like to order  ${packageName}.`;
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
}
