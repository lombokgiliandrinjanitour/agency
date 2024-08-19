function order(packageName) {
    const phoneNumber = '62817366355';
    const message = `Halo, I like to order  ${packageName}.`;
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
}
