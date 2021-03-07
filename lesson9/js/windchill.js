//wind chill factor
result = 35.74 + 0.6215 * 45 - 35.75 * (Math.pow(4.0, 0.16)) + 0.4275 * 45 * (Math.pow(4.0, 0.16)); 
document.getElementById("output").textContent = Math.round(result);
    
            
    