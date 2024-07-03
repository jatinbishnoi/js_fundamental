function calculateDeliveryTime(packageType) {
    let deliveryTime;
    
    switch (packageType.toLowerCase()) {
        case "standard":
            deliveryTime = "3-5 days";
            break;
        case "express":
            deliveryTime = "1-2 days";
            break;
        case "overnight":
            deliveryTime = "next day";
            break;
        default:
            deliveryTime = "Invalid package type";
    }
    
    return deliveryTime;
}

function main() {
    const packageType = prompt("Enter the type of package (standard, express, or overnight):").trim();
    const estimatedTime = calculateDeliveryTime(packageType);
    console.log(`Estimated delivery time: ${estimatedTime}`);
}

main();
