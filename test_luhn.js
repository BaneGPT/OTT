function luhnCheck(cardNumber) {
    // Remove spaces
    const cleanNumber = cardNumber.replace(/\s/g, '');
    
    // Check if all digits and correct length
    if (!/^\d{16}$/.test(cleanNumber)) {
        return false;
    }
    
    let sum = 0;
    let shouldDouble = false;
    
    // Start from the rightmost digit
    for (let i = cleanNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cleanNumber.charAt(i));
        
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    
    return (sum % 10) === 0;
}

// Test with LO's sample
console.log("Testing LO's sample:", luhnCheck("1508 5965 2317 8756")); // Should be true

// Test with a known invalid
console.log("Testing invalid:", luhnCheck("1508 5965 2317 8750")); // Should be false
